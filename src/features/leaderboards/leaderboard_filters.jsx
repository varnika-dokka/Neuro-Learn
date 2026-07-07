export default function LeaderboardFilters({
  topX,
  setTopX,
  username,
  setUsername,
  rank,
  setRank
}) {
  return (
    <section className="leaderboard-filters">
      <label>
        Show:
        <select value={topX} onChange={(e) => setTopX(e.target.value)}>
          <option value="all">All Players</option>
          <option value="5">Top 5</option>
          <option value="10">Top 10</option>
        </select>
      </label>

      <label>
        Username:
        <input
          type="search"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      <label>
        Rank:
        <input
          type="number"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
        />
      </label>
    </section>
  );
}