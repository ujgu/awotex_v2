import React from "react";
import "../Styles/Stats.css";
import StatsInfo from "./StatsInfo";

export default function Stats(props) {
  
  
  return (
    <div className="Stats">
      stats here! nick: {props.nick} account id: {props.playerId}
      {console.log("Stats Data:", props.data)}
      {props.data ? (
        <StatsInfo Stats={props.data}/>
        
      ) : (
        <div>Loading...</div>
      )}
      {/* <h3>{props.data.data.attributes.bestRankPoint}</h3>
      <h1>Solo TPP Stats</h1>
      <h2>Kills</h2>
      <h3>{props.data.data.attributes.gameModeStats.solo.kills}</h3> */}
    </div>
  );
}
