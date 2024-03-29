import React from "react";
import "tachyons"
const Nav = ()=>{
    return(
        <nav className="db dt-l w-100 bg-black-50 border-box pa3 ph5-l mt0">
            <a className="db dtc-l v-mid mid-gray link w-100 w-25-l tc tl-l mb2 mb0-l pointer" href="/" title="Home">
                <img src="./small.png" className="dib w2 h2 br-100 grow pointer" alt="Site Name"/>
            </a>
            <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
            </div>
        </nav>
    );
}
export default  Nav;
