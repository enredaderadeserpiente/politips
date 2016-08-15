import React from 'react';
import Navbar from './Navbar';

const App = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default App;
