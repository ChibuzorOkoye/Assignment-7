import React, {Component} from "react";
import axios from "axios";


class Gifs extends Component
{
    constructor()
    {
        super()

        this.state = {
            gifArr: []
        }
    }
    handleTrending()
    {
        const api_key ="cqQ4dklzeTC1dDoo4yqF4GoYPb4vwH8E"
        const url = "http://api.giphy.com/v1/gifs/trending?api_key=" + api_key

         axios.get(url).then((reponse) =>
        {
            const getData = reponse.data;
            console.log(getData);

        }).catch((err) => console.log(err));

        
    }

    handleReg(input)
    {
        const api_key ="cqQ4dklzeTC1dDoo4yqF4GoYPb4vwH8E"
        const url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + api_key

         axios.get(url).then((reponse) =>
        {
            const getData = reponse.data;
            console.log(getData);

        }).catch((err) => console.log(err));

        
    }

    handleReg()
    {
        const api_key ="cqQ4dklzeTC1dDoo4yqF4GoYPb4vwH8E"
        const url = "http://api.giphy.com/v1/gifs/random?api_key=" + api_key

         axios.get(url).then((reponse) =>
        {
            const getData = reponse.data;
            console.log(getData);

        }).catch((err) => console.log(err));

        
    }

    
}