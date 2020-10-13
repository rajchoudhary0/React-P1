import React from 'react';
import './App.css';

function Tweet({name, designation, likes}){
    return(
        <div  className="tweet">
                <h4>{name}</h4>
                <p>{designation}</p>
                <h3>{likes}</h3>
        </div>
    );
}

export default Tweet;