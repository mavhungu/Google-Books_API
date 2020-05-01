import React from "react";
import "tachyons"
const Nav = ()=>{
    return(
        <nav className="db dt-l w-100 border-box pa3 ph5-l">
            <a className="db dtc-l v-mid mid-gray link w-100 w-25-l tc tl-l mb2 mb0-l pointer" href="#" title="Home">
                <img src="./small.png" className="dib w2 h2 br-100 grow pointer" alt="Site Name"/>
            </a>
            <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                <a className="link dim white f6 f5-l dib mr3 mr4-l grow pointer" href="#">Home</a>
                <a className="link dim white f6 f5-l dib mr3 mr4-l grow pointer" href="#" >Profile</a>
                <a className="link dim white f6 f5-l dib grow pointer" href="#"  >Logout</a>
            </div>
        </nav>
    )
}
export default  Nav;
