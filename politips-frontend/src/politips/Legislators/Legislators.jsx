import React from 'react';
import { connect } from 'react-redux'
import { addLegislator, fetchLegislators } from './actions'
import AddLegislator from './AddLegislator';
import ListLegislators from './ListLegislators';

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
          <div className="col-md-4">
            <ListLegislators {...this.props} />
          </div>
          <div className="col-md-4">
            <AddLegislator {...this.props} />
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
      },
      addLegislator: (legislatorData) => {
        return dispatch(addLegislator(legislatorData))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Legislators);
