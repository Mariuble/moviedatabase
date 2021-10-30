import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Episode.css'

export class Episode extends Component {

    getEpisode() {
        //REQUEST TO DATABASE, GET
    }

    

    render() {
        return (
            <div>
                <h1>Title</h1>
                <p>type</p>
                <p>Episode</p>
                <p>Score</p>
                <div className="EkstraInfo">
                <h2>Tillegsinfo show/hide</h2>
                <p>Status</p>
                <p>Start airing</p>
                <p>End airing</p>
                <p>Starting season</p>
                <p>Broadcast time</p>
                <p>Producers</p>
                <p>Licensors</p>
                <p>Studios</p>
                <p>Sources</p>
                <p>Genres</p>
                <p>Duration</p>
                <p>Rating</p>
                <p>Scored by</p>
                <p>Members</p>
                <p>Favorites</p>
                <p>Description</p>
                </div>
            </div>
        )
    }
}
/*
const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}
*/
export default connect(/*mapStateToProps, mapDispatchToProps*/)(Episode)
