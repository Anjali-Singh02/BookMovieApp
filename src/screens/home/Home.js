import React from 'react';
import './Home.css';
import { GridListTile, GridListTileBar } from '@material-ui/core';
function Home() {
	return (
		<div>
			<h3 className="sub-heading">Upcoming Movies</h3>
			<div className="upcoming-movies-field">
				<GridListTile cols={6}>
					<GridListTileBar />
				</GridListTile>
			</div>
		</div>
	);
}

export default Home;
