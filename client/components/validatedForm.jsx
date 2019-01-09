import React from 'react';
import PropTypes from 'prop-types';
import ValidatedFormPresentational from './validatedFormPresentational';

/**
 * A form that easily provides support for validating form and
 * showing useful messages to the users
 */
export default class ValidatedForm extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {};
	}

	handleSubmit = evt => {
		evt.preventDefault();
		this.props.submit(this.state.values);
	};

	handleChange = evt => {
		this.setState({[evt.target.name]: evt.target.value});
	};

	render() {
		return (
			<ValidatedFormPresentational
				onSubmit={this.handleSubmit}
				onChange={this.handleChange}
				inputs={this.props.inputs}
			/>
		);
	}
}

ValidatedForm.propTypes = {
	/** Callback function to call when the user submits the form */
	submit: PropTypes.func.isRequired,
	inputs: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			type: PropTypes.string
		})
	)
};