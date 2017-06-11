import React, { Component } from 'react';
import logo from './logo.svg';
//import Finder from 'Finder';
import './App.css';

const p_styling = {
	display: 'flex',
  justifyContent: 'center',
};
const hashtag_styling = {
    fontSize : '20px',
    color : 'grey'
};
const info_styling = {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
};
const img_styling = {
  borderTopLeftRadius: '50% 50%',
  borderTopRightRadius: '50% 50%',
  borderBottomRightRadius: '50% 50%',
  borderBottomLeftRadius: '50% 50%',
};
const align_styling = {
	display: 'flex',
  justifyContent: 'center',
};

class App extends Component {

 state = {avatar_url: 'https://avatars0.githubusercontent.com/u/28714304?v=3&u=284b8e09859050dcf43a8526edaa171cab929a53&s=400', username: '', bio: '', Repositories: 0, followers: 0}

 changeHandler = (evn) => {
    this.setState({
      text: evn.target.value
    });
}
//??
 async componentDidMount() {
 const req = await
   fetch ('https://api.github.com/users/LianaIs');
 const {avatar_url, username, bio, Repositories, followers} = await req.json();
 this.setState({avatar_url, username, bio, Repositories, followers});
}
  render() {
    const {avatar_url, username, bio, Repositories, followers} = this.state;
  return (
      <div classsName='App'>

        <div style={align_styling}>
           <img style = {img_styling} src={this.state.avatar_url} />
        </div>

        <div style = {info_styling}>
            <div>
              <p style = {hashtag_styling}>#Bio</p>
              <p>{bio}</p>
            </div>

            <div>
              <p style = {hashtag_styling}>#Repositories</p>
              <p>{Repositories}</p>
            </div>

            <div>
              <p style = {hashtag_styling}>#Followers</p>
              <p>{followers}</p>
            </div>
       </div>

       <div style={align_styling}>
       <input
           placeholder="Find new users"
           type="text"
           onChange={this.changeHandler}
         />
         <input
           type="button"
           value="Other"
           onClick= {this.clickHandler}
         />
       </div>
      </div>
    );
  }
}


export default App;
