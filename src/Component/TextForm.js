import React,{useState} from 'react'
// rfc


export default function TextForm(props) {
    const [text,setText]=useState('Enter text here');

    const handleOnClick = ()=>{
        console.log("Clicked" +text)
        let newText= text.toUpperCase() //converting to upper case
        setText(newText)
        props.showAlert("converted to uppercase","success")
        setInterval(() => {
            document.title='Work Done'
        }, 1500);
        setInterval(() => {
            document.title='Good to go'
        }, 2000);
    }
    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value)         ///
    

    }
    
    // text="new text"  //wrong way
    // setText="new text"   //correct way
    return (
        <>
        <div className='container'>
            <h1>{props.heading} </h1><br/>
            <div className="mb-3" >
                <textarea className="form-control" style={{color:"red"}} value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea> 
                {/* setText(event.target.value)      */}
            </div>
            <button className="btn btn-primary" onClick={handleOnClick}>Convert to upper case</button>  
        </div>
        <div className='container my-5'>
            {/* my-5: for y axis gap & mx-2: x axis*/}
            <h1>Text Summary</h1>
            <p>characters-{text.length} and words-{text.split(" ").length}</p>
        </div><br/>
        <h1>Data Entered</h1>
        <p>{text}</p>
        </>
    )
}
