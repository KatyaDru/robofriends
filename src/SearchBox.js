import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div>
			<input
			  className='ba pa2 br3 input-reset mb3 bw2 b--dark-green'
			  type='search'
			  placeholder='search robots'
			  onChange={searchChange}
			/>
		</div>	  
	);
}

export default SearchBox;