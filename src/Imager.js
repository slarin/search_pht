import React from 'react'
import Img from 'react-image'
import loading from './loading.svg'

function Imager(props){
	const ldLogo = <img src={loading} className="ld-logo" alt="logo" />
	
	return(
		<div className="img-holder">
			<Img src ={props.url} loader={ldLogo} alt={props.name} className={props.classname} onClick={props.onclick} id={props.id} data-lct={props.lct}/>
			<p className="img-p">{props.name}<br/>{props.lct}</p>			
		</div>
	)
}

export default Imager