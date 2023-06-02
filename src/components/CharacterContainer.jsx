import React from "react";

function CharacterComponent(props){

    return(
        <div className="container">
            <div className="character-image">
                <img src={props.characterImage} alt="character"/>
            </div>
            <div className="character-features">
                <p className="character-name">{props.characterName}</p>
                <div className="charcter-status">
                    <div className="status-color"  style={{backgroundColor: props.characterStatusColour}}></div>
                    <p className="status">{props.characterStatus}</p>
                    <p className="species-name">{props.speciesName}</p>
                </div>
                <div className="location">
                    <p className="heading location">Last known location:</p>
                    <p className="character-location">{props.lastSeenLocation}</p>
                </div>
                <div className="episode">
                    <p className="heading episode">Origin:</p>
                    <p className="character-episode">{props.characterOrigin}</p>
                </div>
            </div>
        </div>
    );
}

export default CharacterComponent;