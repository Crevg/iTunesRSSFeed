import React from "react";
import "./Layout.css";

const HeaderBody = ({ header, body }) => {
	const hb = "layout";
	return (
		<div className={`${hb}`}>

			<div className="row">
				<div className={`${hb}__header col`}>{header}</div>
			</div>
			<div className={`container`}>

				<div className="row">
					<div className={`${hb}__body col`}>{body}</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderBody;