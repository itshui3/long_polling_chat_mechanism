import React from 'react';
//styling
import './Chatbox.sass'
// chatbox API

// chatlog API

// interface API

function Chatbox(props) {
    return (
        // block compo
        <div 
        className='chatbox'
        >
            {/* chatlog is a child of, a dependent to, chatbox */}
            <div
            className='chatbox__chatlog'
            ></div>
            <div
            className='chatbox__interface'
            >
                <div
                className='interface__input'
                ></div>
                <div
                className='interface__send'
                ></div>
            </div>
            
        </div>
    );
}

export default Chatbox;