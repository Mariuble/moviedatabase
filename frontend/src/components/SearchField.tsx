import { setUncaughtExceptionCaptureCallback } from 'process'
import { stringify } from 'querystring'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { EpisodeState } from '../store/action/Type'



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

const mapStateToProps = (state: EpisodeState) => {
    return {
    epsiodes: state.episodes
    }
}


const mapDispatchToProps = {
    
}


export default connect(/*mapStateToProps, /*mapDispatchToProps*/)(SearchField)




