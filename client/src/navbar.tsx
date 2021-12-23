import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { EmptyType } from '.';

type NavbarState = {
  isActivated: boolean
}

class Navbar extends Component<EmptyType, NavbarState> {

  constructor(props: EmptyType) {
    super(props)
    this.state = {
      isActivated: false
    }
  }

  render() {
    return (
      <header className={`navbar ${this.state.isActivated ? 'responsive' : ''}`}>
          <img src='hamburger.png' width={30} height={30} className='menu' onClick={(event) => {
            this.setState(prevState => ({
              isActivated: !prevState.isActivated
            }))
          }}/>
          <div className='contents'>
              <img src='nediv_logo.webp' width={55} height={55}/>
              {
              /*
              <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
              */
              }
              <a href='#' className='link'>이의제기</a>
              <a href='#' className='link'>유저 신고</a>
              <a href='#' className='link'>API 문서</a>
              <a href='#' className='link'>블랙리스트 검색</a>
              <a href='#' className='link'>이슈</a>
              <a className='login' href='#'>로그인</a>
          </div>
      </header>
    )
  }
}

export default Navbar;
