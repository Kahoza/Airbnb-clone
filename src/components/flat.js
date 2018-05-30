import React from "react";
// We import the css file to this file
// ./ indicated that the file we are using is in the same folder than the current file
import "./flat.css";

class Flat extends React.Component {
	render() {
		// We are parsing a JSON file and taking the info needed 
		const title = this.props.flat.price 
			+ this.props.flat.priceCurrency +
			" - " + this.props.flat.name;

		const style = {
			// Everytime you use a CSS word that contains - you have to change the name for camelCase
			// Example background-image will be backgroundImage 
			// Template literals ES6
			backgroundImage: `url(${this.props.flat.imageUrl})`
		};

		return (
			<div className="flat">	
				<div className="flat-picture" style={style}></div>
				
				<div className="flat-title"></div>
					{title}

			</div>

		);
	}
}

export default Flat;