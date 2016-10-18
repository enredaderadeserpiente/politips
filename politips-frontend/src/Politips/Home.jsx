import React from 'react';
import { requestGeolocation } from './Auth/actions';
import { connect } from 'react-redux'

const Home = React.createClass({
  render() {
    var center = {"lat": 30.2361358, "lng": -97.7362387};

    return (
      <div>
        <div style={{"width": "100%", "height": "500px"}}>
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps, undefined)(Home);
