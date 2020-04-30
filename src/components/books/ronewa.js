import React from "react";
import "tachyons"

const Ronewa = ({onRouteChange})=>{
    return(
        <div className={''}>
            <a className="f6 link dim br3 ba ph3 pv2 mb2 dib near-black" href="#0" onClick={()=>onRouteChange('search')}>
                Ronewa Button</a>
        </div>
    )
}
export  default  Ronewa;
