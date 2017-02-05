import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchAndHandleBikes } from '../../redux/bikes';
import BikeList from '../../components/BikeList/BikeList';
import Loading from '../../components/Loading/Loading';

class BikeListContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.props.fetchAndHandleBikes();
  }

  render() {
    const { isFetching, error, bikes } = this.props;
    if (isFetching && !bikes.length) {
      return <Loading />;
    }
    if (error && !bikes.length) {
      return <p>{error}</p>
    }
    return (
      <BikeList
        bikes={bikes}
      />
    );
  }
}

BikeListContainer.propTypes = {
  error: PropTypes.string,
  bikes: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchAndHandleBikes: PropTypes.func.isRequired,
};

const mapStateToProps = ({isFetching, error, bikes}) => {
  return {
    isFetching,
    error,
    bikes,
  };
};

BikeListContainer = connect(
  mapStateToProps,
  { fetchAndHandleBikes }
)(BikeListContainer);

export default BikeListContainer;