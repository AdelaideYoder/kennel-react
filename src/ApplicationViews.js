import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './AnimalList'
import Animal from './Animal'
import LocationList from './LocationList'
import Location from './Location'
import EmployeeList from './EmployeeList'
import Employee from './Employee'
import Login from './Login'


export default class ApplicationViews extends Component {
    // Check if credentials are in local storage
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={props => {
                    if (this.isAuthenticated()) {
                        return <LocationList />
                    } else {
                        return <Login />
                    }
                }} />
                <Route path="/locations/:locationId" render={(props) => {
                    return <Location location={props.location.state.location}>
                        {props.location.state.location.name}
                    </Location>
                }} />
                {/* <Route exact path="/animals" component={AnimalList} /> */}
                <Route exact path="/animals" render={props => {
                    if (this.isAuthenticated()) {
                        return <AnimalList />
                    } else {
                        return <Login />
                    }
                }} />
                <Route path="/animals/:animalId" render={(props) => {
                    return <Animal animal={props.location.state.animal}>
                        {props.location.state.animal.name}
                    </Animal>
                }} />
                {/* <Route path="/employees" component={EmployeeList} /> */}
                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList />
                    } else {
                        return <Login />
                    }
                }} />
                <Route path="/employees/:employeeId" render={(props) => {
                    return <Employee employee={props.location.state.employee}>
                        {props.location.state.employee.name}
                    </Employee>
                }} />
            </React.Fragment>
        )
    }
}