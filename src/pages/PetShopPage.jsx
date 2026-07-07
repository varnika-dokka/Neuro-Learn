import { useState, useEffect } from "react";
import { petshopData } from "../data/petshopData";
import { ShopPreview } from "../components/ShopPreview";
import { PetsGrid } from "../components/PetsGrid";
import { UserDashboard } from "../components/UserDashboard";

export default function PetShopPage() {
  const [points, setPoints] = useState(
    parseInt(localStorage.getItem("totalPoints")) || 0
  );
  const [trophies, setTrophies] = useState(
    parseInt(localStorage.getItem("totalTrophies")) || 0
  );
  const [ownedPetIds, setOwnedPetIds] = useState(new Set(["cat"]));
  const [selectedPetId, setSelectedPetId] = useState("cat");
  const [equippedPetId, setEquippedPetId] = useState("cat");

  const selectedPet = petshopData.find((p) => p.id === selectedPetId);
  const equippedPet = petshopData.find((p) => p.id === equippedPetId);
  const ownsSelected = ownedPetIds.has(selectedPet.id);
  const canBuy = points >= selectedPet.cost;
  const isEquipped = equippedPetId === selectedPet.id;

  function handleBuy() {
    if (!ownsSelected && canBuy) {
      setPoints((prev) => {
        const newPoints = prev - selectedPet.cost;
        localStorage.setItem("totalPoints", newPoints);
        return newPoints;
      });
      setOwnedPetIds((prev) => new Set([...prev, selectedPet.id]));
    }
  }

  function handleEquip() {
    if (ownsSelected) {
      setEquippedPetId(selectedPet.id);
    }
  }

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedPoints = parseInt(localStorage.getItem("totalPoints")) || 0;
      const updatedTrophies = parseInt(localStorage.getItem("totalTrophies")) || 0;
      setPoints(updatedPoints);
      setTrophies(updatedTrophies);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div>
      <main>
        <UserDashboard
          totalPoints={points}
          totalTrophies={trophies}
          currentPoints={points}
          equippedPet={equippedPet}
        />

        <section>
          <ShopPreview
            currentPoints={points}
            selectedPet={selectedPet}
            ownsSelected={ownsSelected}
            canBuy={canBuy}
            isEquipped={isEquipped}
            onBuy={handleBuy}
            onEquip={handleEquip}
          />
        </section>

        <PetsGrid
          pets={petshopData}
          ownedPetIds={ownedPetIds}
          selectedPetId={selectedPetId}
          equippedPetId={equippedPetId}
          onSelectPet={setSelectedPetId}
        />
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 NeuroLearn</p>
      </footer>
    </div>
  );
}