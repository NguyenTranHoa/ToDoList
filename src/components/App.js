import React, { Component } from 'react';
import '.././App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
//import uuid from 'uuid';
import DateTime from './DateTime';
import AddItem from './AddItem';
import ListItem from './ListItem';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataItem: [],
      toggleAddForm: false,
      toggleCheckBox: false
    }
  }

  componentWillMount () {
    this.setState({
      dataItem: JSON.parse(localStorage.getItem('dataItemStorage'))
    })
  }
  
  changeAddForm = () => {
    this.setState({
      toggleAddForm: !this.state.toggleAddForm
    })
  }

  getInfoTask = (task) => {
    let tasks = this.state.dataItem;
    tasks.push(task);
    this.setState({
      dataItem: tasks
    })
    
    localStorage.setItem('dataItemStorage', JSON.stringify(tasks));
  } 


  deleteInfoTask = (id) => {
     const dataItemUpdate = this.state.dataItem.filter(item => item.id !== id);
     this.setState({
       dataItem: dataItemUpdate
     })
     localStorage.setItem('dataItemStorage', JSON.stringify(dataItemUpdate));
  }

  setUpdateEdit = (value, id) => {
    const items = this.state.dataItem;
    items.forEach(e => {
      if(e.id===id)
        e.name = value
    })
    this.setState({
      dataItem: items
    })
    localStorage.setItem('dataItemStorage', JSON.stringify(items));
  }
  
  stateCheckMark = (check, id) => {
    const items = this.state.dataItem;
    items.forEach(e => {
      if(e.id===id)
        e.check = check
    })
    this.setState({
      dataItem: items
    })
    localStorage.setItem('dataItemStorage', JSON.stringify(items));
  }


  render() {
    return (
      <div className="App">
        <div className="App-container">
          <DateTime/>
          <AddItem 
            toggleAddForm = {this.state.toggleAddForm}
            changeAddForm = {() => this.changeAddForm()}
            getInfoTask = {(task) => this.getInfoTask(task)}
            />
          <ListItem
            dataItem = {this.state.dataItem}
            deleteInfoTask = {(id) => this.deleteInfoTask(id)}
            setUpdateEdit = {(value, id) => this.setUpdateEdit(value, id)}
            stateCheckMark = {(check, id) => this.stateCheckMark(check, id)}
          />
          <Footer 
          dataItem = {this.state.dataItem}
          />
        </div>
      </div>
    );
  }
}

export default App;