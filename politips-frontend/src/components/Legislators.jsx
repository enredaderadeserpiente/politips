import React from 'react';
import { connect } from 'react-redux'
import { fetchLegislators } from '../actions'

const Legislators = React.createClass({
  componentDidMount() {
    if (!this.props.legislators) {
      this.props.fetchLegislators();
    }
  },
 
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            Legislators
            {this.props.legislators ?
              <ul>
                {this.props.legislators.map(function(legislator) {
                  return <li key={legislator.url}>{legislator.name}</li>
                })}
              </ul>
            : null }
          </div>
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return state.legislators;
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchLegislators: () => {
          return dispatch(fetchLegislators())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Legislators);
