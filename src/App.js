import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [search,setSearch]= useState('');
  const handleChange=(e)=>{
    setSearch(e.target.value);
  }
  return (
    <div className="app">
    <input onChange={handleChange} value={search} placeholder='Search' />
    </div>
  );
}

export default App;
