import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbarshop from './shopnavbar';
// const Contact = props => (
//   <tr>
//     <td>{props.contact.contactname}</td>
//     <td>{props.contact.mobilenumber}</td>
//     <td>{props.contact.date.substring(0,10)}</td>
//     {/* <td>
//       <Link to={"/edit/"+props.contact._id}>edit</Link> | <Link to="#" onClick={() => { props.deleteExercise(props.contact._id) }}>delete</Link>
//     </td> */}
//   </tr>
// )

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

   // this.deleteExercise = this.deleteExercise.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {products: []};
  }

  componentDidMount() {
   // axios.defaults.headers.common['Authorization'] = localStorage.getItem('t');
    console.log('hello');
    axios.get('http://localhost:5000/admin/products')
      .then(response => {
        console.log("getting",response);
        this.setState({ products: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

//   deleteExercise(id) {
//     axios.delete('http://localhost:5000/contacts/'+id)
//       .then(response => { console.log(response.data)});

//     this.setState({
//       contacts: this.state.contacts.filter(el => el._id !== id)
//     })
//   }

//   exerciseList() {
//     return this.state.products.map(currentexercise => {
//       return <Contact contact={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
//     })
//   }

  onClick(e) {
    e.preventDefault();
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('t');


    localStorage.removeItem("t");
    window.location='/'

  }

  render() {
    return (
      <div>
        <Navbarshop/>
        <ul>
    {this.state.products.map(item => (
      <li key={item._id}>
           <div><h3>Title:{item.title}</h3></div>
        <div><img src={item.imageurl}/></div>
        <div><h3>Price:{item.price} rs</h3></div>
        <div><h3>Description:{item.description}</h3></div>
        <button onClick={() => this.updateProduct(item._id)} className="btn btn-primary">Add To Cart</button>

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