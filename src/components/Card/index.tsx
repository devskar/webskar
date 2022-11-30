import React from 'react';
import './Card.css';

interface Props {
	heading: string;
	subheading?: string;
	link?: string;
}

const Card: React.FC<Props> = ({ heading, subheading, link }) => {
	if (link) {
		return (
			<div className="card">
				<a className="card-link" target="_blank" rel="noreferrer" href={link}>
					<p className="heading">{heading}</p>
					<p className="subheading">{subheading}</p>
				</a>
			</div>
		);
	}

	return (
		<div className="card">
			<p className="heading">{heading}</p>
			<p className="subheading">{subheading}</p>
		</div>
	);
};

export default Card;
