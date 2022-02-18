import React from "react";

export default function StatsInfo(props) {
  return (
    <div>
        {console.log(props.Stats)}
        <h3>{props.Stats.data.attributes.bestRankPoint}</h3>
    </div>
  );
}
