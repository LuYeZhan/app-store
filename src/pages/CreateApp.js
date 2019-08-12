import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import appStoreService from '../services/app-store-services';

class CreateApp extends Component {
    state = {
        name: '',
        description: '',
        image: '',
        category: '',
        // para precios se usa null, o 0 en vez de string vaci
        price: 0,
        date:'',
        redirect: false,
    }

    handleOnChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,

        })
    }       

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, image, category, price, date} = this.state;
        appStoreService.addOneApp({
            name,
            image,
            price,
            date,
            category
        })
        .then(response => {
            this.setState({
                redirect:true,
            })
        })
        .catch(error => console.log(error)) 

    }

    render() {
        const { name, image, category, price, date, redirect} = this.state;
        return (
            <>
            <form onSubmit = {this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' placeholder='name' onChange={this.handleOnChange} value={name} name="name"/>
                <label htmlFor="image">Image</label>
                <input type="text" id='image' placeholder="image" onChange={this.handleOnChange} value={image} name="image"/>
                <label htmlFor="price">Price</label>
                <input type="text" id= "price" placeholder="price" onChange={this.handleOnChange} value={price}
                name="price"/>
                <label htmlFor="category">Category</label>
                <select name="category" id="category" onChange={this.handleOnChange} value={category}>
                    <option value="game">game</option>
                    <option value="photography">photography</option>
                    <option value="developers-tools">developers-tools</option>
                    <option value="productivity">productivity</option>
                    <option value="business">business</option>
                </select>
                <label htmlFor="date">Date</label>
                <input type="date" id="date" onChange={this.handleOnChange} value={date} name="date"/>
                <button type="submit">ADD NEW APP</button>
            </form>
            {redirect ? <Redirect to= '/apps' /> : null}
            </>
        )
    }
}

export default CreateApp;