import React, { useState } from 'react';

function TextForm(props) {
  const [text, setText] = useState('');

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#16253d' }}>
      <h2>{props.heading}</h2>
    <textarea
  value={text}
  onChange={handleChange}
  rows={8}           // 8 rows for a balanced height
  cols={60}          // 60 columns for a good width
  placeholder="Enter your text here..."
  style={{
    width: '100%',   // makes textarea responsive and fills the container
    maxWidth: '700px', // optional: limits max width for large screens
    minHeight: '120px', // ensures minimum height
    backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
    color: props.mode === 'dark' ? 'white' : '#16253d',
    fontSize: '1rem',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  }}
/>
      <br />
      <button onClick={handleUppercase}>Convert to Uppercase</button>
      <button className="mx-3" onClick={() => setText(text.toLowerCase())}>Convert to Lowercase</button>
      <button className="mx-3" onClick={() => setText('')}>Clear Text</button>

    </div>
    
    <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#16253d' }}>
    <h1>Here is Summary</h1>
    <p>{text.split(" ").length} Number of characters: {text.length} </p>
    <p>{0.008 * text.split(" ").length} Minutes read </p>
    <h2>Preview</h2>
    <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here."}</p>
   </div>

     
    </>

  );
}

export default TextForm;