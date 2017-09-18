import React from 'react';

class ToggleButton extends React.Component {
	constructor() {
		super();

		this.state = {
			isEnabled: false
		}
	}

	render() {
		return (
			<button className="toggle-button">
				I am toggeld {this.state.isEnabled ? 'on': 'off'}
			</button>
		)
	}
}

export default ToggleButton;