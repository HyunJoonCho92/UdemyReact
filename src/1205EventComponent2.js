import React from "react";
import {useState} from "react";

function EventComponent2(p){
    //state객체 변수와 setState함수 없다.
    //useState 라이브러리 호출
    const [value, setValue] = useState(0);
    const [name, setName] = useState(p.name);
    const clickHandler = () =>{
        setValue(value+1);
        setName("이벤트처리중");
    }
    
    return (
        <div>
            <div><h1>{value} - {name}</h1></div>
            <button onClick={clickHandler}> 클릭버튼 </button>
            <div><h1>전달받은 name = {name}</h1></div>
        </div>
    )

}

export default EventComponent2;