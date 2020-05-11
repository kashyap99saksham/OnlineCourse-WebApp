import React, { Component } from 'react'
import {Link} from "gatsby"
import {FaCartArrowDown} from "react-icons/fa"
import Logo from "../../images/logo.png"

export default class Navbar extends Component {
    state = {
        Clicked : false,
        ShowTogMenuCss : "collapse navbar-collapse",
        Menus : [{
            id : 1,
            text : "Home",
            url :  "/"
        },{
            id : 2,
            text : "About",
            url :  "/about"
        },{
            id : 3,
            text : "Services",
            url :  "/service"
        },{
            id : 4,
            text : "Contact",
            url :  "/contact"
        }]
    }
    MyToggler = () => {
        (this.state.Clicked) ? 
            this.setState({
                Clicked : false,
                ShowTogMenuCss : "collapse navbar-collapse"
            }) : 
            this.setState({
                Clicked : true,
                ShowTogMenuCss : "collapse navbar-collapse show"
            })
    }
    render() {
        return (
            <nav className = "navbar navbar-expand-sm bg-theme text-white">

                <Link to="/" className="navbar-brand ml-5">
                    <img  src={Logo} alt="Logo Goes Here" width="40px"/>
                </Link>
                
                <button className="navbar-toggler" type="button">
                    <span className="text-white" onClick={this.MyToggler}>Menu</span>
                </button>
                
                <div className={this.state.ShowTogMenuCss}>
                    <ul className = "navbar-nav ml-auto mr-5">
                        
                        {this.state.Menus.map( menu => {
                            return(
                                <li key = {menu.id} className="nav-item">
                                    <Link to={menu.url} className="nav-link text-white" >
                                        {menu.text}
                                    </Link>
                                </li>
                            )
                        })}

                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white"> 
                                <FaCartArrowDown className="cart-icon" /> 
                            </Link>
                        </li>
                    </ul> 
                </div>
            </nav>
        )
    }
}
