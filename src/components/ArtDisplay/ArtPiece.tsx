import React from "react";

const ArtPiece = (props) => {
  const { title, artArray, audioLink } = props;

  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  if (artArray[0] === undefined) {
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{title}</h1>
        <div className = "artFrame">
          {artArray[0].map((art, index) => {
            return (
              <img
                src={art}
                className="artImg"
                style={{
                  animation: `${artArray[1][index]} ${
                    artArray[2][index]
                  }, fading ${getRandomInt(19)}s`,
                  animationIterationCount: "infinite",
                  animationDirection: "alternate",
                }}
                alt=""
              />
            );
          })}
        </div>
        <a href = {`https://www.youtube.com/watch?v=${audioLink}`} target = "_blank" rel="noreferrer">Original Audio</a>
        <iframe
          width="0"
          height="0"
          src={`https://www.youtube.com/embed/${audioLink}?autoplay=1&rel=0&loop=1&controls=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    );
  }
};

export default ArtPiece;
