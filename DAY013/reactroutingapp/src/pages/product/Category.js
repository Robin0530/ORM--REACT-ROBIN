import React from "react";

// useParams 훅을 이용해 손쉽게 url을 통해 파라메터 방식으로 전달되는 데이터를 추출할 수 있다.
import { useParams } from "react-router-dom";

const Category = ({ match }) => {
  const idx = useParams();
  return (
    <div>
      <h1>분류별 상품목록 웹페이지</h1>
      <h3>추출된 파라메터 값 idx={idx}</h3>
    </div>
  );
};

export default Category;
