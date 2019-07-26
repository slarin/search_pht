import React from 'react'
import Imager from './Imager'

class Mapper extends React.Component{
	constructor(){
		super()
		this.state = {
			imgArr: []
		}
	}
	
	//componentDidMount(){}
	render(){
		fetch (`https://api.unsplash.com/search/photos?page=1&per_page=7&query=${this.props.srch}&client_id=83f0f0fa318af26ee1c0724605f47bd4e77733935726b2b489331935cb8f3eb7`)
			.then(data => data.json())
			.then(json => {
					let files = json.results
					//console.log(files)
					
					let imgData = files.map(item => <Imager
														key={item.id}
														name={item.user.name}
														lct={item.user.location}
														url={item.urls.regular}
														classname="imgs"
														onclick={this.props.onclick}
														/>)
					this.setState({imgArr: imgData})
		  		})
		
		return(
			<div className="imgs-container">
				{this.state.imgArr}
		 	</div>
		)
	
	}
}

export default Mapper