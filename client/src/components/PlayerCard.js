import React from "react";
const PlayerCard = props => {
    return(
        <div>
        <p>Player name: {props.player.name}</p>
        <p>Player country: {props.player.country}</p>
        <p>Player searches: {props.player.searches}</p>
        </div>
    )
};
export default PlayerCard;
