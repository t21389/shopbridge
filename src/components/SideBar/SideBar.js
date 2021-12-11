import React, { useState } from "react";
import "./SideBar.scss";

function SideBar({ listClickHandler, activeKey }) {
	return (
		<div className="sidebar">
			<ul>
				<li
					className={`item ${activeKey === "view" ? "active" : ""}`}
					onClick={() => {
						listClickHandler("view");
					}}
				>
					<span class="material-icons-outlined">shopping_cart</span>
					List Products
				</li>
				<li
					className={`item ${activeKey === "add" ? "active" : ""}`}
					onClick={() => {
						listClickHandler("add");
					}}
				>
					<span class="material-icons-outlined">add_circle_outline</span>
					Add Products
				</li>
			</ul>
		</div>
	);
}

export default SideBar;
