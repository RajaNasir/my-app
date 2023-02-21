import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = () =>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case!", "success");
    }
const handleLoClick = () =>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to Lower Case!", "success");

  }
const handleClearClick = () =>{
    setText("")
}
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
const handleOnChange = (event) =>{
        //console.log("On Change");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white', color: props.mode==='dark' ? 'white' : 'black'}} id="myBox" rows="8"/>
        </div> 
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={speak}>Speak</button>
    </div>
    
    <div className='container my-3' style={{color: props.mode==='dark' ? 'white' : 'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>
      
    </div>
    </>
  )
}
