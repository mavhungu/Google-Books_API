import React from "react";
import Small from '../img/small.png';
import "tachyons";

 const Me = ({onRouteChange})=>{
     return(
        <div className={'mw9 cf fl w-100 bg-light-green pa3 mt4 dib br'}>
            <div className={'mb3 w-100 bg-white pa3 b pointer books'}>{'Books will show here'}</div>
            <img src={Small} className="br-100 h4 w4 dib ba b--black-05 pa2 grow pointer" alt='profile' />
        </div>
     );
 }
 export default Me;