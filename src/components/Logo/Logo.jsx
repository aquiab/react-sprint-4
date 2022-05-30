import React from "react";

const Logo = () => {
  const stylePt2 = {
    fontWeight: 300
  };

  const stylePt1 = {
    fontWeight: 800
  };

  const styleLogo = {
    color: "#0CB093",
    userSelect: "none",
    fontSize: "2rem"
  };

	return (
		<div style={styleLogo}>
			<span className="logo-pt1" style={stylePt1}>Mi</span>
			<span className="logo-pt2" style={stylePt2}>
				Ecommerce
			</span>
		</div>
	);
};

export default Logo;
