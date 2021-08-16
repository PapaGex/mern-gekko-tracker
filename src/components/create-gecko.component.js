import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateGecko extends Component {
    constructor(props) {
        super(props);

        this.onChangeGeckoName = this.onChangeGeckoName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeHatchDate = this.onChangeHatchDate.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangePurchasePrice = this.onChangePurchasePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            geckoName: "",
            description: "",
            hatchDate: new Date(),
            gender : "",
            purchasePrice: 0,
            species: []
        }
    }

    componentDidMount() {
        this.setState({
            species: ['Rhachodactylus leachianus'],
            speciesName: 'Rhachodactylus leachianus'
        })
    }

    onChangeGeckoName(e) {
        this.setState({
            geckoName: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
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
    onChangePurchasePrice(e) {
        this.setState({
            purchasePrice: e.target.value
        })
    }
    
    onSubmit(e) {
        e.preventDefault();

        const gecko = {
            geckoName: this.state.geckoName,
            description: this.state.description,
            hatchDate: this.state.hatchDate,
            gender: this.state.gender,
            purchasePrice: this.state.purchasePrice            
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
                        value={this.state.geckoName}
                        onChange={this.onChangeGeckoName}>
                            {
                                this.state.species.map(function(user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                        </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description and Notes</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
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
                    <div className="form-group">
                        <label>Price at Purchase</label>
                        <input
                            type='text'
                            className="form-control"
                            value={this.state.purchasePrice}
                            onChange={this.onChangePurchasePrice}
                            />
                    </div>
            </form>
        </div>
    )
        
    }
}