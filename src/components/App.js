import React, {Component} from 'react';
import axios from 'axios';
import  './App.sass';
import {Container, Card} from "semantic-ui-react";
import Menu  from '../containers/Menu';
import BookCard  from '../containers/Bookcard';
import Filter  from '../containers/Filter';

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
                  <Filter></Filter>
                  <Card.Group  className="cards-wrap">
                         {
                             !isReady
                             ? <p>Loading</p>
                             : books.map( (book, index) => (
                                 <BookCard
                                    key={index}
                                    {...book}
                                 >

                                 </BookCard>
                             ))
                         }
                  </Card.Group>
              </Container>
          </div>
      );
  }
}

export default App;
