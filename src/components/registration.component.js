import React, {Component} from "react";

const {User} = require('../backend/database/models/user');

export default class CreateUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeUsState = this.onChangeUsState.bind(this);
        this.onChangeZZip = this.onChangeZZip.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeInvalidCheck = this.onChangeInvalidCheck.bind(this);
        this.onChangeTasks = this.onChangeTasks.bind(this);

        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            city: "",
            usState: "",
            zZip: "",
            email: "",
            invalidCheck: false,
            password: "",
            tasks: "",
        }
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    onChangeUserName(e) {
        this.setState({
            userName: e.target.value
        });
    }

    onChangeCity(e) {
        this.setState({
            city: e.target.value
        });
    }

    onChangeUsState(e) {
        this.setState({
            usState: e.target.value
        });
    }

    onChangeZZip(e) {
        this.setState({
            zZip: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeInvalidCheck(e) {
        this.setState({
            invalidCheck: e.target.value
        });
    }

    onChangeTasks(e) {
        this.setState({
            tasks: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const user = new User({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName,
            city: this.state.city,
            usState: this.state.usState,
            zZip: this.state.zZip,
            email: this.state.email,
            password: this.state.password,
            invalidCheck: this.state.invalidCheck,
            tasks: this.state.tasks
        })
        console.log(user);

        window.location = '/login';
    }

    render() {
        return (
            <div>
                <h3>Add User: </h3>
                <form className="row g-3 needs-validation">
                    <div className="col-md-4">
                        <label className="form-label">First name</label>
                        <input type="text" className="form-control" id="validationCustom01" value={this.firstName}
                               required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Last name</label>
                        <input type="text" className="form-control" id="validationCustom02" value={this.lastName}
                               required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Username</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" className="form-control" id="validationCustomUsername"
                                   aria-describedby="inputGroupPrepend" value={this.userName} required/>
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control" id="validationCustom03" value={this.city} required/>
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">State</label>
                        <select className="form-select" id="validationCustom04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>...</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Zip</label>
                        <input type="text" className="form-control" id="validationCustom05" value={this.zZip} required/>
                        <div className="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input type="checkbox" value={this.invalidCheck}
                                   id="invalidCheck" required/>
                            <label className="form-check-label" htmlFor="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Submit form</button>
                    </div>
                    <div className="card" style={{width: "18rem",}}>
                        <img src="../../public/images/erodact.jpg" className="card-img-top"
                             alt="../images/dexagex.svg"/>
                        <div className="card-body">
                            <h5 className="card-title">Enter A Job or Project For NorthernHerp</h5>
                            <p className="card-text">explain what needs to be accomplished here and by who.</p>
                            <a href="/" className="btn btn-primary">Engage!!!!</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}