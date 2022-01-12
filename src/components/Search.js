import React, {Component} from "react";
import axios from "axios";


const Search = ({search, handleChnage}) =>
{
    return
        (
                <div>
                <input className='' type="text" placeholder="dogs, cats, etc.." ></input>
                <input className='' type = "submit" value={search} onClick={this.handleReg()}></input>
                <button className='' onClick={this.handleTrending()}>Trending</button>
                <button className='' onClick={this.handleRand()}>Random</button>
                </div> 
        )
}