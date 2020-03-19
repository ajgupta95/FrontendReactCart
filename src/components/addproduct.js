import React, { Component } from 'react';
import axios from 'axios';
import Admincontrol from './admincontrol';

export default class AddProduct extends Component {
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);


        this.state = {
            title: ''
        }
        this.state = {
            imageurl: ''
        }
        this.state = {
            price: ''
        }
        this.state = {
            description: ''
        }
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }



    onChangeUrl(e) {
        this.setState({
            imageurl: e.target.value
        })
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onClick(e) {
        e.preventDefault();
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('t');
    
    
        localStorage.removeItem("t");
        window.location='/adminlogin'
    
      }

    onSubmit(e) {
        e.preventDefault();

        const Product = {
            title: this.state.title,
            price: this.state.price,
            imageurl: this.state.imageurl,
            description: this.state.description

        }
        

        console.log(Product);

        axios.post('http://localhost:5000/admin/product', Product)
            .then(res => {
                console.log("WHat Happend ? ans :", res.data);
                this.setState({
                    messages: res.data
                })



            });
        this.setState({
            title: ''
        })
        this.setState({
            imageurl: ''
        })
        this.setState({
            price: ''
        })
        this.setState({
            description: ''
        })




    }

    render() {
        const message = this.state.messages
        return (
            <div>
                <Admincontrol />

                <body className="container">
                    <h3>{message}</h3>
                    <br></br>


                    <h4>Add Product</h4>
                    <br></br>
                    <br></br>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Title: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                            />
                        </div>
                        <div className="form-group">
                            <label>Image URL: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.imageurl}
                                onChange={this.onChangeUrl}
                            />
                        </div>
                        <div className="form-group">
                            <label>Price: </label>
                            <i class="fa fa-usd" aria-hidden="true"></i>

                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.price}
                                onChange={this.onChangePrice}
                            />

                        </div>
                        <div className="form-group">
                            <label>Description: </label>

                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                            />
                        </div>
                        <div className="form-group" style={{ textAlign: "center" }}>
                            <input type="submit" value="Add" className="btn btn-primary" />
                        </div>
                    </form>
                    <form onSubmit={this.onClick}>
      <div className="form-group">
          <input type="submit" value="Logout" className="btn btn-primary" />
        </div>
      </form>
                </body>

            </div>
        )
    }
}