import React from "react";
import "tachyons";


const Book = ({title,authors,imageLinks,industryIdentifierstype0,industryIdentifiers1,industryIdentifierstype1,
    industryIdentifiers0,infoLink,industryIdentifiers,ratingsCount,previewLink,publishedDate,publisher,language,description})=>{
return(
    <div className={''}>
        
            <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
                <img src={`${imageLinks}`} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="google images" />
                <div>
                    <h2 className="f3 mb2">{title}</h2>
                    <h3 className="f5 fw4 gray mt0">{`By : ${authors}`}</h3>
                    <p>{`Published : ${publishedDate}`}<br />
                    {`Publisher : ${publisher}`}<br />
                    
                    </p>
                    {/*<p>{industryIdentifierstype0} : {industryIdentifiers0}<br/>
                     {industryIdentifierstype1} : {industryIdentifiers1}
                    </p>*/}
                    <a className="f6 link dim br3 ba ph3 pv2 mb2 dib dark-gray" href={`${infoLink}`}>View</a>
                </div>
            </div>
    </div>
);
}
export default Book;