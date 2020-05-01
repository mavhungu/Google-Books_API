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
                            description={volumes[i].volumeInfo.description}
                            language={volumes[i].volumeInfo.language}
                            publisher={volumes[i].volumeInfo.publisher}
                            publishedDate={volumes[i].volumeInfo.publishedDate}
                            previewLink={volumes[i].volumeInfo.previewLink}
                            ratingCount={volumes[i].volumeInfo.ratingCount}
                            
                        />
                    );
                })
            }
        </div>
    );
}

export default BookList;