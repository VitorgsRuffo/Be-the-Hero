import React from 'react';


export default function Header(props){
    //if the HTML have more than one line we should return it embbeded in parentheses.
    return (
        <header>
            <h1>{props.title} {props.children}</h1> 
        </header>
    );
    //OBS: to use a JS var inside the HTML markup we need to embrace it in {}.
    //OBS: to access the raw text between the component tags we can use the children property.
}



//to put export default before the Component function is the same as do:
//export default Header;