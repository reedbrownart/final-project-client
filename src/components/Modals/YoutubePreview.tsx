import React from "react";
import {Button} from 'reactstrap';

const YoutubePreview = (props) => {
  const { results, saveYoutube, audio } = props;

  if (audio !== "") {
    return (
      <div>You have chosen an audio source!</div>
    )
  } else if (results === undefined) {
    return <div>no results yet!</div>;
  } else {
    return (
      <div>
        {results.map((video) => {
          return (
            <div>
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
              >
                <p>{video.snippet.title}</p>
              </a>
              <img src={video.snippet.thumbnails.default.url} alt="" />
              <Button onClick = {(e) => {saveYoutube(e, video.id.videoId)}}>Use this for my audio!</Button>
            </div>
          );
        })}
      </div>
    );
  }
};

export default YoutubePreview;
