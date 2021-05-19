import React, { Component } from 'react'
import API from '../../utils/API'
import { Input, TextArea, FormBtn } from "../Form";
const axios = require('axios')



class BookCard extends Component {

    state = {
        data: []
    }

    constructor(props) {
        super(props)
        this.state = {props}
    }

    render() {
        return (
            <div className='row'>
                <div className='card'>
                    <div className='card-header'>{this.props.data.title}</div>
                    <div className='row g-0'>
                        <div className='col-md-3'>
                            <div className='row'>
                                <img className='img' src={this.props.data.image}></img>
                            </div>
                            <a href={this.props.data.link} className="btn btn-primary m-1" target='_blank'>View on Google</a>
                        </div>
                        <div className='col-md-9'>
                            <div className='card-body'>
                                <h5 className='card-title'>Author(s): {this.props.data.author}</h5>
                                <div className='card-text'>{this.props.data.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default BookCard