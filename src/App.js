import logo from './logo.svg';
import './App.css';
import Gifs from "./components/Gifs"
import Search from "./components/Search.js"
import { Component } from 'react';


class App extends Component {
  
  constructor()
    {
        super()
        this.state =
        {
          gifArr: [],
          search: ""
        }
    }
    handleTrending()
    {
        let limit = "&limit=25"
        const api_key ="cqQ4dklzeTC1dDoo4yqF4GoYPb4vwH8E"
        const url = "http://api.giphy.com/v1/gifs/trending?api_key=" + api_key

         axios.get(url).then((reponse) =>
        {
            const getData = reponse.data.data;
            console.log(getData);

        }).catch((err) => console.log(err));

        
    }

    handleReg()
    {
        let limit = "&limit=20"
        const api_key ="cqQ4dklzeTC1dDoo4yqF4GoYPb4vwH8E"
        const url = "http://api.giphy.com/v1/gifs/search?q=" + this.state.search + "&api_key=" + api_key + limit

         axios.get(url).then((reponse) =>
        {
            const getData = reponse.data.data;
            console.log(getData);

        }).catch((err) => console.log(err));

        
    }

    
    handleRand()
    {
      let limit = "&limit=15"
        const api_key ="cqQ4dklzeTC1dDoo4yqF4GoYPb4vwH8E"
        const url = "http://api.giphy.com/v1/gifs/random?api_key=" + api_key

         axios.get(url).then((reponse) =>
        {
            const getData = reponse.data.data;
            console.log(getData);

        }).catch((err) => console.log(err));

        
    }


    handleChange(event) {
        this.setState({ search: event.target.value});
    }
    render()
    {
      return(<Search search = {this.state.search} handleChange = {this.handleChange}/>)
    }
}

export default App;
