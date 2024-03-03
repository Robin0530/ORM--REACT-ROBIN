### 깊은 복사란?

여기서 말하는 ’**복사**‘란, 원본을 베낌. 종이를 포개고 그 사이사이에 복사지를 받쳐 한 번에 여러 장을 쓴다는 의미를 가지고 있다. 즉 동일한 내용을 그대로 다른 곳에서 사용하는 것을 말한다.

그리고, 깊은 복사란, 기존 값의 모든 참조가 끊어지는 것을 말한다. 특히 복사할 때, 참조형 타입 값(객체)에서 내부에 있는 모든 값이 새로운 값이 되는 것을 말한다.

Spread연산자를 사용하면 코드가 간결해지고 가독성이 높아지며, 불변성(Immutability)을 유지하는데 도움이 된다.

배열 객체 + 리액트에서 자주 사용하는 패턴들 5~6가지(케이스 별 10가지?), DeepCopy...

### 기본형 타입의 깊은 복사

- 자바스크립트에서는 할당 연산자(`=`)를 사용해 쉽게 복사를 할 수 있다.
  ```jsx
  var a = 10;
  var b = a;
  console.log(a); // 10
  console.log(b); // 10
  ```
  b에 10을 직접 할당해주지 않아도 a를 할당 했기 때문에 10이라는 값이 도출된다. 하지만, 정확하게 말하자면 할당 연산자(`=`)는 객체를 복사해서 값에 집어 넣는 것이 아니다. 단지 a가 가지고 있는 주소를 b에게 주어 b도 그 대상을 바라보게 만든 것이다. 기본형 타입은 ‘불변값’ 이라고 했다. 기본형 타입의 값을 재할당 할 때는 기존 값을 변경하는 것이 아닌 새로 만들어 주소 값을 준다는 의미였다. 따라서, a와 b는 메모리 공간에 생성된 10의 주소값을 가지고 있다.
  ```jsx
  var a = 10;
  var b = 10;
  console.log(a === b); // true
  var c = 20;
  var d = c;
  console.log(c === d); // true

  d = 30;
  console.log(c); // 20
  console.log(d); // 30
  console.log(c === d); // false
  ```
  - 기본형 타입의 값을 바라보는 주소값이 동일하기 때문에 a와 b는 각각 값을 할당 받았지만 동일하다고 판단한다.
  - d도 마찬가지로 c의 주소를 넘겨받았기 때문에 동일하다고 판단한다.
  - c의 주소를 넘겨 받은 d에 30을 재할당 했다.
  - c와 d는 다른 값을 바라보고 있다.
  내부의 값은 없지만 복사했을 때, 서로의 주소가 달라졌다. 기본형 타입의 깊은 복사다. **서로에게 영향을 주지 않는다.** 그럼, 참조형 타입을 보자.

### **참조형 타입의 깊은 복사**

```jsx
var obj1 = {
  a: 10,
  b: "abc",
};
var obj2 = obj1;
console.log(obj1 === obj2); // true

obj2.a = 20;
console.log(obj1); // {a: 20, b: 'abc'}
console.log(obj2); // {a: 20, b: 'abc'}
console.log(obj1 === obj2); // true
```

- obj1과 obj2가 가지고 있는 주소 값이 동일하기 때문에 true가 나왔다.
- obj2의 a프로퍼티의 값을 20으로 재할당했다.
- obj1, obj2의 값의 a 프로퍼티 모두 20으로 변경되었다.
- 여전히 obj1과 obj2가 가지고 있는 주소 값이 동일하다.

결과가 나온 이유는, obj2의 ’**프로퍼티**‘를 변경시켰기 때문이다. 프로퍼티 a가 바라보고 있는 주소 자체는 변경되었지만 obj1, obj2가 프로퍼티 ‘그룹’을 바라보는 주소자체는 변경되지 않은 것이다. 이렇게 객체 자체의 참조 값을 할당하면, 깊은 복사가 일어나지 않는다.

그렇다면 객체의 깊은 복사를 하려면, 즉 내부의 프로퍼티 값의 주소를 전부 다르게 하려면 어떻게 해야할까?

### **1. 재귀 함수를 이용**

deepCopy 함수는 함수 내부에서 자기 자신을 호출하는 재귀 함수다. 중첩된 객체라고 하더라도 프로퍼티 갯수만큼 돌면서 result 객체에 새롭게 할당해준다.

```jsx
var deepCopy = function (obj) {
  var result = {};
  if (typeof obj === "object" && obj !== null) {
    for (var prop in obj) {
      result[obj] = deepCopy(obj[prop]);
    }
  } else {
    result = obj;
  }
  return result;
};
```

### **2. JSON.parse(JSON.stringify(obj))를 사용**

JSON.stringify()는 JavaScript 값이나 객체를 JSON 문자열로 변환한다. 그리고 JSON.parse()는 JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성한다. 즉, 객체를 문자열로 변환 후 다시 객체 형태로 만든다. 문자열로 변환후 다시 객체로 만들면 원본 객체와의 참조가 모두 끊어진다.

```jsx
var obj1 = {
  a: 10,
  b: "abc",
};
var obj2 = JSON.parse(JSON.stringify(obj1));
obj2.b = 3;
console.log(obj1); // {a: 10, b: 'abc'}
console.log(obj2); // {a: 10, b: 3}
```

1. **배열의 복사 및 합치기**

   ```jsx
   const originalArray = [1, 2, 3];
   const copiedArray = [...originalArray]; // 배열 복사
   const newArray = [...originalArray, 4, 5]; // 새로운 요소 추가

   console.log(copiedArray); // [1, 2, 3]
   console.log(newArray); // [1, 2, 3, 4, 5]
   ```

2. **객체의 복사 및 병합**

   ```jsx
   const originalObject = { name: "John", age: 25 };
   const copiedObject = { ...originalObject }; // 객체 복사
   const newObject = { ...originalObject, city: "New York" }; // 새로운 속성 추가

   console.log(copiedObject); // { name: 'John', age: 25 }
   console.log(newObject); // { name: 'John', age: 25, city: 'New York' }
   ```

3. **객체의 깊은 복사**

   ```jsx
   const originalObject = { name: "John", address: { city: "New York" } };
   const deepCopiedObject = {
     ...originalObject,
     address: { ...originalObject.address },
   };

   deepCopiedObject.address.city = "San Francisco";

   console.log(originalObject.address.city); // 'New York'
   console.log(deepCopiedObject.address.city); // 'San Francisco'
   ```

4. **React에서 상태 업데이트**

   ```jsx
   import React, { useState } from "react";

   const MyComponent = () => {
     const [state, setState] = useState({ count: 0 });

     const increment = () => {
       setState((prevState) => ({ ...prevState, count: prevState.count + 1 }));
     };

     return (
       <div>
         <p>Count: {state.count}</p>
         <button onClick={increment}>Increment</button>
       </div>
     );
   };
   ```

5. **React에서 props 전달**

   ```jsx
   import React from "react";

   const ChildComponent = ({ prop1, prop2 }) => {
     // ...
   };

   const ParentComponent = () => {
     const props = { prop1: "value1", prop2: "value2" };

     return <ChildComponent {...props} />;
   };
   ```

6. **React에서 배열 항목 렌더링**
