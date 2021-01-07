
function addMaker(a) {
    return function(b) {
        return a + b;
    }
}

var add5 = addMaker(5);
add5(3);
add5(4);

/**
 * 해당 예제들은 간단하지만 값으로서의 함수
 * 클로저, 스코프등 다양한 이야기를 담고 있따
 */