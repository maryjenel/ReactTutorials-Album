/* @flow */

import * as React from "react";
import { createPaginationContainer } from "react-relay";
import AlbumList from "../components/AlbumList";
import AlbumContainer from "./AlbumContainer";


const AlbumListContainer = ({ albums }) => {
  return <AlbumList albums={albums.edges.map(edge => edge.node)} />;
};


export default createFragmentContainer(
  AlbumListContainer,
  graphql`
    fragment AlbumListContainer_repos on AlbumsConnection {
      edges {
        node {
          ...AlbumContainer_repo
        }
      }
    }
  `
);
