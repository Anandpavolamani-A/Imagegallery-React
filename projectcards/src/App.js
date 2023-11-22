
import { flushSync } from 'react-dom';
import './App.css';
import Buttonpanel from './Buttonpanel';
import Imagegallery from './Imagegallery';
import { useState } from 'react';
import Header from './Header';

function App() {
  let [status, setStatus] = useState('all');
  function handleData(data) {
    setStatus(data);
  }
  return (
    <>
    <Header/>
      <Buttonpanel onData={(data) => { handleData(data) }} />
      <Imagegallery status={status} />
    </>
  );
}

export default App;
