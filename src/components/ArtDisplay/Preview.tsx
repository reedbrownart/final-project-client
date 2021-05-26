import React from "react";

const Preview = (props) => {
  const { title, artist, thumbnail, artLink, artistLink} = props;
  return (
    <div className = "artPreview">
      <a className = "artLink" href = {artLink}>{title}</a>
      <a className = "artistLink" href = {artistLink}>{artist}</a>
      <a href = {artLink}><img className = "previewImage" src = {thumbnail} alt = "sorry broken"/></a>
    </div>
  );
}

export default Preview;
