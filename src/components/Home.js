import React, { Component } from 'react'

 class Home extends Component {
    render() {
        const {params} = this.props.match
        return (
            <div>
                <h1>Home</h1>
                <p>{params.id}</p>
            </div>
        )
    }
}

export default Home;
