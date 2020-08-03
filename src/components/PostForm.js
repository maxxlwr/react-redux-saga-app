import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert } from '../redux/actions';
import { Alert } from './Alert';

class PostForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: ''
		};
	}

	onSubmitHandler = (event) => {
		event.preventDefault();

		const { title } = this.state;

		if (!title.trim()) {
			this.props.showAlert('Text is cannot be empty!');
			return;
		}

		const newPost = {
			title,
			id: Date.now().toString()
		};

		this.props.createPost(newPost);

		this.setState({ title: '' });
	};

	onChangeInputHandler = (event) => {
		this.setState({
			title: event.target.value
		});
	};

	render() {
		const { title } = this.state;
		return (
			<form onSubmit={this.onSubmitHandler}>
				{this.props.alert && <Alert text={this.props.alert} />}
				<div className="form-group">
					<label htmlFor="title">Post name</label>
					<input
						type="text"
						className="form-control"
						id="title"
						value={title}
						onChange={this.onChangeInputHandler}
					/>
				</div>
				<button className="btn btn-success mb-3" type="submit">
					Create
				</button>
			</form>
		);
	}
}

const mapDispatchToProps = {
	createPost,
	showAlert
};

const mapStateToProps = (state) => ({
	alert: state.app.alert
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
