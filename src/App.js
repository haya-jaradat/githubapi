import React from 'react';
import Repo from './component/repo';
import Users from './component/user';
import  'react-bootstrap';
import './App.css';


class App extends React.Component {
  
  constructor(){
    super();
    this.state ={
      username:null,
      id :null,
      url: null,
      avatar_url : null,
      followers : null,
      following : null,
      public_repos : null,
    }
  }

 

    getUser =(username) => {
      return fetch(`https://api.github.com/users/${username}`)      
      .then(response => response.json())
      .then(response =>{
       return response;
      })
    }
    async handleSubmit(e){
      e.preventDefault();
      let user = await this.getUser(this.refs.username.value);
      this.setState ({
        username : user.login ,
        id: user.id ,
        url :user.url,
        avatar_url: user.avatar_url,
        followers : user.followers,
        following :user.following,
        public_repos :user.public_repos,
      });
    }
  render() { 
    let user;
    if(this.state.username){
      user =
  <div>
    <p>
     user Name : {this.state.username} <br/>
     id : {this.state.id} <br/>
     Url :  {this.state.url} <br/>
     followers:  {this.state.followers} <br/>
     following: {this.state.following} <br/>
     public_repos: {this.state.public_repos} <br/>
        </p>
       <img src={this.state.avatar_url} alt='profilepic'/>
  </div>
    }
    return ( 
      <div className="App">
        <header className="App-header">
        <img src='https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA' alt="github" />
        <p>
          Github
        </p>
       
      </header>
   <form onSubmit= {e => this.handleSubmit(e)}>
     <input  type="text" ref="username" placeholder="User name"/>
   </form>
      <p className='App-intro'>
      {user}
      </p>
      <Repo/>
      <Users/>
      </div>
     );
  }
}
 
export default App;
