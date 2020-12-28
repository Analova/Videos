import React from "react";
import { Grid } from "@material-ui/core";

import SearchBar from "./components/SearchBar";
import VideoDetails from "./components/VideDetails";
import VideoList from "./components/VideoList";
import youtube from "./api/youtube";
import "./App.css";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.handleSubmit("bees");
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyBb3BPoWqDM6tLnGmnL6hJVI8DyWpcL6B8",
        q: searchTerm,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8} x>
              <VideoDetails video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
