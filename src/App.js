import React from "react";
import { Grid } from "@material-ui/core";

import SearchBar from "./components/SearchBar";
import VideoDetails from "./components/VideDetails";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Grid justify="center" container spacing={15}>
        <Grid item xs={12}>
          <Grid constainer spacing={16}>
            <Grid item xs={12}>
              <SearchBar />
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
