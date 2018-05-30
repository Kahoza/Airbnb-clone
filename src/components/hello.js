// Example of a very easy component 

import React from "react";

class Hello extends React.Component {
	render() {
		// The way we interpolate in React we need the {}
		return <div>Hello {this.props.firstName} {this.props.lastName}</div>;
	}
}

export default Hello;