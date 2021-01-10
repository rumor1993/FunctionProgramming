/**
 * Higher order function ( 고차 함수 )
 * 앞서 구현한 map, filter, find, findIndex, bvalue, bmatch
 * 와 같은 함수들은 모두 고차함수다.
 *
 * 고차함수란, 함수를 인자로 받거나 함수를 리턴하는 함수를 말한다
 * 함수를 인자로 받거나 함수를 리턴하는 행위를 둘다 행하는것도 고차함수다
 * 보통 고차함수는 함수를 인자로 받아 필요한 때에 실행하거나 클로저를 만들어 리턴한다.
 *
 * 앞서 만든 map, filter, find, findIndex는 Underscore.js 에도 있는 함수들이다
 * Underscire.js 는 유명한 함수형 자바스크립트 라이브러리이다
 */

var map = function (list, iteratee) {
  var new_list = [];
  for (var i = 0, len = list.length; i < len; i++) {
    new_list.push(iteratee(list[i], i, list));
  }
};

var filter = function (list, predicate) {
  var new_list = [];
  for (var i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i], i, list)) new_list.push(list[i]);
  }
  return new_list;
};

var find = function (list, predicate) {
  for (var i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i], i, list)) return list[i];
  }
};

var findIndex = function (list, predicate) {
  for (var i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i], i, list)) return i;
  }
  return -1;
};

/**
 * predicate에서 두 번째 인자 사용하기
 */
console.log("### predicate 에서 두 번재 인자 사용하기 ###");
console.log(
  filter([1, 2, 3, 4], function (val, idx) {
    console.log(idx);
    return idx > 1;
  })
);
// [3 , 4]

console.log(
  filter([1, 2, 3, 4], function (val, idx) {
    return idx % 2 == 0;
  })
);
// [1 , 3]

/**
 * idenity
 * 받은 인자를 그대로 내 뱉는 함수
 *
 * false, undefined, null, 0, NaN, "" 은 모두 Boolean 으로 평가 했을때 false다.
 * 이것들은 모두 Falsy Value다 그리고 Falsy Value가 아닌 모든 값들은 Truthy Value다
 *
 * falsy = function(v) { return !v; }
 * truthy = function(v) { return !!v; }
 */

var identity = function (v) {
  return v;
};
var a = 10;
console.log(identity(a));

console.log(filter([true, 0, 10, "a", false, null], identity));
// [true, 10, a]
