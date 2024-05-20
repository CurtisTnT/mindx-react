import { useState } from "react";

import "./App.css";
import png001 from "/src/assets/images/001.png";
import png002 from "/src/assets/images/002.png";
import png003 from "/src/assets/images/003-Mega.png";
import png004 from "/src/assets/images/004.png";
import png005 from "/src/assets/images/005.png";
import png006 from "/src/assets/images/006-Mega-Y.png";
import png007 from "/src/assets/images/007.png";
import png008 from "/src/assets/images/008.png";
import png009 from "/src/assets/images/009-Mega.png";
import png010 from "/src/assets/images/010.png";
import png011 from "/src/assets/images/011.png";
import png012 from "/src/assets/images/012.png";
import PokemonCard from "./components/PokemonCard";
import Modal from "./components/Modal";
import FormInput from "./components/Input";
import SearchBar from "./components/SearchBar";

const ITEMS = [
  {
    id: "#0001",
    image: png001,
    name: "Bulbasaur",
    types: ["grass", "poison"],
  },
  {
    id: "#0002",
    image: png002,
    name: "Bulbasaur",
    types: ["grass", "poison"],
  },
  {
    id: "#0003",
    image: png003,
    name: "Venusaur",
    types: ["grass", "poison"],
  },
  {
    id: "#0004",
    image: png004,
    name: "Charmander",
    types: ["fire"],
  },
  {
    id: "#0005",
    image: png005,
    name: "Charmeleon",
    types: ["fire"],
  },
  {
    id: "#0006",
    image: png006,
    name: "Charizard",
    types: ["fire", "flying"],
  },
  {
    id: "#0007",
    image: png007,
    name: "Squirtle",
    types: ["water"],
  },
  {
    id: "#0008",
    image: png008,
    name: "Wartortle",
    types: ["water"],
  },
  {
    id: "#0009",
    image: png009,
    name: "Blatoise",
    types: ["water"],
  },
  {
    id: "#0010",
    image: png010,
    name: "Caterpie",
    types: ["bug"],
  },
  {
    id: "#0011",
    image: png011,
    name: "Metapod",
    types: ["bug"],
  },
  {
    id: "#0012",
    image: png012,
    name: "Butterfree",
    types: ["bug", "flying"],
  },
];

const TYPE_ITEMS = [
  {
    value: "grass",
    label: "Grass",
  },
  {
    value: "poison",
    label: "Poison",
  },
  {
    value: "fire",
    label: "Fire",
  },
  {
    value: "flying",
    label: "Flying",
  },
  {
    value: "water",
    label: "Water",
  },
  {
    value: "bug",
    label: "Bug",
  },
];

function App() {
  const [initalPokemons, setInitialPokemons] = useState(ITEMS);

  const [showModal, setShowModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState({
    id: "",
    image: "",
    name: "",
    types: [],
  });

  const handleOpenModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setInitialPokemons((prev) =>
      prev.map((pokemon) =>
        pokemon.id === selectedPokemon.id ? selectedPokemon : pokemon
      )
    );
    handleCloseModal();
  };

  const handleFilterPokemon = (search) => {
    setInitialPokemons(
      ITEMS.filter(({ name }) =>
        name.toLowerCase().includes(search.trim().toLowerCase())
      )
    );
  };

  return (
    <div className="app-container">
      <SearchBar onFilterPokemons={handleFilterPokemon} />

      <div className="pokemonsCtn">
        {initalPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onSelectPokemon={() => {
              setSelectedPokemon(pokemon);
              handleOpenModal();
            }}
          />
        ))}
      </div>

      {showModal && (
        <Modal onClose={handleCloseModal}>
          <div className="modal-imgCtn">
            <img
              src={selectedPokemon.image}
              alt="image"
              width={250}
              height={250}
            />
          </div>

          <form onSubmit={handleSubmit} className="modal-form">
            <FormInput
              label="ID"
              value={selectedPokemon.id}
              onValueChange={(id) =>
                setSelectedPokemon((prev) => ({
                  ...prev,
                  id,
                }))
              }
            />

            <FormInput
              label="Name"
              value={selectedPokemon.name}
              onValueChange={(name) =>
                setSelectedPokemon((prev) => ({
                  ...prev,
                  name,
                }))
              }
            />

            <div className="modal-form-control">
              <span>Types:</span>

              <div className="modal-types-ctn">
                {TYPE_ITEMS.map(({ value, label }, index) => (
                  <div className="modal-check-inbox" key={index}>
                    <input
                      type="checkbox"
                      checked={selectedPokemon.types.includes(value)}
                      onChange={() =>
                        setSelectedPokemon((prev) => ({
                          ...prev,
                          types: prev.types.includes(value)
                            ? prev.types.filter((type) => type !== value)
                            : [...prev.types, value],
                        }))
                      }
                    />
                    <label htmlFor="types">{label}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-submit-btn-ctn">
              <button type="submit">Save</button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default App;
