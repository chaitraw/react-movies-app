import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            isModalOpen : false
        }
    }

    openModalHandler = () => {
        this.setState({isModalOpen : true});
    }

    closeModalHandler = () => {
        this.setState({isModalOpen : false});
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

                </Modal>
            </header>
        )
    }
}

export default Header;