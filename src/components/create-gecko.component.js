import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateGecko extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLatinName = this.onChangeLatinName.bind(this);
        this.onChangeOrigin = this.onChangeOrigin.bind(this);
        this.onChangeHatchDate = this.onChangeHatchDate.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            latinName: [""],
            origin: "",
            hatchDate: new Date(),
            gender : "",
            description: "",
        }
    }

    componentDidMount() {
        this.setState({
            latinName: ['Rhachodactylus leachianus'],
        });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeOrigin(e) {
        this.setState({
            origin: e.target.value
        });
    }
    onChangeHatchDate(date) {
        this.setState({
            hatchDate: date
        }); 
    }
    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    
    onSubmit(e) {
        e.preventDefault();

        const gecko = {
            name: this.state.name,
            latinName: this.state.latinName,
            origin: this.state.origin,
            hatchDate: this.state.hatchDate,
            gender: this.state.gender
        }

        console.log(gecko);

        window.location = '/';
    }
    render() {
    return (
        <div>
            <h3>Add New Gecko to Collection</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Gecko Name: </label>
                    <select ref="userInput"
                        required
                        className="from-control"
                        value={this.state.name}
                        onChange={this.onChangeName}>
                            {
                                this.state.latinName.map(function(user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                        </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description of aquisition</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.origin}
                            onChange={this.onChangeOrigin}
                            />
                    </div>
                    <div className="form-group">
                        <label>Approximnate Hatch Date</label>
                        <div>
                            <DatePicker
                                selected={this.state.hatchDate}
                                onChange={this.onChangeHatchDate}
                                />
                        </div>
                    </div>
                    <div>
                        <label>Gender</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.gender}
                            onChange={this.onChangeGender}
                            />
                    </div>
            </form>
        </div>
    )
        
    }
}