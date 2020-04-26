import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FromHelperText from '@material-ui/core/FormHelperText';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const TabContainer = function(props) {
    return (
        <Typography component="div" style={{padding:0, textAlign:"center"}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}

class Header extends Component {

    constructor() {
        super();
        this.state = {
            isModalOpen : false,
            value : 0,
            username : "",
            usernameRequired : "dispNone",
            loginPassword: "",
            loginPasswordRequired: "dispNone",
            firstname : "",
            firstnameRequired : "dispNone",
            lastname : "", 
            lastnameRequired : "dispNone",
            email : "",
            emailRequired : "dispNone",
            registerPassword: "",
            registerPasswordRequired: "dispNone",
            contact : "",
            contactRequired : "dispNone"
        }
    }

    openModalHandler = () => {
        this.setState({isModalOpen : true});
    }

    closeModalHandler = () => {
        this.setState({isModalOpen : false});
        this.setState({usernameRequired : "dispNone"});
        this.setState({loginPasswordRequired : "dispNone"});
        this.setState({firstnameRequired : "dispNone"});
        this.setState({lastnameRequired : "dispNone"});
        this.setState({emailRequired : "dispNone"});
        this.setState({contactRequired : "dispNone"});
        this.setState({value : 0});
    }

    onTabsChangeHandler = (e, value) => {
        this.setState({value});
    }

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({usernameRequired : "dispBlock"}) : this.setState({usernameRequired : "dispNone"});
        this.state.loginPassword === "" ? this.setState({loginPasswordRequired : "dispBlock"}) : this.setState({loginPasswordRequired : "dispNone"});
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({username : e.target.value});
    }

    inputLoginPasswordChangeHandler  = (e) => {
        this.setState({loginPassword : e.target.value});
    }

    registerClickHandler = () => {
        this.state.firstname === "" ? this.setState({firstnameRequired : "dispBlock"}) : this.setState({firstnameRequired : "dispNone"});
        this.state.lastname === "" ? this.setState({lastnameRequired : "dispBlock"}) : this.setState({lastnameRequired : "dispNone"});
        this.state.email === "" ? this.setState({emailRequired : "dispBlock"}) : this.setState({emailRequired : "dispNone"});
        this.state.registerPassword  === "" ? this.setState({registerPasswordRequired : "dispBlock"}) : this.setState({registerPasswordRequired : "dispNone"});
        this.state.contact === "" ? this.setState({contactRequired : "dispBlock"}) : this.setState({contactRequired : "dispNone"});
    }

    inputFirstnameChangeHandler = (e) => {
        this.setState({firstname : e.target.value});
    }

    inputLastnameChangeHandler = (e) => {
        this.setState({lastname : e.target.value});
    }

    inputEmailChangeHandler = (e) => {
        this.setState({email : e.target.value});
    }

    inputRegisterPasswordChangeHandler = (e) => {
        this.setState({ registerPassword: e.target.value });
    }

    inputContactChangeHandler = (e) => {
        this.setState({contact : e.target.value});
    }

    render() {
        return (
            <header className="app-header">
                <img className="app-logo" src={logo} alt="logo" />
                <div className="login-button">
                    <Button variant="contained" color="default" onClick={this.openModalHandler}>
                        Login
                    </Button>
                </div>
                <Modal ariaHideApp={false} isOpen={this.state.isModalOpen} contentLabel="Login" onRequestClose={this.closeModalHandler} style={customStyles} >
                    <Tabs className="tabs" value={this.state.value} onChange={this.onTabsChangeHandler} >
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                    {this.state.value === 0 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler}></Input>
                                <FromHelperText className={this.state.usernameRequired}>
                                    <span className="red">required</span>
                                </FromHelperText>
                            </FormControl> <br /> <br />
                            <FormControl required>
                                <InputLabel htmlFor="loginPassword">Password</InputLabel>
                                <Input id="loginPassword" type="password" loginpassword={this.state.loginPassword} onChange={this.inputLoginPasswordChangeHandler }/>
                                <FromHelperText className={this.state.loginPasswordRequired}>
                                    <span className="red">required</span>
                                </FromHelperText>
                            </FormControl><br /> <br />
                            <Button variant='contained' color='primary' onClick={this.loginClickHandler}>Login</Button>
                        </TabContainer>
                    }

                    {this.state.value === 1 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="firstname">First Name</InputLabel>
                                <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.inputFirstnameChangeHandler}></Input>
                                <FromHelperText className={this.state.firstnameRequired}>
                                    <span className="red">required</span>
                                </FromHelperText>
                            </FormControl> <br /> <br />
                            <FormControl required>
                                <InputLabel htmlFor="lastname">Last Name</InputLabel>
                                <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.inputLastnameChangeHandler}></Input>
                                <FromHelperText className={this.state.lastnameRequired}>
                                    <span className="red">required</span>
                                </FromHelperText>
                            </FormControl> <br /> <br />
                            <FormControl required>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" type="email" email={this.state.email} onChange={this.inputEmailChangeHandler}></Input>
                                <FromHelperText className={this.state.emailRequired}>
                                    <span className="red">required</span>
                                </FromHelperText>
                            </FormControl> <br /> <br />
                            <FormControl required>
                                <InputLabel htmlFor="registerPassword">Password</InputLabel>
                                <Input id="registerPassword" type="password" registerpassword={this.state.registerPassword} onChange={this.inputRegisterPasswordChangeHandler}/>
                                <FromHelperText className={this.state.registerPasswordRequired}>
                                    <span className="red">required</span>
                                </FromHelperText>
                            </FormControl><br /> <br />
                            <FormControl required>
                                <InputLabel htmlFor="contact">Contact</InputLabel>
                                <Input id="contact" type="contact" contact={this.state.contact} onChange={this.inputContactChangeHandler}></Input>
                                <FromHelperText className={this.state.contactRequired}>
                                    <span className="red">required</span>
                                </FromHelperText>
                            </FormControl> <br /> <br />
                            <Button variant='contained' color='primary' onClick={this.registerClickHandler}>Register</Button>
                        </TabContainer>
                    }
                </Modal>
            </header>
        )
    }
}

export default Header;