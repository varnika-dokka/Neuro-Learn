export default function LeaderboardRow({ player }) {
  return (
    <div className="leaderboard-row">
      <span className="rank">{player.rank}</span>
      <img src={player.avatar} alt={`Avatar of ${player.name}`} className="avatar" />
      <span className="player-name">{player.name}</span>
      <span className="points">{player.points.toLocaleString()}</span>
    </div>
  );
}