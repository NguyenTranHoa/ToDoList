import React, { Component } from 'react';

import Moment from 'react-moment';

export default class DateTime extends Component {
    render() {
        return (
            <header className="Header">
                <Moment format="dddd" className="Time-day" />
                <Moment format=", DD MMM" className="Time-date" />
                <div className="Time"><Moment format="HH:mm" className="Time-time"></Moment></div>
                <div className="row justify-content-center mt-4"><div className="col-6 text-center line">&nbsp;</div> </div> 
            </header>
        )
    }
}
