import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Hierarchy from './Hierarchy';
import Navbar from './Navbar';

export default class Editor extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Hierarchy></Hierarchy>
            </div>
        )
    }
}
