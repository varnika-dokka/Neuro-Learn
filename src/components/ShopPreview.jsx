import { Link } from "react-router-dom";
import "../style.css";

export function ShopPreview({
  currentPoints,
  selectedPet,
  ownsSelected,
  canBuy,
  isEquipped,
  onBuy,
  onEquip,
}) {
  return (
    <div className="preview-content">
      <p><strong>Points:</strong> {currentPoints}</p>
      <img src={selectedPet.img} alt={selectedPet.imgAlt} />
      <p><strong>Cost:</strong> {selectedPet.cost}</p>

      {!ownsSelected && (
        <button
        onClick={onBuy}
        disabled={!canBuy}
        className={canBuy ? "btn btn-primary" : "btn btn-disabled"}
        >
          Buy
        </button>
      )}

      {ownsSelected && !isEquipped && (
        <button onClick={onEquip} className="btn btn-secondary">
          Equip
        </button>
      )}

      {isEquipped && (
        <button disabled className="btn btn-disabled">
          Equipped
        </button>
      )}
    </div>
  );
}
