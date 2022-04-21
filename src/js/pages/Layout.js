import React from "react"
import { HashRouter, Route } from 'react-router-dom';
import { observer } from "mobx-react";

// NavigationBar
import NavigationBar from "../components/NavigationBar"


// Signup / Login / Logout
import Login from "../routes/Login"
import Signup from "../routes/Signup"
import Logout from "../routes/Logout"

// Main
import Main from "./Main"


// Observer Klasse
@observer
export default class Layout extends React.Component {
    render() {
        const containerStyle = { 
            marginTop: "5px"
        };

        return (
            <HashRouter>
                <div>
                     {}
                    <NavigationBar location={location}/>
                    <div class="container" style={containerStyle}>
                        <div class="row">
                            <div class="col-xs-12">
                                <Route exact path="/" component={Main}/>
                                <Route exact path="/login" component={Login}/>
                                <Route exact path="/logout" component={Logout}/>
                                <Route exact path="/signup" component={Signup}/>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}