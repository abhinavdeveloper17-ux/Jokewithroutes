import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dark from "./components/Dark";
import Pun from "./components/Pun";
import Programming from "./Components/Programming";
import Misc from "./Components/Misc"; 
import Christmas from "./Components/Christmas";
import Spooky from "./Components/Spooky";
import Any from "./Components/Any";
export default function App() {
  const [main, setmain] = useState(null);

  async function fetchJoke(category) {
    const res = await fetch(
      `https://v2.jokeapi.dev/joke/${category}`
    );

    const data = await res.json();
    setmain(data);
  }

  return (
    <div className="bg-gray-800 min-h-screen w-screen">
      <h1 className="w-full font-extrabold text-8xl flex items-center justify-center py-4 text-white">
        Random Joke Generator
      </h1>

      <div className="w-full flex flex-row justify-around">
        <Link
          to="/Dark-jokes"
          className="border mt-6 px-6 py-4 border-black rounded-2xl bg-white text-black"
          onClick={() => fetchJoke("Dark")}
        >
          Crack a Dark joke
        </Link>

        <Link
          to="/Pun-jokes"
          className="border mt-6 px-6 py-4 border-black rounded-2xl bg-white text-black"
          onClick={() => fetchJoke("Pun")}
        >
          Crack a Pun joke
        </Link>

        <Link
          to="/Programming-jokes"
          className="border mt-6 px-6 py-4 border-black rounded-2xl bg-white text-black"
          onClick={() => fetchJoke("Programming")}
        >
          Crack a Programming joke
        </Link>
      </div>

      <Routes>
        <Route
          path="/Dark-jokes"
          element={
            <Dark
              jokeData={main}
              fetchJoke={fetchJoke}
            />
          }
        />

        <Route
          path="/Pun-jokes"
          element={
            <Pun
              jokeData={main}
              fetchJoke={fetchJoke}
            />
          }
        />

        <Route
          path="/Programming-jokes"
          element={
            <Programming
              jokeData={main}
              fetchJoke={fetchJoke}
            />
          }
        />
      </Routes>
    </div>
  );
}