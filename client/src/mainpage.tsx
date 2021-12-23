import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';

function MainPage() {
  return (
    <div className='content'>
      <Navbar/>
      <div className='bg bg1'>
      </div>

      <div className='contents_bg'>
          <h1>Nediv Community</h1>
          <h2>개발, 인터넷 등에 대해 소통하는 커뮤니티.</h2>
      </div>
    </div>
  );
}

export default MainPage;
