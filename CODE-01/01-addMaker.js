// 함수로 함수를 리턴하는 기법

function addMaker(a) {
    return function(b) {
        return a + b;
    }
}

let result = addMaker(10)(5)
console.log(result)



/*
*   addMaker(10)의 결과는 function(b) { return 10 + b } 와 같고 함수다. 
*   ( function(b) { return 10 + b }) (5) 와 같으므로 15가 된다
*/