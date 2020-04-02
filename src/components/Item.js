import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleCheckMark: true
        }
    }
    

    changeCheckMark = () => {
        this.setState({
            toggleCheckMark: !this.state.toggleCheckMark
        });
        this.props.stateCheckMark(this.state.toggleCheckMark, this.props.id);
    }

    render() {
        let tickMark = 'tick-mark';
        let stt = 'task-stt__main';
        let content = 'task-content__main';
        if(!this.state.toggleCheckMark) {
            tickMark += ' tick-mark--done';
            content += ' task-content--done';
        }

        if(this.props.stt) {
            stt += ' task-stt__main--done';
        }
        

        return (
            <FlipMove duration={1000} easing="ease-in-out" className="task-container">
                    <div className="task-complete">
                        <div className={tickMark} 
                        onClick={() => {this.changeCheckMark()}}></div>
                    </div>
                    <div className="task-stt">
                        <div className={stt}></div> 
                    </div>
                    <div className="task-content">
                        <div className={content}>
                            <input type="text" 
                            id={this.props.id} 
                            value={this.props.name}
                            onChange = {(e) => this.props.setUpdateEdit(e.target.value, this.props.id)}
                            >
                            </input>
                        </div>
                    </div>
                    <div className="task-delete">
                        <div className="btn-group">
                            <i className="fa fa-trash" onClick={() => {this.props.deleteInfoTask(this.props.id)}}></i>
                        </div>
                    </div>
            </FlipMove>
        ) 
    }
}
