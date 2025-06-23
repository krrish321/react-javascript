import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

import React, { useState } from 'react';

// import { useState } from 'react';
  function App() {
    const [mode, setmode] = useState('light'); // whether dark mode is enabled or not

    const toggleMode = () => {
      if (mode === 'light') {
        setmode('dark');
      document.body.style.backgroundColor = 'grey';
      } else {
        setmode('light');
      document.body.style.backgroundColor = 'white';
      }
    };
  // const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  return (
  <>
      <Navbar title="krish" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={{type: "success", msg: "This is a success alert"}}/>
      <div className="container my-3">
           <TextForm heading="Text Here When You Feel Low" mode={mode} />
           <About />
      </div>
  </>
);
}

export default App;
