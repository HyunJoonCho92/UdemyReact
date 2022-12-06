import React from "react";

class LoginForm extends React.Component{
    state = {};
    constructor(props){
        super(props);
        this.state={id: "아직 입력전", pw:"아직 설정 전", idresult: "", pwresult:""};
    }

    changeHandler = (e) => {
        //아이디입력중 발생 e.target.value
        //암호입력중 발생
        if(e.target.id == 'id') {
            this.setState({id: e.target.value});
            console.log(this.state);
        }
        else if(e.target.id == 'pw'){
             this.setState({pw : e.target.value});
            console.log(this.state);
        }
   
    }

    loginHandler = (e) => {
        alert(e.target.innerHTML );
        this.setState({idresult : this.state.id})
    }
    
    render(){
        return (
        <div>
            아이디입력<input type="text" id="id" name="id" placeholder="아이디 입력" onChange={this.ChangeHandler} /><br/>
            암호입력<input type="password" id="pw" name="pw" placeholder="암호 입력" onChange={this.ChangeHandler} /><br/>

            <button id="loginbtn" onClick={this.loginHandler}>로그인버튼</button>
            <h1>로그인 아이디와 암호 입력 결과 - {this.state.idresult}, {this.state.pwresult}</h1>
        </div>
        );
    }
}

export default LoginForm;