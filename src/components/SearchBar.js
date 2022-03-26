import React from "react";



class SearchBar extends React.Component {
    //call event handler for change in Input
   state = { term: ""};


    render() {
        return (
					<div className="ui segment">
						<form className="ui form">
							<div className="field">
								<label> Image Search </label>
								{/* onChange is a special property that will record if the User
								changes the text in a input */}
								<input
									type="text"
									value={this.state.term}
									onChange={(e) => this.setState({ term: e.target.value })}
								/>
							</div>
						</form>
					</div>
				);  
        }
}

export default SearchBar;