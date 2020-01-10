import React from 'react'
import './mytodoapp.css'

class MyToDoApp extends React.Component {
    constructor(props){
        super(props)
        this.state={
            tasklist: [],
            inputToAdd: '',
            
        }
    }

addTask = () => {
    this.setState({
        tasklist: [...this.state.tasklist,{title:this.state.inputToAdd, complete: false}],
        inputToAdd:""

    });
}

handleOnChange= (event) => {
    this.setState({
        inputToAdd: event.target.value
    })
}

deleteTask = (myTask) => {
    this.setState({
        tasklist: this.state.tasklist.filter((e,i) => (i!=myTask))
    })
}

completeTask = (myTask) => {
    this.setState({
        tracklist: this.state.tasklist.map((e,i)=> (i==myTask)? e.complete=!e.complete  :e)
    })
}

    render() {
        return(
            <div className="toDoApp">
                <div className="blueheader">
                    <p className="pg1">To-Do App!</p>
                    <p className="pg2">Add new To-Do</p>
                    <div className="butinput"><input className="inputcase" placeholder="Enter a new task!" type="text" value={this.state.inputToAdd} onChange={this.handleOnChange} ></input>
                    <button className="addbutton" onClick={this.addTask}>Add</button></div>
                </div>
                <p className="middlepg">Let's get some work done!</p>
                <hr></hr>
                <div>
                        {this.state.tasklist.map((e,i)=> ( 
                            <div className="tasks" >
                                <button className="completebutton" onClick={()=>this.completeTask(i)}>{e.complete==false ? "Complete" : "Undo"}</button>
                                <button className="deletebutton" onClick={()=>this.deleteTask(i)}>Delete</button>
                                <p className={e.complete==false ? "targettext" : "targettext completeTask"}>{e.title}</p>
                            </div>
                        ))}
                    </div>
            </div>
        )
    }
}


export default MyToDoApp