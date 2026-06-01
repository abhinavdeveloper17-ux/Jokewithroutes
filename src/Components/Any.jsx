import React from "react";

export default function Any({
  jokeData,
  fetchJoke,
}) {
  return (
    <div className="text-white p-6">
      {jokeData && (
        <>
          <h1 className="text-4xl text-amber-400">
            {jokeData.category}
          </h1>

          {jokeData.type === "twopart" ? (
            <>
              <p>Setup: {jokeData.setup}</p>
              <p>Delivery: {jokeData.delivery}</p>
            </>
          ) : (
            <p>{jokeData.joke}</p>
          )}
        </>
      )}

      <button
        className="border px-4 py-2 mt-4 bg-white text-black"
        onClick={() => fetchJoke("Any")}
      >
        Next Any Joke
      </button>
    </div>
  );
}