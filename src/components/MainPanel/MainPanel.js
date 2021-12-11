import React from "react";
import ListProduct from "./ListProduct/ListProduct";
import AddProduct from "./AddProduct/AddProduct";
import "./MainPanel.scss";

function MainPanel({activeKey}) {

    const renderActivePanel = () => {
        if(activeKey === 'view') {
            return <ListProduct />;
        } else if(activeKey=== 'add'){
            return <AddProduct />
        }
    }
	return (
		<div className="mainpanel">
			{renderActivePanel()}
		</div>
	);
}

export default MainPanel;
