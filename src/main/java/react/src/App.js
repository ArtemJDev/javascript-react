import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <h1>First React APP</h1>
                <img src="https://cdn0.iconfinder.com/data/icons/flat-round-system/512/reactos-256.png" alt=""/>
                <p>my first react app</p>
                <button class="button-primary">Default</button>
            </div>
        </div>
        <table>
          <caption><b>Date Table</b></caption>
          <tr> 
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>City</th>
            <th>Activity</th>
            <th>Hobby</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Artem</td>
            <td>28</td>
            <td>M</td>
            <td>Moscow</td>
            <td>Programming</td>
            <td>Skiing</td>
          </tr>

        </table>
    </div>
    
  );
}

export default App;
