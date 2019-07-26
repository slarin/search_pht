import React from 'react'
import Img from 'react-image'
import loading from './loading.svg'

function ModalImager(props){
	const ldLogo = <img src={loading} className="App-logo" alt="logo" />
	const styles = {
		fontWeight: 700	
	}
	
	return(
		<div>
			<Img src ={props.url} loader={ldLogo} className={props.classname} />
			<p className="mdl-p"><span style={styles}>{props.name}</span><br/>{props.location}</p>			
		</div>
	)
}

export default ModalImager