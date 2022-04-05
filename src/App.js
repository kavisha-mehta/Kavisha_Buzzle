import React from 'react';
import './app.css';
import Header from './Header';
import SideBar from './SideBar';
import Recommended_videos from './Recommended_videos';


function App() {
  return (
    <div className= "app">
     <h1></h1>
      <Header />
      <div className='app_page'>
       <SideBar />
       <Recommended_videos /> 


      </div>
       
  
    </div>
  );
}

export default App;
