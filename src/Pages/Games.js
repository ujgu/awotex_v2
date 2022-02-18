import React from "react";
import "../Styles/Games.css";
import PubgApi from "../Api/PubgApi";
import { useEffect, useState } from "react";
import Stats from "../Components/Stats";

export default function Games() {
  const [player, setPlayer] = useState([]);
  const [platform, setPlatform] = useState("steam");
  const [playerName, setPlayerName] = useState("ujgu");
  const [playerId, setPlayerId] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [click, setClick] = useState(0);

  useEffect(() => {
    const FetchData = async () => {
      let result = await PubgApi.get(
        `https://api.pubg.com/shards/${platform}/players?filter[playerNames]=${playerName}`
      );
      setPlayer(result.data.data[0]);
      setPlayerId(result.data.data[0].id);
    };
    FetchData();
  }, [playerName]);

  useEffect(() => {
    const FetchData2 = async () => {
      let result = await PubgApi.get(
        `https://api.pubg.com/shards/${platform}/players/${playerId}/seasons/lifetime`
      );
      setData(result.data);
    };
    FetchData2();
    console.log(data);
  }, [click]);

  let clear = (e) => {
    setData([]);
  };

  const handleChange = (e) => {
    setPlayerName(inputValue);
    setClick(click + 1);
  };

  console.log(player);

  return (
    <div className="games">
      <div className="games_container">
        <div className="games_container_header">
          <h1>Pubg Stats</h1>
        </div>
        <div className="games_container_body">
          <div className="games_container_body_input">
            <input
              type="text"
              placeholder="Your PUBG nick"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="games_container_body_platform">
            <h3>select your platform</h3>
          </div>
          <div className="games_container_body_button">
            <button onClick={handleChange}>Search</button>
            <button onClick={clear}>Clear</button>
          </div>
          <div className="games_container_body_stats">
            <Stats
              playerId={playerId}
              nick={playerName}
              platform={platform}
              data={data}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
