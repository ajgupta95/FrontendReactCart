import React, { Component } from 'react';
import axios from 'axios';
import Admincontrol from './admincontrol';
import { Link } from 'react-router-dom';



export default class Adminproducts extends Component {
    constructor(props) {
        super(props);

        this.deleteProduct = this.deleteProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);

        // this.onClick = this.onClick.bind(this);

        this.state = { products: [] };
    }

    componentDidMount() {
        // axios.defaults.headers.common['Authorization'] = localStorage.getItem('t');
        console.log('hello');
        axios.get('http://localhost:5000/admin/products')
            .then(response => {
                console.log("getting", response);
                this.setState({ products: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteProduct(id, e) {
        // e.preventDefault();

        axios.delete('http://localhost:5000/admin/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            products: this.state.products.filter(el => el._id !== id)
        })
    }

    updateProduct(id, e) {
        // e.preventDefault();
        console.log(id);
        window.location = '/edit/' + id;
    }



    render() {
        return (
            <div>
                <Admincontrol />
                <ul>
                    {this.state.products.map(item => (
                        <li key={item._id}>
                            <div><h3>Title:{item.title}</h3></div>
                            <div><img src={item.imageurl} /></div>
                            <div><h3>Price:{item.price} rs</h3></div>
                            <div><h3>Description:{item.description}</h3></div>
                            <form onSubmit={() => this.deleteProduct(item._id)}>
                                <div className="form-group">
                                    <input type="submit" value="Delete" className="btn btn-primary" />
                                </div>
                            </form>
                            {/* <form onSubmit={() => this.updateProduct(item._id)}>
                                <div className="form-group">
                                    <input type="submit" value="UPDATE" className="btn btn-primary" />
                                </div>
                            </form> */}

                            <button onClick={() => this.updateProduct(item._id)} className="btn btn-primary">Update</button>
                            {/* <Link to={"/edit/"+item._id}>edit</Link> */}
                            <br></br>
                            <br></br>
                            <br></br>
                        </li>

                    ))}
                </ul>



            </div>


        );
    }
}