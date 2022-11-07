import React, { Component } from 'react'
import Header from '../Header/Header';
import Model from '../Models/Model';
import './Body.scss'

export default class Body extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Header />
                <Model />
            </div>
        )
    }
}
