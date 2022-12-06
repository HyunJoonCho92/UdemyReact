import React from "react";

function A(){
    const i = 10;
    //반복문 조건문 실행문장
    return (<div><h1>A함수 구조로 정의된 컴포넌트입니다.</h1></div>);
}
const B = () =>{
    return (<div><h1>화살표 함수 구조로 정의된 컴포넌트입니다.</h1></div>);
}

class C extends React.Component{
    //상속 자동 포함 메소드 - render() - 화면 렌더링 시 호출. 요소 정의
    //상속 자동 포함 메소드 - constructor() - <c /> 생성 호출. 초기변수 정의
    render(){
        return (<div><h1>C 클래스 구조로 정의된 컴포넌트입니다.</h1></div>);
    }
}

export default A;
export {B};
export {C};