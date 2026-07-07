import "../style.css";

export function UserDashboard({
  totalPoints,
  currentPoints,
  equippedPet,
}) {
  
  return (
    <section className="user-dashboard">
      <div className="dashboard-info">
        <h3>Here Are Your Current Stats:</h3>
        <p><strong>Total Points Earned:</strong> {totalPoints}</p>
        <p><strong>Current Points:</strong> {currentPoints}</p>
      </div>

      <div className="dashboard-avatar">
        <p><strong>Your Current Avatar:</strong> {equippedPet.name}</p>
        <img src={equippedPet.img} alt={equippedPet.imgAlt} className="avatar-img"/>
      </div>
    </section>
  )
}
