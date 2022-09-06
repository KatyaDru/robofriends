import React from 'react';


const Card = ({ name, id, keywords }) => {
	return (
		<div className='tc bg-washed-green dib br3 pa3 ma3 grow bw2 shadow-3'>
		  <img src={`robots/robo${id}.jpeg`} alt={name} />
		  <div>
		  	<h3>{name}</h3>
		  	<p>Keywords: {keywords}</p>
		  </div>
		</div>  
	);
}

export default Card;