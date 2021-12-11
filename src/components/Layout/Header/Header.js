import React from "react";
import "./Header.scss";

function Header() {
	return (
		<div className="header">
			<div className="header--logo">
				<span class="material-icons-outlined">menu</span>
				<span class="header--logo-text">ShopBridge</span>
			</div>
			<span className="material-icons-outlined profile-icon">account_circle</span>
		</div>
	);
}

export default Header;
