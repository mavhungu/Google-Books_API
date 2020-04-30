import React from 'react';
import Book from './books';

const BookList = ({volumes}) => {
    return (
        <div>
            {
                volumes.map((user, i) => {
                    return (
                        <Book
                            key={i}
                            infoLink={volumes[i].volumeInfo.infoLink}
                            imageLinks={volumes[i].volumeInfo.imageLinks.smallThumbnail}
                            authors={volumes[i].volumeInfo.authors}
                            title={volumes[i].volumeInfo.title}
                        />
                    );
                })
            }
        </div>
    );
}

export default BookList;