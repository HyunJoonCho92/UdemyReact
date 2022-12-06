import React from "react";

class ConstructorTest extends React.Component{
    title = "제목"; //현재객체의 모든 함수에서 사용
    constructor(props){ //props는 다른 외부파일에서 전달받은것 저장 용도 변수
                        
        super(props);//부모의 생성자 호출
        console.log("1생성자함수호출");
        this.contents = "내용";//현재객체의 모든 함수에서 사용
        //this.writer= ;//호출. 다른외부파일에서 전달받자
        // this.list = {a:100, b:"비"};
        // this.list2 = [1,2,3,4];
    }

    render(){
        console.log("2랜더함수호출");
        return (<div>{this.title}-{this.contents}-{this.props.writer}</div>);
    }
}

export default ConstructorTest;