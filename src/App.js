import React from 'react'
import NavBar from "./components/navbar/NavBar";
import './App.css'
import Banner from './components/banner/Banner';
import RowPost from './components/rowpost/RowPost';
import {originals, action, horror, comedy, romance} from './Urls'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Actions' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
    </div>
  );
}

export default App;
