import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addLegislator, fetchLegislators, deleteLegislator } from './actions'
import AddLegislator from './AddLegislator';
import ListLegislators from './ListLegislators';

const Legislators = React.createClass({
  componentDidMount() {
    this.props.fetchLegislators();
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
          <div className="col-md-4">
            {React.cloneElement(this.props.children, {
              legislators: this.props.legislators
            })}
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
  return bindActionCreators({
    addLegislator,
    fetchLegislators,
    deleteLegislator,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Legislators);
