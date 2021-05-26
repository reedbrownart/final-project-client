import React from "react";
import { Button } from 'reactstrap';

const ArtPiece = (props) => {
  const { title, artArray, audioLink } = props;

  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  function toggleFullscreen() {
    let elem = document.querySelector("artFrame");
    var promise = elem?.requestFullscreen();
    console.log('were going fullscreen!')
  }

  if (artArray[0] === undefined) {
    return (
      <div className = "artTitle">{title}</div>
    );
  } else {
    return (
      <div className = "wallPart">
        <div className = "artTitle">{title}</div>
        <div id="artFrame">
          {artArray[0].map((art, index) => {
            return (
              <img
                key={index}
                src={art}
                className="artImg"
                style={{
                  animation: `${artArray[1][index]} ${artArray[2][index]
                    } infinite alternate, fading ${getRandomInt(19)}s infinite alternate`
                }}
                alt=""
              />
            );
          })}
        </div>
        {/* <Button onClick = {toggleFullscreen}>Full Screen</Button> */}
        <a href={`https://www.youtube.com/watch?v=${audioLink}`} target="_blank" rel="noreferrer">Original Audio</a>
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
