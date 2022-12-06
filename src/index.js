import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyApp from './MyApp';
import Var from './Var';
import Pay from './Expression';
import Greeting from './Greeting';
import Calc from './Calculator';
import Employee from './ClassSyntax'
import GreetingClass from './GreetingClass';
import A, { B, C } from './1205FileTest';
import ConstructorTest from './1205ConstructorTest';
import Book from './1205Book';
import EventComponent1 from './1205EventComponent1';
import EventComponent2 from './1205EventComponent2';
import LoginForm from './1205LoginForm';
//import TotalUserInform from './1205Loop_Form2';
import TotalUserInform from './1205LoopByInstructor';
import BoardList from './1206_1BoardList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Greeting />
    <Calc  su1="10" su2="20" />
    <Employee />
    <GreetingClass />
    <A />
    <B />
    <C /> 
    <ConstructorTest writer="외부데이터의 작성자" /> 
    <Book title="리액트" body="리액트 이야기를 재미나게 풀어봅시다." price = "30000"/>
    <Book title="스프링" body="mvc는 물론 부트까지도 다룹니다." price = "40000"/>
    <Book title="마리아db" body="오라클 mysql mariadb 비교하여 설명합니다." price = "25000"/>
    <EventComponent1 name = "리액트이벤트처리" />
    <EventComponent2 />
    <LoginForm /> */}
    {/* <Loop /> */}
    {/*<TotalUserInform/>*/}
    <BoardList/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
