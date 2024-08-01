// 1. 출력값과 출력되는 값의 이유를 설명해주세요
// yuno2가 출력된다. function a가 호출되고 그 안에 name이 없기 때문에 상위 스코프를 참조하기 때문에 function myName 안에 있는 yuno2를 출력한다.

var name = "yuno";

function myName(){
    var name = "yuno2";
    function a(){
        console.log(name);
    }
    return a();
}

myName();


// 2. 출력값과 출력되는 값의 이유를 설명해주세요
// 1이 출력된다. if문은 함수가 아니기 때문에 참조하지 않고 전역 스코프를 참조한다.

function test() {
    var x = 1;

    if(true){
        var x = 2; 
    }

    console.log(x);
}

test();


// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.
// 화살표 함수는 항상 상위 스코프를 참조하고 일반 함수는 내부에서 우선적으로 참조한다.

const nameObj  = {
    name: "yuno",
    method: function() {
        const arrow = () => {
            console.log(`화살표 함수 : ${this.name}`);
        };
        function normal() {
            console.log(`일반 함수 : ${this.name}`);
        }
        arrow();
        normal();
    }
};

nameObj.method();

