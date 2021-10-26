
import React, { Component } from "react";


export default class CreateTask extends Component {
    constructor(props) {
        super(props);

        this.onChangeTaskName= this.onChangeTaskName.bind(this);
        this.onChangeCompleted = this.onChangeCompleted.bind(this);
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


this.state = {
    taskName: "",
    completed: false,
    user: "",
    description: "",
}
}

onChangeTaskName(e) {
    this.setState({
        taskName: e.target.value
    });
}
onChangeCompleted(e) {
    this.setState({
        completed: e.target.value
    })
}
onChangeUser(e) {
    this.setState({
        user: e.target.value
    })
}
onChangeDescription(e) {
    this.setState({
        description: e.target.value
    })
}

onSubmit(e) {
    e.preventDefault();

    const task = {
        taskName: this.state.taskName,
        completed: this.state.completed,
        user: this.state.user,
        description: this.state.description
    }

    console.log(task);

    window.location = '/';
}
render() {
    return (
        <div>
            <h3>Add New Job to the Collection</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Task Name: </label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        value={this.state.taskName}
                        onChange={this.onChangeTaskName}
                    />
                </div>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                  <label> Task Completed: </label>
                    <input type="onClick" className="form-control"
                        value={this.state.completed}
                        onChange={this.onChangeCompleted}
                    />
                    <button type="button" className="btn btn-danger">Yes</button>
                    <button type="button" className="btn btn-warning">No</button>
                </div>
                <div>
                    <label>User: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.user}
                        onChange={this.onChangeUser}
                    />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                    />
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" type="button">Submit Task</button>
                </div>
            </form>
        </div>
        )
    }
}