import React, { Component } from 'react'

export default class UserCard extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.myUser.name}</h2>
                <p>{this.props.myUser.age}</p>
                <p>{this.props.myUser.height}</p>
            </div>
        )
    }
}
