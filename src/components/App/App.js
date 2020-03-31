import React, {Component} from 'react';
import axios from 'axios';
import './App.sass';
import {Container, Card} from "semantic-ui-react";
import Menu  from '../../containers/Menu';
import BookCard  from '../../containers/Bookcard';
import Filter  from '../../containers/Filter';
import Main from "../Main/Main";
import {Route, Switch} from "react-router-dom";
import Cart from "../../containers/Cart";

class App extends Component {

    state = {
      scrolled: false
    };


   componentDidMount() {
       const {setBooks} = this.props;
       axios.get('/books.json').then( ({data}) => {
           setBooks(data);
       });

      window.addEventListener("scroll", () =>{
          const isTop = window.scrollY > 20;

          if (isTop) {
              this.setState({scrolled: true})
          } else {
              this.setState({scrolled: false})
          }
      })
   }

    render() {
      const {books, isReady} = this.props;
      return (
          <div className={this.state.scrolled ? 'App nav_fixed' : 'App'}>
              <Container>
                  <Menu></Menu>

                 <Switch>
                     <Route path='/' exact render={() =>  <Main isReady={isReady} books={books}/>} />
                     <Route path='/cart' render={()=> <Cart/>}  />
                 </Switch>
              </Container>
          </div>
      );
  }
}




export default App;
