import { PetCard } from "./PetCard";

export function PetsGrid({
  pets,
  ownedPetIds,
  selectedPetId,
  equippedPetId,
  onSelectPet,
}) {
  return (
    <section>
      <div className="pets">
        {pets.map(pet => (
          <PetCard
          key={pet.id}
          pet={pet}
          owned={ownedPetIds.has(pet.id)}
          selected={selectedPetId === pet.id}
          equipped={equippedPetId === pet.id}
          onSelect={() => onSelectPet(pet.id)}
        />
        ))}
      </div>
    </section>
  );
}
