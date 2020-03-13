import React, { Component } from 'react'
import{Route, Link } from 'react-router-dom'

const Service = ({ match }) => <p>{match.params.id}</p>

class Services extends Component {
    
    render() {
       
        return (
            <div>
                <h1>This is my service page </h1>
                <strong>Select Services</strong>
                <ul>
                    <li>
                        <Link to = "/Services/1">Services 1</Link>
                    </li>
                    <li>
                        <Link to = "/Services/2">Services 2</Link>
                    </li>
                    <li>
                        <Link to = "/Services/3">Services 3</Link>
                    </li>
                </ul>
                <Route path ="/services/:id" component={Service} />
            </div>
        )
    }
}

export default Services;