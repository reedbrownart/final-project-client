import React from "react";
import {Button} from 'reactstrap';

const YoutubePreview = (props) => {
  const { results, saveYoutube, audio } = props;

  console.log(results);

  if (audio !== "") {
    return (
      <div>You have chosen an audio source!</div>
    )
  } else if (results.length === 0) {
    return (<div>You have not chosen an audio source yet</div>)
  } else {
    return (
      <div>
        {results.map((video) => {
          return (
            <div>
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noreferrer"
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
