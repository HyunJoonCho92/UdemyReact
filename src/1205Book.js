import React from "react";

class BookHeading extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<h1>제목 = {this.props.title}</h1>);
    }

}


class BookBody extends React.Component{
    constructor(props){
        super(props);
        this.body = "내용 = " + this.props.body;
        this.price = "가격 = " + this.props.price;        
    }

    render(){
        return (<div>
            <hr/>
            <h2>{this.body}</h2>
            <h2>{this.price}</h2>
            <hr/>
        </div>
        );
    }
}


class Book extends React.Component{
    render(){
        const { title, body, price } = this.props;
        
        return (
        <div>
            <BookHeading title={title}/>
            <BookBody body={body} price={price}/>
        </div>
        )
    }
}

export default Book;

// 오늘 구입한 책목록
// 제목 = 리액트
// 내용 = 리액트이야기를 재미나게 풀어봅시다.
// 가격 = 30000