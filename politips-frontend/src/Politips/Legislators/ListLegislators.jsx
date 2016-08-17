import React from 'react';

const ListLegislators = React.createClass({
   render() {
        return (
            <div>
                Legislators
                {this.props.legislators ?
                <ul>
                    {this.props.legislators.map(function(legislator) {
                    return <li key={legislator.url}>{legislator.name}</li>
                    })}
                </ul>
                : null }
            </div>
        )
    }
})

export default ListLegislators;