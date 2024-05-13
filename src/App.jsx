import "./App.css";
import PokemonCard from "./PokemonCard";

function App() {
  const ITEMS = [
    {
      id: "#0001",
      image: "/src/assets/images/001.png",
      name: "Bulbasaur",
      types: ["Grass", "Poison"],
    },
    {
      id: "#0002",
      image: "/src/assets/images/002.png",
      name: "Bulbasaur",
      types: ["Grass", "Poison"],
    },
    {
      id: "#0003",
      image: "/src/assets/images/003-Mega.png",
      name: "Venusaur",
      types: ["Grass", "Poison"],
    },
    {
      id: "#0004",
      image: "/src/assets/images/004.png",
      name: "Charmander",
      types: ["Fire"],
    },
    {
      id: "#0005",
      image: "/src/assets/images/005.png",
      name: "Charmeleon",
      types: ["Fire"],
    },
    {
      id: "#0006",
      image: "/src/assets/images/006-Mega-Y.png",
      name: "Charizard",
      types: ["Fire", "Flying"],
    },
    {
      id: "#0007",
      image: "/src/assets/images/007.png",
      name: "Squirtle",
      types: ["Water"],
    },
    {
      id: "#0008",
      image: "/src/assets/images/008.png",
      name: "Wartortle",
      types: ["Water"],
    },
    {
      id: "#0009",
      image: "/src/assets/images/009-Mega.png",
      name: "Blatoise",
      types: ["Water"],
    },
    {
      id: "#0010",
      image: "/src/assets/images/010.png",
      name: "Caterpie",
      types: ["Bug"],
    },
    {
      id: "#0011",
      image: "/src/assets/images/011.png",
      name: "Metapod",
      types: ["Bug"],
    },
    {
      id: "#0012",
      image: "/src/assets/images/012.png",
      name: "Butterfree",
      types: ["Bug", "Flying"],
    },
  ];

  return (
    <div style={{}}>
      <h1>Hello mọi người</h1>
      <div className="pokemonsCtn">
        {ITEMS.map((item) => (
          <PokemonCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
