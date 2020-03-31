import {Card} from "semantic-ui-react";
import BookCard from "../../containers/Bookcard";
import React from "react";
import Filter from "../../containers/Filter";

const Main = ({isReady, books}) => {
    return(
        <>
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
        </>
    )
}

export default Main;