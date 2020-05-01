import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/board.jsx";
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            boardData : [
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
            ]
        }
        
    }
    render (){
        return(
            
           <Board data = {this.state.boardData}/>
           
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('app') )
