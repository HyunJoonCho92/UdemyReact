import React from "react";

class EventComponent1 extends React.Component{
    //state.value = 0;
    state = {value : 0, name : this.props.name };
    //clickHandler(){ 1 } //클래스 메소드 + 유명함수
    //clickHandler = () => { } // 클래스 메소드 + 화살표 함수

    clickHandler = () => { //렌더함수 지역함수_화살표함수
        this.setState({value : this.state.value + 1, name : "이벤트 처리중"});
        //this.value = this.value+1;
        //alert(this.value);
    }

    render(){
        
        return(
            <div>
                <div>{this.state.value} - {this.state.name}</div>
                <button onClick={ this.clickHandler }> 클릭 버튼 </button>
                <div>전달받은 name = {this.state.name}</div>
            </div>
        )
    }
}

export default EventComponent1;