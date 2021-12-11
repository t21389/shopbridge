import React, { useState } from "react";
import SideBar from "../../SideBar/SideBar";
import MainPanel from "../../MainPanel/MainPanel";
import "./Home.scss";

function Home() {
	const [activeKey, setActiveKey] = useState("view");
	const listClickHandler = (action) => {
		console.log("active action ", action);
		setActiveKey(action);
	};
	return (
		<div className="shopbridge-home">
			<SideBar listClickHandler={listClickHandler} activeKey={activeKey} />
			<MainPanel activeKey={activeKey} />
		</div>
	);
}

export default Home;
