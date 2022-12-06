// 1. Calc 함수 정의
// 2. let num1 = 10;
//    let num2 = 20;
//    let op_list = ["+", "-", "*", "/"];
// 3. 중앙 정렬
// 호출 : 10 + 20 = 30(배경색 오렌지)
//       10 - 20 = -10(배경색 ??)
//       10 * 20 = 200(배경색 ??)
//       10 / 20 = 0.5(배경색 ??)
// 4. 외부 파일에서는 Calculator로 지정

function Calc(param){ //<Calc  su1="10" su2="20" />
            //param 객체 = {su1 : 10, su2 : 20};
    let num1 = parseInt(param.su1);
    let num2 = parseInt(param.su2);
    let op_list = ["+", '-', '*', '/'];

    let style1 = {textAlign:"center"};
    let style2;
    let style3;
    let style4;

    return(<div>
        <h2 style={{textAlign:"center", color:"orange"}}>{num1} + {num2} = {num1+num2}</h2>
        <h2 style={{textAlign:"center"}}>{num1} - {num2} = {num1-num2}</h2>
        <h2 style={{textAlign:"center"}}>{num1} * {num2} = {num1*num2}</h2>
        <h2>{num1} / {num2} = {num1/num2}</h2>

    </div>)
}


export default Calc;