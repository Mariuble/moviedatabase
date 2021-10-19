import { setUncaughtExceptionCaptureCallback } from 'process'
import React, { useState } from 'react'
import { connect } from 'react-redux'

//PASS PÅ ANY
export const SearchField = (props: any) => {



    const [text, setText] = useState("Hello")
    return (
        <div>
            <input type="text" placeholder="Search" onChange={(e) => setText(e.target.value)}/>
            <button type="submit">Search</button>
            <h1>{text}</h1>
        </div>
    )
    function updateInput(value: string){
        setText(value)
    }
}
//PASS PÅ ANY
/*
const mapStateToProps = (state: any) => ({
    
})

const mapDispatchToProps = {
    
}
*/

export default /*connect(mapStateToProps, mapDispatchToProps)*/(SearchField)




