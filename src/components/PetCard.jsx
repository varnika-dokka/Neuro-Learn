import { Link } from "react-router-dom";
import { data } from "../data/petshopData";
import "../style.css";

export function PetCard({ pet, owned, selected, equipped, onSelect }) { 
  const className =
    (owned ? "pet-card" : "pet-card-locked") +
    (selected ? " is-selected" : "") +
    (equipped ? " is-equipped" : "");

  return(
    <button type="button" className={className} onClick={onSelect}>
      <img src={owned ? pet.img : data.padlock}
      alt={owned ? pet.imgAlt : "locked avatar"}
      />
      {equipped && <span className="equipped-badge">Equipped</span>}
    </button>
  );
}