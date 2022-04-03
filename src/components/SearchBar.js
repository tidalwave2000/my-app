import React from "react";



class SearchBar extends React.Component {
    //call event handler for change in Input
   state = { term: ""};
	//event handler for form onFormSubmit
	//evoke the arrow function to prevent an error and bind this to onSubmit
	onFormSubmit = (event) => {
		event.preventDefault();//prevents a re-render when form is submitted
		this.props.onSubmit(this.state.term); //allowed the child to call the parent
	}


    render() {
        return (
					<div className="ui segment">
						<form onSubmit={this.onFormSubmit}className="ui form">
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