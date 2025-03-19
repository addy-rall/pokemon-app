import React, { useState } from "react";

const PokemonCard = ({ name, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="card-container" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        {/* Front Side */}
        <div className="card-front">
          <img src={image} alt={name} />
          <h3>{name.toUpperCase()}</h3>
        </div>

        {/* Back Side */}
        <div
          className="card-back"
          style={{
            backgroundImage: `url("${process.env.PUBLIC_URL}/poke-card.jpg")`, // ✅ Fix: Use backticks
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default PokemonCard;
