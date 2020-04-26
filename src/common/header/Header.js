import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            isModalOpen : false,
            value : 0
        }
    }

    openModalHandler = () => {
        this.setState({isModalOpen : true});
    }

    closeModalHandler = () => {
        this.setState({isModalOpen : false});
    }

    onTabsChangeHandler = (e, value) => {
        this.setState({value});
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
                <Modal ariaHideApp={false} isOpen={this.state.isModalOpen} contentLabel="Login" onRequestClose={this.closeModalHandler} >
                <Tabs value={this.state.value} onChange={this.onTabsChangeHandler} >
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>
                </Modal>
            </header>
        )
    }
}

export default Header;