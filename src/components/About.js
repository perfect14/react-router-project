import React from 'react'
class About extends React.Component {
    render() {
      const {params} = this.props.match
      return (
        <div>
            <h1>THE ABOUT PAGE</h1>
            <p> {params.id}</p>
         </div>
      )
    }
  }
  export default About;