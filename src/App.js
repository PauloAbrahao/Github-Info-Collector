import githubImage from './githubImg.jpg'
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [search, setSearch] = useState('');
  const [userData, setUserData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit")
  }
  
  const handleChange = (event) => {
    // altera o valor escrito no campo
    setSearch(event.target.value)

    fetch(`https://api.github.com/users/${search}`)
    .then(response => response.json())
    .then(userResponse => setUserData(userResponse))
  }
  

  console.log(userData)

  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase"> Github profile</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group"> 
         
          <div className="input-group">
            <input 
              className="form-control"
              type="text"
              required
              value={search}
              onChange={handleChange}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">
                Search
              </button>
            </span>
          </div>
        </div>
      </form>

      <div className="py-5"> 
        {!userData && (
          <img src={githubImage} alt="" className="responsive rounded-circle"  height="150px"/> 
        )}
        {userData && (
          <div>
            <img src={userData.avatar_url} alt="" className="responsive rounded-circle"  height="150px"/> 
            <h1 className="pt-4">
              <a href="https://github.com/PauloAbrahao" target="_new"> 
              {userData.name}
              </a>
            </h1>
            <h3>
              {userData.location}
            </h3>
          </div>
        )}

      </ div>
    </div>
  );
}

export default App;
