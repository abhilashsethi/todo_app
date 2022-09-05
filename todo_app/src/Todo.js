import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";

const Home = ({ text }) => {
	return (
		<List>
			<ListItem>
				<ListItemText primary="Todo" secondary={text} />
			</ListItem>
			{/* <li>{text}</li> */}
		</List>
	);
};

export default Home;
