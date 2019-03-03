import React, {Component} from "react";

class Box extends Component{

	constructor(props){
		super(props)

		this.state= {imagePath:"",
		 name:"",
		 description:"",
		 buttonStyle: 
		 { marginTop:20, display: 'inline-block', color: 'goldenrod', backgroundColor:'Black', height:50, width:100, bordrColor:'gold',
		 }

		}
	}

	
 onButtonClick(num){
       if(num==1){
		this.setState({name:"BUFFON",description:"GOALKEEPER",imagePath:"./buffon.jpg"});

	   }else if(num==2){
		this.setState({name:"CHIELLINI",description:"DEFENDER",imagePath:"./chiellini.jpg"});

	   }else if(num==3){
		this.setState({name:"DELPIERO",description:"FORWARDER",imagePath:"./delpiero.jpg"});

	   }
 }
	 
	render() {
		return(
			
			<div className="box">
			<center>
			<button onClick={()=>{this.onButtonClick(1) } } style={this.state.buttonStyle} >BUFFON</button>
        <button  onClick={()=>{this.onButtonClick(2) } } style={this.state.buttonStyle}>CHIELLINI</button>
        <button  onClick={()=>{this.onButtonClick(3) } } style={this.state.buttonStyle}>DELPIERO</button>
		</center>
		<center><img className="Image" src={this.state.imagePath} className="" alt="" /></center>
		<br/>
		<center><h3 className='nom'>{this.state.name}</h3></center>
		<center><p >{this.state.description}</p></center>
           </div>
			
		
            
		);
	}
}

export default Box;