import React, { useState } from 'react';

export default function TexthtmlForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClearClick = () => {
        setText('');
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }}
                        placeholder='Enter Text here'
                        id="myBox"
                        rows="8">
                    </textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-secondary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            </div >
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes Read</p>
                <h2>Preview</h2>
                <p style={{ fontStyle: "italic" }}>{text.length > 0 ? text : "Enter Something in the textbox to Preview it here"}</p>
            </div>
        </>
    );
}
