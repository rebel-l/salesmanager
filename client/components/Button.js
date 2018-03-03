'use strict';

import React from 'react';

function Button(props) {
    function handleClick(e) {
        console.log('You clicked me!', e)
    }

    return (
      <button onClick={handleClick}>{props.title}</button>
    );
}

export default Button
