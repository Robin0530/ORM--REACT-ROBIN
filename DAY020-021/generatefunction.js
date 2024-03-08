// 제너레이터 함수 정의하기
// 제너레이터 함수는 function * () {yield; (첫번째 중단) yield (두번째 중단)}
// 제너레이터 함수의 목적은 함수내의 로직을 순차적으로 진행시키고
// 진행되는 순번에 따른 반환값의 다양하게 반환코자할때..
const gen = function* () {
  console.log(1);
  yield;

  console.log(2);
  yield;

  console.log(3);
  yield;
};

// 제너레이터 함수를 실행시킵니다.
const display = gen();

// 제너레이터 함수에서 제공되는 next()함수는 yield를 기준으로 해서 로직/프로세스를 순차적 실행시키는 명령어
display.next(); // 1번이 출력
display.next(); // 2번이 출력
display.next(); // 3번이 출력

// 무한 반복 제너레이터 함수
let i = 0;
const gen2 = function* () {
  while (true) {
    // yield전에 로직처리 후 반환값은 yield에 표시함
    // yield 반환값 지정
    yield i++;
  }
};

const display2 = gen2();
display2.next();
console.log("전역변수값", i);
display2.next();
console.log("전역변수값", i);
display2.next();
console.log("전역변수값", i);
display2.next();
display2.next();
