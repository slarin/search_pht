import React from 'react'
import Mapper from './Mapper'
import ModalImager from './ModalImager'

class Searchbox extends React.Component{
	constructor(){
		super()
		this.state = {
			tail: 'African',
			display2: 'none'
		}
		
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.clikr = this.clikr.bind(this)
	}
	handleKeyDown(e){
		if(e.keyCode === 13){
		let val = document.getElementById('inpt')
		this.setState({tail: val.value})
		this.setState({display: "none"})
		this.setState({display2: "block"})
		}
	}
	clikr(event){
		let modal = document.getElementById("myModal")
		let sht = event.currentTarget.getAttribute("src")
		let shu = event.currentTarget.getAttribute("data-lct")
		let dscr = event.currentTarget.getAttribute("alt")
		modal.style.display = "block" 
		this.setState({muffler: sht})
		this.setState({describe: dscr})
		this.setState({location: shu})
	}
	reloader(){
		window.location.reload()
	}
	
	render(){
		let spanX = () => { 
				let modal = document.getElementById("myModal")
  				modal.style.display = "none"
				}
		
		return(
			<div>
				<div className="searchbox-div">
				<input id="inpt" type="text" className="input-search" placeholder="Search for photo" onKeyDown={this.handleKeyDown} style={{display:`${this.state.display}`}}/>
				
				<p style={{display:`${this.state.display2}`}}>Search results for <span>"{this.state.tail}"</span></p>
				</div>
				
				<Mapper srch={this.state.tail}
						onclick={this.clikr}
				/>
				
				<div id="myModal" className="modal">
						<span className="close" onClick={spanX}>&times;</span>
						<ModalImager 
								url = {this.state.muffler}
								classname = "modal-content"
								id = "modal-img"
								name = {this.state.describe}
								location ={this.state.location}
								/>
			
						<div className="caption"><p>{this.state.dscr}</p></div>
				</div>
				
				<div className="reloader" onClick={this.reloader}>
					<p>Search Again</p>
				</div>
			</div>	
		)
	}
}

export default Searchbox