import React, { Component } from 'react';
import axios from 'axios';
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";
import Admincontroler from './admincontrol';


export default class EditContacts extends Component {
  constructor(props) {
    super(props);

   
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

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

  componentDidMount() {
    axios.get('http://localhost:5000/admin/'+this.props.match.params.id)
      .then(response => {
        console.log(response)
        this.setState({
          title: response.data.title,
          imageurl: response.data.imageurl,
          price: response.data.price,
          description: response.data.description,

        })   
      })
      .catch(function (error) {
        console.log(error);
      })

   

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

  onSubmit(e) {
    e.preventDefault();

    const Product = {
      title: this.state.title,
      imageurl: this.state.imageurl,
      price: this.state.price,
      description: this.state.description,

    }
 
    console.log(Product);

    axios.post('http://localhost:5000/admin/' + this.props.match.params.id, Product)
      .then(res => {console.log(res.data)
        this.setState({
            messages: res.data
        })});

    //window.location = '/adminproducts';
  }

  render() {
    
        const message = this.state.messages
        return (
            <div>
                <Admincontroler />

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
                            <input type="submit" value="Update" className="btn btn-primary" />
                        </div>
                    </form>
                </body>

            </div>
    )
  }
}