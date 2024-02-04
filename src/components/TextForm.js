import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");

        // setInterval(()=>{
        //     document.title = "TextUtils - Uppercase is enabled";
        // }, 1000);

        // setInterval(()=>{
        //     document.title = "(1)Message!!!";
        // }, 1500);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
        // document.title = "TextUtils - Lowercase is enabled"
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleClear = ()=>{
        setText("");
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = ()=>{
        let myText = document.getElementById("myBox");
        myText.select();
        navigator.clipboard.writeText(myText.value);
        props.showAlert("Copied to Clipboard!", "success");
        document.getSelection().removeAllRanges();
    }

    // const handlePaste = ()=>{
    //     let myText = navigator.clipboard.readText();
    //     setText(text + myText);
    // }

    const handleExtraSpaces = ()=>{
        let myText = text.split(/[ ]+/);
        setText(myText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    return (
        <>
            <div className='container'>
                <h1 className={`text-${props.mode==='light'? 'dark':'light'} my-2`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#3e2f43', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                {/* <button className="btn btn-primary mx-1" onClick={handlePaste}>Paste Text</button> */}
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className={`container my-3 text-${props.mode==='light'? 'dark':'light'}`}>
                <h2>Your text summary</h2>
                <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Nothing to preview!'}</p>
            </div>
        </>
    )
}
