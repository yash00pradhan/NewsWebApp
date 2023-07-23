//651f5ae78dd3464386d2582291f49aa2
import './App.css';
import Navbar from './components/Navbar';


import React, { Component } from 'react'
import News from './components/News';
// import NewsItem from './components/NewsItem';
import {
  
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom" ;


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<News key='general' pageSize={12} country='in' category='general' />}></Route>
            <Route path='/general' element={<News key='general' pageSize={12} country='in' category='general' />}></Route>
            <Route path='/business' element={<News key='business' pageSize={12} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News key='entertainment' pageSize={12} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<News key='health' pageSize={12} country='in' category='health' />}></Route>
            <Route path='/science' element={<News key='science' pageSize={12} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News key='sports' pageSize={12} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News key='technology' pageSize={12} country='in' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
