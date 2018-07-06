import React from 'react';
import ReactDOM from 'react-dom';
import Mylist from './Mylist';
import './index.css';

var toDos = ["Buy ice cream", "Eat ice cream", "Go to the gym"]


ReactDOM.render(<Mylist theList={toDos} />, document.getElementById('root'));
