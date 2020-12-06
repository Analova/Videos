import React from "react";
import { Grid } from "@material-ui/core";

import SearchBar from "./components/SearchBar";
import VideoDetails from "./components/VideDetails";
import youtube from "./api/youtube";
import "./App.css";

class App extends React.Component {
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: ["API_KEY"],
        q: searchTerm,
      },
    });
    console.log(response.data.items);
  };

  render() {
    return (
      <Grid justify="center" container spacing={15}>
        <Grid item xs={12}>
          <Grid constainer spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails />
            </Grid>
            <Grid item xs={4}>
              {/* {Video List} */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
