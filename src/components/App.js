import React from "react";

import unsplash from "../Api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = { images: [] };
    //onSearchSubmit called 
    onSearchSubmit= async(term)=> {
        //wait for request to complete from API
        const response = await unsplash.get("/search/photos", {
            params: { query: term },
            
        });
            
        this.setState({ images: response.data.results });
       
    }

    render() {
    return (
    <div className="ui container" 
        style={{ marginTop: "10px" }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            {/*  show how many images were fetched and the assined it to Found */}
            Found: {this.state.images.length} images
        </div>
        );
    }
}

export default App;
