import React from 'react';
import { Link } from 'react-router';

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
                                <Link to={`/legislators/${legislator.id}/`}>
                                    {legislator.name}
                                </Link>
                                &nbsp;
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