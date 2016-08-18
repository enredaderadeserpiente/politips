import React from 'react';
import { connect } from 'react-redux';

const Votes = React.createClass({
  propTypes: {
      legislators: React.PropTypes.array
  },

  render() {
    return (
      <div>
        {this.props.legislators ? this.props.legislators.length : null}
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return state.legislators;
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps, undefined, {pure: false})(Votes);
