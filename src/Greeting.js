function Greeting(){
    let index = parseInt(Math.random() * 3);
    
    //0 이면 오늘도 즐거운 하루 되세요
    //1 이면 안녕하세요 리액트
    //2 이면 오늘 날씨 어때요?

    // let insa;
    // if(index == 0){
    //     insa = "오늘도 즐거운 하루 되세요.";
    // }
    // else if(index == 1){
    //     insa = "안녕하세요. 리액트";
    // }
    // else if(index == 2){
    //     insa = "오늘 날씨 어때요?";
    // }

    // let result = (<h1>{insa}</h1>);

    //return result;
    
    //조건 삼항연산자로 풀기
    let insa1 = "오늘도 즐거운 하루 되세요";
    let insa2 = "안녕하세요 리액트";
    let insa3 = "오늘 날씨 어때요?";

    let style2 = {textAlign:"center", color:"pink", backgroundColor: "blue", border:"2px solid silver"};

    return(
        index == 0 ? <h1 style={{color:'red', border:"2px solid green"}}>{index}:{insa1}</h1> :
        index == 1 ? <h1 style={style2}>{index}:{insa2}</h1> : <h1>{index}:{insa3}</h1>
    )
}

export default Greeting;


// var emp1 = {color:red, border:"2px solid green"};