import React, { Component } from 'react';

class Users extends Component {
   
  constructor(){
    super();
    this.state ={
      username:null,
      avatar_url : null,
      followers : null,
      following : null,
    }
  }
  getUser =(user1) => {
    return fetch(`https://api.github.com/users/${user1}`)      
    .then(response => response.json())
    .then(response =>{
     return response;
    })
  }
  async handleSubmit(e){
    e.preventDefault();
    let user1 = await this.getUser(this.refs.user1.value);
    this.setState ({
      username : user1.login ,
      avatar_url: user1.avatar_url,
      followers : user1.followers,
      following :user1.following,
    });
  }
    render() {
        let user1;
        if(this.state.user1){
          user1 =
      <div>
        <p>
         user Name : {this.state.username} <br/>
         followers:  {this.state.followers} <br/>
         following: {this.state.following} <br/>
            </p>
           <img src={this.state.avatar_url} alt='profilepic'/>
      </div>
        }
        return ( 
            <div>
                <form onSubmit= {e => this.handleSubmit(e)}>
                <input ref ='user1' type='text' placeholder='player1'/>
                <input ref='user2'  type='text' placeholder='player2'/>
                </form>
                <button type="button" class="btn btn-info">clike </button>

                <p className='App-intro'>
                 {user1}
                </p>
            </div>
            
         );
    }
}
 
export default Users;