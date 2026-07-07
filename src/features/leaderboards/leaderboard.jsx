import { useState } from "react";
import { leaderboardData } from "./leaderboard_data";
import LeaderboardRow from "./leaderboard_row";
import LeaderboardFilters from "./leaderboard_filters";

export default function Leaderboard() {
  const [topX, setTopX] = useState("all");
  const [username, setUsername] = useState("");
  const [rank, setRank] = useState("");

  let visiblePlayers = [...leaderboardData];

  if (username) {
    visiblePlayers = visiblePlayers.filter(player =>
      player.name.toLowerCase().startsWith(username.toLowerCase())
    );
  }

  if (rank) {
    visiblePlayers = visiblePlayers.filter(
      player => player.rank === Number(rank)
    );
  }

  if (topX !== "all") {
    visiblePlayers = visiblePlayers.slice(0, Number(topX));
  }

  return (
    <section>
      <h2>Leaderboard</h2>

      <LeaderboardFilters
        topX={topX}
        setTopX={setTopX}
        username={username}
        setUsername={setUsername}
        rank={rank}
        setRank={setRank}
      />

      <div className="leaderboard-header">
        <span>Rank</span>
        <span>Name</span>
        <span>Points</span>
      </div>

      {visiblePlayers.map(player => (
        <LeaderboardRow key={player.id} player={player} />
      ))}

      {visiblePlayers.length === 0 && (
        <p>No matching players found.</p>
      )}
    </section>
  );
}