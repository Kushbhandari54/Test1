import { useState, useEffect } from "react";
import axios from "axios";
const Pokemon = () => {
  const [value, setValue] = useState("______________________");
  const [name, setName] = useState("________________________");
  const [move, setMove] = useState("________________________");

  useEffect(() => {
    async function callApi() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
      setName(res.data.name);
      setMove(res.data.moves.length);
    }

    callApi();
  });

  return (
    <>
      <div className="">
        <div>
          <h1 className="my-4 text-2xl">You choose the value {value}</h1>
          <h1> The name is <span className="text-red-500 ">{name}</span></h1>
          <h1>The move is <span className="text-red-500 ">{move}</span></h1>
        </div>
        <select
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        >
          <option value="1">1</option>
          <option value="25">25</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </>
  );
};

export default Pokemon;
