import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

 export default ({title}) => (
  <div>
    <h1><Link to={'/'}>{title}</Link></h1>
    <hr/>
  </div>
)
