import React from 'react';

const ListLegislators = React.createClass({
    render() {
        return (
            <div>
                Legislators
                {this.props.legislators ?
                <ul>
                    {this.props.legislators.map((legislator) => {
                        return (
                            <li key={legislator.url}>
                                <button className='btn btn-sm btn-danger' onClick={this.props.deleteLegislator.bind(this, legislator)}>
                                    <i className='fa fa-times'></i>
                                </button>
                                &nbsp;{legislator.name}
                            </li>
                        )
                    })}
                </ul>
                : null }
            </div>
        )
    }
})

export default ListLegislators;