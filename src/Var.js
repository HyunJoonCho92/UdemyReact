function Var() {
    let str = "리턴문테스트"
    let str2 = "이번에는 변수를 테스트해봅시다."
    let str3 = "logo512.png";

    return(
        <div>
            <h1> {str} </h1>
            <p> {str2} </p>
            <img src={str3} alt="대체" />
        </div>
    );
}


export default Var;