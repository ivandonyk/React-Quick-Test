import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';

import Flex, { Col } from '../../components/Flex';
import Timeline, { TimelineItem } from '../../components/Timeline';
import Loading from '../../components/Loading';

import { getMovies } from '../../actions/movie';

class App extends React.Component {
	componentWillMount() {
		this.props.getMovies();
	};

	render() {
		if (!this.props.isLoaded) {
			return <Loading />;
		}

		const movies = _.groupBy(this.props.movies, (item) => {
			return moment(item.releaseDate).startOf('year').format();
		});

		return (
			<div>
				<Flex>
					<Col xs={{ left: 30 }}>
						{
							Object.keys(movies).map((item, key) => (
								<Timeline key={key}>
									{
										movies[item].map((movie, key) => (
											<TimelineItem item={movie} key={key} index={key} />
										))
									}
								</Timeline>
							))
						}
					</Col>
				</Flex>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoaded: state.movie.get('movies').get('isLoaded'),
		movies: state.movie.get('movies').get('data'),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getMovies: () => {
			dispatch(getMovies());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
