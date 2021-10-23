import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateSpecies extends Component {
    constructor(props) {
        super(props);

        this.onChangeLatinName = this.onChangeLatinName.bind(this);
        this.onChangeCommonName = this.onChangeCommonName.bind(this);
        this.onChangeNaturalHabitat = this.onChangeNaturalHabitat.bind(this);
        this.onChangeTempHigh = this.onChangeTempHigh.bind(this);
        this.onChangeTempLow = this.onChangeTempLow.bind(this);
        this.onChangeHumidity = this.onChangeHumidity.bind(this);
        this.onChangeSpecialReqs = this.onChangeSpecialReqs.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            latinName: "",
            commonName: "",
            naturalHabitat: "",
            tempHigh: 0,
            tempLow: 0,
            humidity: 0,
            specialReqs: "",
        }
    }
    onChangeLatinName(e) {
        this.setState({
            latinName: e.target.value
        });
    }
    onChangeCommonName(e) {
        this.setState({
            commonName: e.target.value
        });
    }
    onChangeNaturalHabitat(e) {
        this.setState({
            naturalHabitat: e.target.value
        });
    }
    onChangeTempHigh(e) {
        this.setState({
            tempHigh: e.target.value
        });
    }
    onChangeTempLow(e) {
        this.setState({
            tempLow: e.target.value
        })
    }
    onChangeHumidity(e) {
        this.setState({
            humidity: e.target.value
        })
    }
    onChangeSpecialReqs(e) {
        this.setState({
            SpecialReqs: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const species = {
            latinName: this.state.latinName,
            commonName: this.state.commonName,
            naturalHabitat: this.state.naturalHabitat,
            tempHigh: this.state.tempLow,
            tempLow: this.state.tempLow,
            humidity: this.state.humidity,
            specialReqs: this.state.specialReqs,
        }

        console.log(species);

        window.location = '/';
    }
    render() {
        return (
            <div>
                <h3>Add New Species to the Collection</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <div className="form-group">
                            <label>Latin Name</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                value={this.state.latinName}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Common Name</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                value={this.state.commonName}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Natural Habitat and Range</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                value={this.state.naturalHabitat}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>High Temperature</label>
                            <input
                                type='text'
                                className="form-control"
                                value={this.state.tempHigh}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Low Temperature</label>
                            <input
                                type='text'
                                className="form-control"
                                value={this.state.tempLow}
                                onChange={this.onChangeTempLow}
                            />
                        </div>
                        <div className="form-group">
                            <label>Humidity</label>
                            <input
                                type='text'
                                className="form-control"
                                value={this.state.humidity}
                                onChange={this.onChangeHumidity}
                            />
                        </div>
                    <div className="form-group">
                        <label>Description and Notes</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.specialReqs}
                            onChange={this.onChangeSpecialReqs}
                        />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}