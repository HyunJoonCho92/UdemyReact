import React from "react";
class GreetingClass extends React.Component{
    render(){
        var welcome = function(ev){
            alert(ev.target.value + "하위");
        }
        
        return (<input type="button" value="인사" onClick={welcome}  />);
    }
}
export default GreetingClass;
