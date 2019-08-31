import React, { Component } from 'react';

class Repo extends Component {
    constructor (){
        super();
        this.state ={
         Repositories: null,
        }
    }
    getRepositories = (repo) =>{
     return fetch(`https://api.github.com/users/${repo}`)
     .then(response => response.json())
     .then(response =>{
       return response;
    })
    }
    async handleSubmit(r){
        r.preventDefault();
        let repos = await this.getRepositories(this.refs.repo.value);
        this.setState ({
          public_repos :repos.public_repos,
        });
    }
    render(){
        let repos;
           if(this.state.repo){
              repos =
         <div>
           public_repos: {this.state.public_repos} <br/>
         </div>
    }
        return (
            <div>
              <form onSubmit= {r => this.handleSubmit(r)}>
                 <input type="text" ref="repo" placeholder="Repo name"/>
              </form>
            <p className='App-intro'>
              {repos}
            </p>
           </div>
         )
}}


export default Repo;


