import React, { Component } from 'react'

export default class Footer extends Component {

    render() {
        let tempArr = this.props.dataItem.filter(e => e.check===true);

        return (
            <div className="footer">
                Task complete: {tempArr.length} / {this.props.dataItem.length}
            </div>
        )
    }
}
