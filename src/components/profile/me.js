import React from "react";
import Small from '../img/small.png';
import "tachyons";

 const Me = ({onRouteChange})=>{
     return(
        <div className={'mw9 cf fl w-90 bg-light-green pa3 ma2 dib br grow'}>
            <div className={'mb3'}>{'Books will show here'}</div>
            <img src={Small} className="br-100 h4 w4 dib ba b--black-05 pa2" alt='profile' />
        </div>
     )
 }
 export default Me;