var users = [
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "BJ", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "HI", age: 24 },
];

function filter(list, predicate) {
  var new_list = [];
  for (var i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) new_list.push(list[i]);
  }
  return new_list;
}

function map(list, iteratee) {
  var new_list = [];

  for (var i = 0, len = list.length; i < len; i++) {
    new_list.push(iteratee(list[i]));
  }
  return new_list;
}

console.log("###### 회원 목록 중 한명 찾기 ##########");

/**
 * 회원 목록 중 한명 찾기
 * fliter 함수를 통해 걸러낸 후 [0]으로 user를 얻어 냈지만
 * fliter 함수는 무조건 list.length만큼 predicate가 실행
 * 되기 때문에 효율적이지 못하고 동일 조건에 값이 두개이상 있다면
 * 두개 이상을 찾는다
 */

console.log(
  filter(users, function (user) {
    return user.id == 3;
  })[0]
);

/**
 * 회원 목록 중 한명 찾기 ( 개선 )
 * 원하는 user을 찾는다면 berak를 통해
 * for문을 빠져 나간다 하지만 해당 코드는
 * 재사용이 불가능하다
 */

var user;
for (var i = 0, len = users.length; i < len; i++) {
  if (users[i].id == 3) {
    user = users[i];
    break;
  }
}

/**
 * 재사용이 가능한 회원 목록 중 한명 찾기
 */

function findById(list, id) {
  for (var i = 0, len = list.length; i < len; i++) {
    if (list[i].id == id) return list[i];
  }
}

console.log(findById(users, 3));
console.log(findById(users, 5));

function findByName(list, name) {
  for (var i = 0, len = list.length; i < len; i++) {
    if (list[i].name == name) return list[i];
  }
}

console.log(findByName(users, "BJ"));

function findByAge(list, age) {
  for (var i = 0, len = list.length; i < len; i++) {
    if (list[i].age == age) return list[i];
  }
}

console.log(findByAge(users, "28"));

/**
 * for문과 if문을 가랴ㅕ서 깔끔해졌지만 findById findByAge findByName 사이에
 * 발생하는 중복이 있다는 점이 아쉽다. 즉 해당 함수들은 함수형적이지 못하다.
 * 한가지의 인자를 추가하면 해당 부분이 보완된다
 */

function findBy(key, list, val) {
  for (var i = 0, len = list.length; i < len; i++) {
    if (list[i][key] === val) return list[i];
  }
}

console.log("findBy", findBy("name", users, "BJ"));
console.log("findBy", findBy("id", users, 2));
console.log("findBy", findBy("age", users, 28));

/**
 * key가 아닌 메서드를 통해 값을 얻어야 할 경우
 * 두가지 이상의 조건이 필요한 경우
 * ===이 아닌 다른 조건으로 찾고자 할때
 *
 * 코드는 더욱 좋아졌지만 위와 같은 사항을 처리하지 못한다
 */

function User(id, name, age) {
  this.getId = function () {
    return id;
  };

  this.getName = function () {
    return name;
  };

  this.getAge = function () {
    return age;
  };
}

var users2 = [
  new User(1, "ID", 32),
  new User(2, "HA", 25),
  new User(3, "BJ", 32),
  new User(4, "PJ", 28),
  new User(5, "JE", 27),
  new User(6, "JM", 32),
  new User(7, "HI", 24),
];

console.log("users2 ", findBy("age", users2, 25));

function find(list, predicate) {
  for (var i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) return list[i];
  }
}

console.log(
  "find()",
  find(users2, function (u) {
    return u.getAge() == 25;
  }).getName()
);
// HA

console.log(
  "find()",
  find(users, function (u) {
    return u.name.indexOf("P") != -1;
  })
);
// {id: 4, name: "PJ", age: 28}

console.log(
  "find()",
  find(users, function (u) {
    return u.age == 32 && u.name == "JM";
  })
);
// {id: 6, name: "JM", age: 32}

console.log(
  "find()",
  find(users2, function (u) {
    return u.getAge() < 30;
  }).getName()
);
// HA

/**
 * 인자를 String이나 Number 대신 Function으로 변경한 작은 차이가 매우 큰 차이를 만들었다
 * find는 이제 배열에 어떤 값이 들어 있단 사용이 가능해졌다
 * 함수형 자바스크립트에서는 이 처럼 다형성을 높이는 기법을 많이 사용하며 이러한 기법은 정말 실용적이다
 * 이러한 방식은 다형을 높이며 동시에 안정성 또한 높인다
 */
