import React, {Component} from 'react';
import Search from './components/seach/search';
import Me from './components/profile/me';
import Nav from './components/navigation/nav';
import BookList from "./components/books/BookList";
import Ronewa from "./components/books/ronewa";
import Footer from "./components/footer/footer";
//import { useAlert } from 'react-alert'
import "tachyons";
import './App.css';

export default class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            volumes: [],
            ronewa:[],
            route: 'search',
            isSignedIn: false
        }
    }
    OnSearchInput = (event) => {
      this.setState({
        text: event.target.value
      })
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.text}`)
        .then(response =>{ return response.json()})
        .then(data => {this.setState({volumes: data.items})})
        .catch((e)=>{
          return alert("Something Went Wrong");
        })
    }
    OnSubmitButton = (event) => {
      event.preventDefault();
      this.setState({
        ronewa: this.state.volumes
    })

      /*event.preventDefault();
      if(this.state.volumes.length === 0){
        return alert("Enter Seach Item");
      }else{
        this.setState({
            ronewa: this.state.volumes
        })
        console.log(this.state.volumes)
        /*console.log(this.state.volumes[0].saleInfo)*/
        /*document.querySelector('#search-book').value = ' ';
      }*/
    }

    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState({isSignedIn: false})
        } else if (route === 'home') {
            this.setState({isSignedIn: true})
        }else if(route === 'searched'){
            console.log(this.state.ronewa)
        }
        this.setState({route: route});
    }
    componentDidMount(){}
    render() {
      const {route} = this.state;

        return (
            <div className="App">
                <Nav />
              <Search OnSubmitButton={this.OnSubmitButton} OnSearchInput={this.OnSearchInput} onRouteChange={this.onRouteChange}/>
                { route === 'searched'
                ? <div >
                    <BookList volumes={this.state.ronewa} />
                  </div>
                :(
                  route === 'search'
                  ? <Me onRouteChange={this.onRouteChange}/>
                    : <Ronewa onRouteChange={this.onRouteChange}/>
                  )
                }
                <Footer />
            </div>
        );
    }
}

//export default App;
