/**
    var temp_users = [];
    for ( var i = 0, len = users.length; i < len; i++ ) {
        if (users[i].age < 30) temp_users.push(users[i])
    } 
 */

// for => filter 로 변경한 코드
function filter(list, predicate) {
    var new_list = [];
    for (var i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i])) new_list.push(list[i])
    }
    return new_list
}

/**
 * filter함수는 predicate함수 내부에서 어떤 일이 발생하는지
 * 전혀 알지 못한다. ID를 조회할지 AGE를 조회할지 filter는 모른다
 * 오직 predicate 결과에만 의존한다
 * 
 * new_는 함수형 프로그래밍에서 상징적인 부분이다
 * 이전 값의 상태를 변경하지 않고 조건에 맞지 않는 값을 지운다거나 하지않고
 * 새로운 값을 다루는 것은 함수형 프로그래밍에 매우 중요한 컨셉이다
 */

var users = [
    { id: 1, name: "ID", age: 32 },
    { id: 2, name: "HA", age: 25 },
    { id: 3, name: "BJ", age: 32 },
    { id: 4, name: "PJ", age: 28 },
    { id: 5, name: "JE", age: 27 },
    { id: 6, name: "JM", age: 32 },
    { id: 7, name: "HI", age: 24 },
];

var users_under_30 = filter(users, function(user) { return user.age < 30 })
console.log(users_under_30.length);
// 4

var users_over_30 = filter(users, function(user) { return user.age < 30 })
console.log(users_over_30.length);
// 3


