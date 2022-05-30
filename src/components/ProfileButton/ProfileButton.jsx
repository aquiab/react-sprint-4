import React, { useContext } from "react";
import { userContext } from "../../context/userContext";
import "./profileButton.css"

const ProfileButton = () => {
  const {user} = useContext(userContext);
	return (
		<div className="profileButton__container">
			<div className="profileButton__icon">
				<img src={user.image} alt="" />
			</div>
      {user.name}
		</div>
	);
};

export default ProfileButton;
