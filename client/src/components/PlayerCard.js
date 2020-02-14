import React from "react";
const PlayerCard = props => {
  return (
    <div>
      {props.data.map(player=>{
          return(
              <div key={player.id}>
                <p>{player.name}</p>
                <p>{player.country}</p>
                <p>{player.searches}</p>
              </div>
          )
      })}
      
    </div>
  );
};
export default PlayerCard;
