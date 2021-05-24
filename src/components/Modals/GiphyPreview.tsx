import React from "react";
import { Button } from "reactstrap";

const GiphyPreview = (props) => {
  const { results, saveGif, gifURL } = props;

  if (gifURL !== "") {
    return(
      <div>You have chosen a gif!</div>
    )
  } else if (results === undefined) {
    return <div>no results yet!</div>;
  } else  {
    return (
      <div>
        {results.map((gif) => {
          return (
            <div>
              <p>{}</p>
              <img src={`https://media3.giphy.com/media/${gif.id}/giphy.gif`} alt="" />
              <Button
                onClick={(e) => {
                  saveGif(e, gif.id);
                }}
              >
                Use this for my Gif
              </Button>
            </div>
          );
        })}
      </div>
    );
  }
};

export default GiphyPreview;
