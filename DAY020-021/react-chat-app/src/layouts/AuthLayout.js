import React, { useState, useEffect } from "react";

//좌측 메뉴바 컴포넌트 참조
import LeftSidebarMenu from "./LeftSidebarMenu";

const AuthLayout = (props) => {
  return (
    <React.Fragment>
      <div className="layout-wrapper d-lg-flex">
        {/* 최좌측 채팅 좌측 메뉴바 영역  */}
        <LeftSidebarMenu />

        {props.children}
      </div>
    </React.Fragment>
  );
};

export default AuthLayout;
