import React, { Component } from "react";

const ArtPiece = (props) => {
  const { title, artist, thumbnail, artLink, artistLink} = props;
  return (
    <div>
      <h3><a href = {artLink}>{title}</a></h3>
      <h6><a href = {artistLink}>{artist}</a></h6>
      <a href = {artLink}><img src = {thumbnail} /></a>
    </div>
  );
}

export default ArtPiece;
