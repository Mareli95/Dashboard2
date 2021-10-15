import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import NotFound from './NotFound';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<React.Fragment>
			<div id="wrapper">
				<SideBar />
				<Switch>
					<Route exact path="/" component={ContentWrapper} />
					<Route path="/database">
						<div id="content-wrapper" className="d-flex flex-column">
							<div id="content">
								<ContentRowMovies />
							</div>
						</div>
					</Route>
					{/* <Route path="/informacion" component={ContentRowMovies} /> */}
					<Route path="/genres" component={GenresInDb} />
					<Route path="/last-movie" component={LastMovieInDb} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</React.Fragment>
	);
}

export default App;
