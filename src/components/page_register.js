import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/authentication';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm,
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        this.props.registerUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        return(
            <div>
                <h2>Rekisteröid</h2>
                <form onSubmit={ this.handleSubmit }>
                <input type="text" placeholder="Nimi" name="name"
                onChange={ this.handleInputChange }
                value={ this.state.name } />
                <input type="email" placeholder="Sähköposti" name="email"
                onChange={ this.handleInputChange }
                value={ this.state.email } />
                <input type="password" placeholder="Salasana" name="password"
                onChange={ this.handleInputChange }
                value={ this.state.password } />
                <input type="password" placeholder="Salasana uudestaan" name="password_confirm"
                onChange={ this.handleInputChange }
                value={ this.state.password_confirm } />
                <button type="submit">Rekisteröidy</button>
                </form>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register))