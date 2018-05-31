import React from "react";
import "./marker.css";

class Marker extends React.Component {
	render() {
		// We want to differenciate between the selected and non selected flat
		// We had an if statement to add selected to the marker once the flat is cliked 
		let classes = "marker";
		if(this.props.selected) {
			classes += " selected";
		}
		return (
			<div className={classes}>
				{this.props.text}€
			</div>);
	}
}

export default Marker; 