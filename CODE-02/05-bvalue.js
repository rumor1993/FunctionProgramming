function addMaker(a) {
  return function (b) {
    return a + b;
  };
}

function bvalue(key) {
  return function (obj) {
    return obj[key];
  };
}

var result = bvalue("a")({ a: "hi", b: "hello" });
console.log(result);

function log_length(value) {
  console.log(value.length);
  return value;
}
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
  [];
}

console.log(
  log_length(
    map(
      filter(users, function (user) {
        return user.age < 30;
      }),
      bvalue("age")
    )
  )
);
