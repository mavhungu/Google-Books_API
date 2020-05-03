import React from "react";
import "tachyons";


const Book = ({title,authors,imageLinks,industryIdentifierstype0,industryIdentifiers1,industryIdentifierstype1,
    industryIdentifiers0,pageCount,Categories,infoLink,industryIdentifiers,ratingsCount,previewLink,publishedDate,publisher,language,description})=>{
return(
    <div className={''}>
        
            <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
                {/*<img src={`${imageLinks}`} className="br-100 h4 w4 dib ba b--black-05 pa2" alt="google images" />
                <div>
                    <h2 className="f3 mb2">{title}</h2>
                    <h3 className="f5 fw4 gray mt0">{`By : ${authors}`}</h3>
                    <p>{`Published : ${publishedDate}`}<br />
                    {`Publisher : ${publisher}`}<br />
                    
                    </p>*/}
                    {/*<p>{industryIdentifierstype0} : {industryIdentifiers0}<br/>
                     {industryIdentifierstype1} : {industryIdentifiers1}
                    </p>*/}
                    {/*<a className="f6 link dim br3 ba ph3 pv2 mb2 dib dark-gray" href={`${infoLink}`}>View</a>
                </div>*/}

                <div className="dt mw6 center pv4 pv5-m pv6-ns">
                    <div className="dtc v-top">
                        <img src={`${imageLinks}`} alt="google images" className="w-100 mw7 w5-ns" />
                    </div>
                    <div className="dtc v-top ph2 pr0-ns pl3">
                        <div className="lh-copy mv0">
                        <h2 className="f3 mb2">{title}</h2>
                            <h3 className="f5 fw4 gray mt0">{`By : ${authors}`}</h3>
                            <p>{`Published : ${publishedDate}`}<br />
                            {`Publisher : ${publisher}`}<br />
                            </p>
                            <p><a className={"link f6 f5-l dib"} target={'_blank'} rel='noopener noreferrer' href="#">{Categories}</a> - {`${pageCount} pages`}</p>
                            {/*<p>{description}</p>*/}
                            <a className="f6 link dim br3 ba ph3 pv2 mb2 dib dark-blue" target={'_blank'} rel='noopener noreferrer' href={`${infoLink}`}>View Book</a>
                            {/*<a class="f6 link dim br2 ba bw1 ph3 pv2 mb2 dib dark-blue bg-white" href="#0">View Book</a>*/}
                        </div>
                    </div>
                </div>

            </div>
    </div>
);
}
export default Book;