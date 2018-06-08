/* @flow */

import * as React from "react";
import { createFragmentContainer } from 'react-relay';

import AlbumDetail from '../components/AlbumDetail';

const AlbumContainer = ({ album }) => {
  return (
    <AlbumDetail key={album.title} album={album} />

  );
};

export default createFragmentContainer(
  AlbumContainer,
  graphql`
    fragment AlbumContainer_repo on Album {
    title
    artist
    thumbnail_image
    image
    url 
    }
  `
);
