/**
    var ages = [];
    for ( var i = 0, len = temp_users.length; i < len; i++ ) {
        ages.push(temp_users[i].age);
    }
    
    리팩토링의 핵심은 중복을 제거하고 의도를 드러내는 것이다!
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

function filter(list, predicate) {
    var new_list = [];
    for (var i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i])) new_list.push(list[i])
    }
    return new_list
}

function map(list, iteratee) {
    var new_list = [];
    
    for (var i = 0, len = list.length; i < len; i++) {
        new_list.push(iteratee(list[i]));
    }
    return new_list
}


var users_under_30 = filter(users, function(user) { return user.age < 30 })
console.log(users_under_30.length);
// 4

var ages = map(users_under_30, function(user) { return user.age });
console.log(ages)

var users_over_30 = filter(users, function(user) { return user.age < 30 })
console.log(users_over_30.length);
// 3

var names = map(users_over_30, function(user) { return user.name });
console.log(names)

/**
 * 코드가 단순해졌다. for도 없고 if도 없다.
 *
 *  - 회원 중 나이가 30세 미만인 사람들을 뽑아 users_under_30 에 담는다
 *  - users_under_30에 담긴 회원의 나이만 뽑아서 출력한다
 *  - 회원 중 나이가 30세 이상인 사람들을 뽑아 user_over_30에 담는다
 *  - users_over_30에 담긴 회원의 이름만 뽑아서 출력한다.
 */

 console.log("################### 함수 중첩 1 #################")


var ages = map(
            filter(users, function(user) { return user.age < 30}),
            function(user) { return user.age })
            
            console.log(ages)
            console.log(ages.length)

var names = map(
            filter(users, function(user) { return user.age >= 30}),
            function(user) { return user.name });
    
            console.log(names.length)
            console.log(names)