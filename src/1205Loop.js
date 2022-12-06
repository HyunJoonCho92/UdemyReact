import React from "react";

class Loop extends React.Component{
    constructor(props){
        super(props);
        this.userList = [
            {id:"sba1", pw:"sba1", name:"홍길동", age:"20"},
            {id:"sba2", pw:"sba2", name:"김영희", age:"30"},
            {id:"sba3", pw:"sba3", name:"안철수", age:"35"},
            {id:"sba4", pw:"sba4", name:"박보검", age:"25"},
            {id:"sba5", pw:"sba5", name:"이길동", age:"22"}
        ];
    }

    render(){
        // const loop = () => {
        //     let result = "";
        //     for(var i = 0 ; i < this.userList.length; i++){
        //         result += "<li>" + this.userList[i].id + "," + this.userList[i].name + "," + this.userList[i].age + "</li>";
        //     }
        //     return result;
        // }

        // return (
        //     <ol>{loop()}</ol>
        // );

        // ----------------------------------------------------------
        const loop = this.userList.map(
            (oneUser, index) => {
                return (<li key={index}>{oneUser.id} : {oneUser.name} : {oneUser.age}</li>);
            }
        );

        return (<ol>{loop}</ol>);
    }
}

class UserInform extends React.Component{

    loginHandler = (e) => {
        var id = e.target.id
        alert("회원가입버튼");
        //this.setState({idresult : this.state.id})
    }
    render(){
        
        return (
        <div>
            <h1>아이디입력<input type="text" id="id" name="id" placehold="아이디입력" onChange={this.changeHandler} /></h1>
            <h1>암호입력<input type="password" id="pw" name="pw" placehold="아이디입력" onChange={this.changeHandler} /></h1>
            <h1>이름입력<input type="text" id="name" name="name" placehold="아이디입력" onChange={this.changeHandler} /></h1>
            <h1>나이입력<input type="text" id="age" name="age" placehold="아이디입력" onChange={this.changeHandler} /></h1>

            <button id="userinsertbtn" onClick = {this.loginHandler} > 회원가입버튼 </button>

        </div>
        )
    }
}


class TotalUserInform extends React.Component{
    render(){
        return (
            <div>
                <UserInform />
                <Loop />
            </div>
        )
    }
}

export default Loop;
export {TotalUserInform};
