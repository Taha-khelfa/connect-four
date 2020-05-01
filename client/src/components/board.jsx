import React from "react";

class Board extends React.Component{
	constructor(props){
		super(props);
		this.state={
			
			
			
		};
		
		
	}
	
	render(){
		return(
			<div className="board" >
			{
				this.props.data.map((col,colIndex)=>{
					return (
						<div className="column" id={colIndex.toString()} key={colIndex.toString()}>
						{
							col.map((row,rowIndex)=>{
								var cellId = rowIndex.toString()+colIndex.toString();   
								return (
									<div className="cell" id={cellId} key={cellId}>
									
									</div>
									)
								})
							}
							</div>
							);
						}) 
					}
					</div>
					)
				}
				
			}
			
			export default Board;