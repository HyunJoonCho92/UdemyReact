import React from "react";
class Employee extends React.Component { //React.Component 상속 표현

    render(){
        //
        const clickHandler = () => {alert("리액트 클래스 방식으로 정의되었습니다.");}
        return (<div onClick = {clickHandler}><h1>테스트해보세요</h1></div>);
    }
}

export default Employee;
//jsx 태그의 속성명이나 css 속성명 두단어결합 =