import React from "react";
class GreetingClass extends React.Component{
    render(){
        var welcome = function(ev){
            alert(ev.target.value + "νμ");
        }
        
        return (<input type="button" value="μΈμ¬" onClick={welcome}  />);
    }
}
export default GreetingClass;
