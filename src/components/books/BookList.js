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
                            /*const v = {volumes[i].volumeInfo.industryIdentifiers} 
                            if(v.length>0){
                            industryIdentifiers0={volumes[i].volumeInfo.industryIdentifiers[0].identifier}
                            industryIdentifierstype0={volumes[i].volumeInfo.industryIdentifiers[0].type}

                            industryIdentifiers1={volumes[i].volumeInfo.industryIdentifiers[1].identifier}
                            industryIdentifierstype1={volumes[i].volumeInfo.industryIdentifiers[1].type}
                            }*/

                            
                        />
                    );
                })
            }
        </div>
    );
}

export default BookList;