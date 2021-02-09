import './styles/Loading.css';
import React from 'react';

const Loading = () => {
    return(
        <div class="ui segment loading">
            <p></p>
            <div class="ui active dimmer">
                <div class="ui loader"></div>
            </div>
        </div>        
    );
}

export default Loading;