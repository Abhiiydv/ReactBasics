import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleToClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
       
    }
    const [text, setText] = useState('Enter text here');
    // text="new text"; wrong way to update text//
    // setText("new updated text") correct way//    

    return (
        <>
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleToClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Text Summary : </h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
        </div>
        </>
        
    )
}
