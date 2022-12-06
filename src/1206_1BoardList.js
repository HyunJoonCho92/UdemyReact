import React from "react";

class BoardHeading extends React.Component{
    // 게시물 테이블 제목행 구성
    // 번호 제목 작성자 조회수
    render(){
        return(
            <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>조회수</th>
                <th colSpan="2">추가동작</th>
            </tr>
            </thead>
        );
    }
}

class Board extends React.Component{
    render(){

        const deleteHandler = (e) => {
            //삭제버튼 클릭한 게시물을 게시물 리스트에서 삭제-화면 리렌더링
            // 1.삭제버튼 클릭한 게시물이 몇번째인지 알아온다.
            this.props.deleteBoard(e.target.id);
            
        }

        const updateHandler = (e) => {
            const obj = {seq : e.target.id, title: "수정", writer: "수정", viewcount:0};
            this.props.updateBoard(obj);
        }


        //boardList 내부 게시물 5개 배열 테이블 내부 출력
        //단, 출력시 viewcount 1개 증가
        //배열 map 반복
        const board_tr = this.props.body.map(function(oneboard, index){
            return(
                <tr key={oneboard.seq}>
                    <td>{oneboard.seq}</td>
                    <td>{oneboard.title}</td>
                    <td>{oneboard.writer}</td>
                    <td>{++oneboard.viewcount}</td>
                    <td><button id={index} onClick={deleteHandler}>삭제</button></td>
                    <td><button id={oneboard.seq} onClick={updateHandler}>수정</button></td>
                </tr>
                );

            });
        
        
        return(
            <tbody>{board_tr}</tbody>
        );
    
    
    }
}

class BoardInsertForm extends React.Component{
    //제목 : 입력창
    //작성자 : 입력창
    //글추가버튼

    //제목값, 작성자값 전달받아서 글추가버튼 클릭 시
    // 번호 : 게시물리스트 갯수 + 1
    // 조회수 : 0
    // 게시물 1개 객체 생성
    // props.addBoard(게시물1개 객체 전달)

    state = {size : this.props.size, title:"", writer:"", seq:this.props.size + 1, viewcount:0};

    render(){
        const changeHandler = (e) => {
            
            this.setState({[e.target.id] : e.target.value});

        }

        const insertHandler = () => {
            //this. 여기해야돼
            this.props.addBoard({
                seq: this.state.seq, 
                title : this.state.title,
                writer : this.state.writer,
                viewcount : this.state.viewcount
            })
        }

        return (
        <div>
            제목 입력 : <input type="text" id="title" onChange={changeHandler} />
            작성자 입력 : <input type="text" id="writer" onChange={changeHandler} />
            <button onClick={insertHandler}>글추가버튼</button>
        </div>
        );
    }



}

class BoardList extends React.Component{
    constructor(props){
        super(props);
        // 현재생성자함수에서만, render도, 값 변경시 렌더링 필요
        this.state = {boardList : [
             {seq:1, title:'제목1', writer : "작성자1", viewcount : 1},
             {seq:2, title:'제목2', writer : "작성자2", viewcount : 10},
             {seq:3, title:'제목3', writer : "작성자3", viewcount : 5},
             {seq:4, title:'제목4', writer : "작성자4", viewcount : 123},
             {seq:5, title:'제목5', writer : "작성자5", viewcount : 0}
         ]};
    }
    
    render(){
        //addBoard 구현 loop.js 참고
        // 1. 입력된 게시물 1개 전달
        // 2. 1번 전달 게시물을 게시물리스트 추가
        // 3. state 게시물리스트값 변경
        const addBoard = (newBoard)=>{ //1
            this.state.boardList.push(newBoard); //2
            this.setState({boardList : this.state.boardList}) //3
        }

        const deleteBoard = (index) => {
            //push, map, filter, splice
            this.state.boardList.splice(index, 1); //index부터 "1"개 지울거예요 라는 뜻
            this.setState({boardList : this.state.boardList});
        }

        const updateBoard = (updateBoard) =>{
            var temp = this.state.boardList.map(function(oneBoard){
                return updateBoard.seq == oneBoard.seq ? updateBoard : oneBoard;
            });

            this.setState({boardList : temp});

            
        }
            // 배열에서 반복하면서 수정게시물 seq와 배열내 5개 게시물들의 seq 비교
            // 수정클릭게시물 seq 일치하는 게시물 찾았다.
            // 찾은 게시물을 수정입력(제목, 작성자)게시물 내용 변경한다.
            // state 알려준다.


        return (
            <div>
                <table border = "3">
                    <BoardHeading />
                    <Board body={this.state.boardList} deleteBoard = {deleteBoard} />
                </table>
                <br/><hr/><br/>
                <BoardInsertForm size={this.state.boardList.length} addBoard={addBoard}/>
            </div>
        );
    }
}

export default BoardList;

