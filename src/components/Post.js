import React from 'react';

export default ({ post }) => {
	const { title } = post;
	return (
		<div className="card mb-3">
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
			</div>
		</div>
	);
};
