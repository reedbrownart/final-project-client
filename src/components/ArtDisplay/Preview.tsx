import React from "react";

const Preview = (props) => {
  const { title, artist, thumbnail, artLink, artistLink} = props;
  return (
    <div className = "artPreview">
      <h3><a href = {artLink}>{title}</a></h3>
      <h6><a href = {artistLink}>{artist}</a></h6>
      <a href = {artLink}><img className = "previewImage" src = {thumbnail} alt = ""/></a>
    </div>
  );
}

export default Preview;
