function Pay(){
 
    const item = "카드";
    const title = "밥, 음료수";
    const price = 10000;
    const imgUrl = "https://img.danawa.com/prod_img/500000/168/086/img/2086168_1.jpg?shrink=330:330&_v=20181031122808";
    const result = (<div>
        <h1>{title} 먹었습니다. </h1>
        <h2>{item} 로 - {price / 10} 원을 지불합니다.(10개월 할부)</h2>
        <img src={imgUrl} alt="밥" />

    </div>);

    return result;
}

export default Pay;