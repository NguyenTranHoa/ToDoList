import React, { Component } from 'react'

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            toggleCheckBox: false,
            check: false
        }
    }
    
    isChange = (e) => {
        this.setState({
            name: e.target.value,
            id: Date.now()
        })
    }

    changeCheckBox = () => {
        this.setState({
            toggleCheckBox: !this.state.toggleCheckBox
        })
    }

    saveInfoTask = () => {
        let task = {};
        task.id = this.state.id;
        task.name = this.state.name;
        task.stt = this.state.toggleCheckBox;
        task.check = this.state.check;
        this.props.getInfoTask(task);
        this.setState({
            id: '',
            name: '',
            toggleCheckBox: false
        });        
    }


    render() {
        let addButton = 'addButton';
        let showAddForm = 'form-container';
        let checkbox = 'checkbox';
        if(this.props.toggleAddForm) {
            addButton += ' addButton-active';
            showAddForm += ' form-container--active'
        }
        if(this.state.toggleCheckBox) {
            checkbox += ' checkbox-active';
        }
        let checkCondition = () => {
            if(this.state.name.length !== 0) {
                
                this.props.changeAddForm();
                this.saveInfoTask();
            }
        }
        
        return (
            <div>
                <div className={addButton} onClick={() => this.props.changeAddForm()}>
                    <div className="cross-1"></div>
                    <div className="cross-2"></div>
                </div>
                <div className={showAddForm}>
                    <div className="m-3 mt-4">
                        <h5 className="text-center text-secondary font-weight-bold"><ins>Add a new task</ins></h5>
                        <form>
                            <div className="form-group mt-5">
                                <div className="row justify-content-md-center">
                                    <input required type="text" name="name" placeholder="Enter text: " value={this.state.name}
                                    className={`col-md-10 mx-auto input`} 
                                    onChange = {(e) => this.isChange(e)} />
                                </div>
                                <div className="checkbox-form m-3 ">
                                    <h6 className="mr-3">Importance</h6>
                                    <div className={checkbox} onClick={() => this.changeCheckBox()}></div>
                                </div>
                                <input type="button" className="save font-weight-bold" value="Submit" 
                                onClick={() => {checkCondition()}}> 
                                    
                                </input>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}
