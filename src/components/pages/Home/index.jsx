import React, { useContext, useEffect, useState } from "react";

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
import PokemonCard from "../../PokemonCard";
import Modal from "../../Modal";
import FormInput from "../../Input";
import SearchBar from "../../SearchBar";
import Loading from "../../Loading";
import { fetchAPI } from "../../../lib/fetchAPI.js";
import { StoreContext } from "../../../store/index.js";
import { useSearchParams } from "react-router-dom";

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
  {
    value: "normal",
    label: "Normal",
  },
];

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const pokemonQuery = searchParams.get("pokemon");
  // const [records, setRecords] = useState({
  //   next: "",
  //   previous: "",
  //   results: [],
  // });
  const { records, setRecords } = useContext(StoreContext);

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [showModal, setShowModal] = useState(false);
  // const [selectedPokemon, setSelectedPokemon] = useState({
  //   image: "",
  //   name: "",
  //   types: [],
  //   url: "",
  // });

  // const handleOpenModal = () => {
  //   setShowModal(true);
  //   document.body.style.overflow = "hidden";
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  //   document.body.style.overflow = "auto";
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setPokemons(
  //     pokemons.map((pokemon) =>
  //       pokemon.url === selectedPokemon.url ? selectedPokemon : pokemon
  //     )
  //   );
  //   handleCloseModal();
  // };

  const handleFilterPokemon = (search) => {
    setPokemons(
      records.results.filter(({ name }) =>
        name.toLowerCase().includes(search.trim().toLowerCase())
      )
    );
  };

  const handlePagination = async (url) => {
    setLoading(true);
    (async () => {
      const res = await fetchAPI({ url });

      setRecords(res);
      setPokemons(res.results);
      setLoading(false);
    })();
  };

  useEffect(() => {
    (async () => {
      const res = await fetchAPI({
        url: "https://pokeapi.co/api/v2/pokemon/",
      });
      const { results } = res;

      setRecords(res);
      setPokemons(results);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    })();
  }, []);

  useEffect(() => {
    handleFilterPokemon(pokemonQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonQuery]);

  return (
    <div className="">
      {/* <SearchBar onFilterPokemons={handleFilterPokemon} /> */}

      <SearchBar
        onFilterPokemons={(search) => setSearchParams({ pokemon: search })}
      />
      <div className="pokemonsCtn">
        {pokemons.map((pokemon, index) => (
          <PokemonCard
            key={pokemon.name + index}
            url={pokemon.url}
            // onSelectPokemon={(pokemon) => {
            //   setSelectedPokemon(pokemon);
            //   handleOpenModal();
            // }}
          />
        ))}
      </div>

      <div className="buttons-container">
        <button
          type="button"
          className="button"
          disabled={!records.previous}
          onClick={() => handlePagination(records.previous)}
        >
          Previous
        </button>
        <button
          type="button"
          className="button"
          disabled={!records.next}
          onClick={() => handlePagination(records.next)}
        >
          Next
        </button>
      </div>

      {/* {showModal && (
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
      )} */}
      {loading && <Loading />}
    </div>
  );
}
