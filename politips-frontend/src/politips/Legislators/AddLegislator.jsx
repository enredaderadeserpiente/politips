import React from 'react';
import { connect } from 'react-redux'
import { addLegislator, fetchLegislators } from './actions'

const AddLegislator = React.createClass({
  componentDidMount() {
  },
 
  getInitialState() {
      return {
          "legislator": {
              "name": ""
          }
      }
  },

  setLegislatorName(e) {
      this.setState({
          "legislator": {
              "name": e.target.value
          }
      })
  },

  submit(e) {
    e.preventDefault();
    this.props.addLegislator(this.state.legislator)
    .then((legislator) => {
        console.log('legislator was added', legislator);
    })
  },

  render() {
    return (
      <form onSubmit={this.submit}>
          <div className='form-group'>
            <label>Legislator Name</label>
            <input type="text" className="form-control" value={this.state.legislator.name} onChange={this.setLegislatorName}/>
          </div>
          <button type='submit' className='btn btn-primary'>Add</button>
      </form>
    )
  }
})

export default AddLegislator;
