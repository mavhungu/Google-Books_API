import React from "react";
import "tachyons";

const Search = ({OnSearchInput,OnSubmitButton,onRouteChange})=>{
    return(
        <div className={''}>
            <form className="mw7 center pa3 br2-ns ba b--black-10 m2" onSubmit={OnSubmitButton}>
                <fieldset className="cf bn ma0 pa0">
                    {/*<legend className="pa0 f5 f4-ns mb3 black-80">Search for Books</legend>*/}
                    <div className="cf">
                        <label className="clip" htmlFor="email-address">Email Address</label>
                        <input require="true" className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                            placeholder="Search" type="text" name="search-book"
                            id="search-book" onChange={OnSearchInput}/>
                            <input
                                className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                                type="submit" value={'Search'} onClick={()=> onRouteChange('searched')} autoComplete={'off'} />
                    </div>
                </fieldset>
            </form>
        </div>
    );
}
export default Search;

