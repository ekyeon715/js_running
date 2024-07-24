1.
let uninitialized;
console.log(uninitialized); // 결과값 < undefined >
// 변수는 선언했지만 값이 할당되지 않았기 때문에

2.
const apple = "사과"; 
// const를 쓴 이유는 아래 타입에러가 재할당을 할 수 없는데 했을 때 발생하는 오류이기 때문입니다.
apple = "바나나"; // TypeError: Assignment to constant variable


3. 
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
// 배열에서 인덱스3의 위치에 있는 데이터를 출력하기 때문에 0부터 시작해서 3이면 4번째니까 19


4. 
let mySchedule = "";
console.log(mySchedule || false); // < false > 빈칸은 falsy한 값이기 때문에
console.log(!!mySchedule); // < false > 빈칸은 false인데 그걸 2번 부정했기 때문에 false
