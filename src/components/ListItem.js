import React, { Component } from 'react'
import Item from './Item'

export default class ListItem extends Component {
    mappingData = () => this.props.dataItem.map((value, key) => 
            <Item 
                key={key} id={value.id} name={value.name} stt={value.stt}
                deleteInfoTask = {(id) => this.props.deleteInfoTask(id)}
                setUpdateEdit = {(value, id) => this.props.setUpdateEdit(value, id)}
                stateCheckMark = {(check, id) => this.props.stateCheckMark(check, id)}
            />
        );
    render() {
        return (
            <div>
                {this.mappingData()}
            </div>
        )
    }
}
