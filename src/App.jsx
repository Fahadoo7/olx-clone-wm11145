import React from 'react';
import firebase from './config/firebase.js'
import 'firebase/database'
import Header from './components/Header'
import Body from './components/body'
import './App.css';
import './component.css'




class App extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  render(){
    return(
      <div className='app'>
        <Header/>
        <h1>Home</h1>
        <Body/>
        
      </div>
    )
  }
}
























// {title : 'Fahad', edit : false},{ title : 'Ahmed',edit : false}
// class App extends React.Component {
//   constructor() {
//     super()


//     this.state = {
//       todo: [],
//       value: ''
//     }

//   }
//   componentDidMount() {
//     firebase.database().ref('todos').on('child_added',data=>{
      
//       console.log(data)
      
      
//     }
//      )}

//   add_todo = () => {
//     let obj = { title: this.state.value, edite: false }
//     firebase.database().ref('/').child('todos').push(obj)

//     this.setState({
//       todo: [...this.state.todo, obj],
//       value: ''
//     })
//   }


//   delt_todo = index => {
//     this.state.todo.splice(index, 1)
//     this.setState({
//       todo: this.state.todo
//     })
//   }
//   edit_todo = (index, val) => {

//     this.state.todo[index].edit ? this.state.todo[index].edit = false
//       :
//       this.state.todo[index].edit = true
//     this.setState({
//       todo: this.state.todo
//     })



//   }

//   handleChange = (index, val) => {

//     this.state.todo[index].title = val;
//     this.setState({
//       todo: this.state.todo
//     })
//   }



//   render() {



//     return (
//       <div>
//         <h1 >{}</h1>
        
//         <input value={this.state.value} onChange={e => this.setState({ value: e.target.value })} type='text' placeholder='Enter Value ' name='val' />
//         <button onClick={this.add_todo} >Get Value</button>
//         <ul>
//           {this.state.todo.map((v, i) => {
//             return <li key={i}>
            

//               {v.edit ? <input value={v.title} onChange={e => this.handleChange(i, e.target.value)} type='text' /> : v.title}
//               {v.edit ? <button onClick={() => this.edit_todo(i, v.title)}>Update</button>
//                 :
//                 <button onClick={() => this.edit_todo(i, v.title)}>Edite</button>}
//               <button onClick={() => this.delt_todo(i)}>Delete</button>
//             </li>
//           })}
//         </ul>

//       </div>
//     )
//   }
// }

































//CLass before 28
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       name: 'Fahad',
//       email: 'shahf@g.com'
//     }
//   }

// set_Name = ()=> console.log( this.state);
// get_Name = ()=> console.log( this.state);
// handle_change(e){
//   this.setState({[e.target.name]:e.target.value});
// }


//   render() {
//     return (
//       <div>
//         <Header />
//         <h2>{this.state.name}</h2>
//         <input name='name' onChange={(e)=>this.handle_change(e)} type='text'  />
//         <br/>
//         <input name='email' onChange={(e)=>this.handle_change(e)} type='email'  />
//         <button onClick={this.set_Name}> Set Name</button>
//         <button onClick={this.get_Name}> Get Name</button>
//         <br />

//       </div>
//     )
//   }
// }




export default App;
