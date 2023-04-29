import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        let newText = ('');
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);

    }

    const [text, setText] = useState('');
    // text="new text"; wrong way to update text//
    // setText("new updated text") correct way//    

    return (
        <> <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3"> 
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      
    </div>
           <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2 style={{color: props.mode==='dark'?'wheat':'black'}}>Preview</h2>
            <p style={{color: props.mode==='dark'?'wheat':'black'}}>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
           
        </>

    )
}
