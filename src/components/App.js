import axios from "axios";
import React from "react";
import SearchInput from "./Searchinput";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (entry) => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=19948963-905d37f7f437b1b7e770fc7ad&q=${entry}&image_type=photo&pretty=true`
    );
    this.setState({ images: response.data.hits });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
