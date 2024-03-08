import './App.css'

import React, { Suspense } from 'react'

import { Route, Routes } from 'react-router-dom'

// 컴포넌트 참조하기
// import Counter from './components/Counter';
// import TodoList from './components/TodoList';

// 공통레이아웃은 직접참조하기
import GNB from './components/GNB'

const LoginPage = React.lazy(() => import('./pages/Login'))
const LoginPage2 = React.lazy(() => import('./pages/Login2'))
const EntryPage = React.lazy(() => import('./pages/Register'))
const ProfilePage = React.lazy(() => import('./pages/Profile'))
const ProfilePage2 = React.lazy(() => import('./pages/Profile2'))
const MainPage = React.lazy(() => import('./pages/Main'))

function App() {
    return (
        <div className="App">
            {/* <Counter></Counter>
      <hr />
      <TodoList></TodoList> */}
            <GNB></GNB>

            {/* 로그인되기 전까지 뜨는것... */}
            <Suspense fallback={<div>로딩중...</div>}>
                <Routes>
                    <Route path="/" Component={MainPage}></Route>
                    <Route path="/login" Component={LoginPage}></Route>
                    <Route path="/login2" Component={LoginPage2}></Route>
                    <Route path="/entry" Component={EntryPage}></Route>
                    <Route path="/profile" Component={ProfilePage}></Route>
                    <Route path="/profile2" Component={ProfilePage2}></Route>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App
