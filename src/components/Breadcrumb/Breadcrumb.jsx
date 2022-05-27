import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import chevronRight from "../../assets/chevron-right.svg";
import "./breadCrumb.css";

const Breadcrumb = ({ steps }) => {
	return (
		<div className="breadCrumb">
			{steps.map((step, index) => {
				return (
					<React.Fragment key={`crumbFragment-${index}`}>
						<Link className="breadCrumbLink" key={`crumbLink-${index}`} to={step.path}>
							<h3 key={`crumb-${index}`}>{step.title}</h3>
						</Link>
						{index !== steps.length - 1 && (
							<img key={`chevron-${index}`} src={chevronRight} />
						)}
					</React.Fragment>
				);
			})}
		</div>
	);
};

Breadcrumb.defaultProps = {
	steps: [],
};

Breadcrumb.propTypes = {
	steps: PropTypes.arrayOf(
		PropTypes.shape({ title: PropTypes.string, path: PropTypes.string })
	),
};

export default Breadcrumb;
