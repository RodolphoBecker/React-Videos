import './styles/SearchBar.css'
import React, { Component } from 'react';

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			formInput: '',
		}
	}

	inputChange = (event) => {
		this.setState({ formInput: event.target.value });
	}

	formSubmit = (event) => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.formInput)
	}

    render(){
        return(
            <div className="search-bar ui segment mt-5 mb-5 glassmorphism-default-shadow">
                <form onSubmit={this.formSubmit} id="searchForm" className="ui form">
                    <label className="text-yellow mb-5">VIDEOS SEARCH TOOL</label>
                    <div className="d-flex justify-content-between">
						<input 
							id="inputText" 
							type="text" 
							placeholder="Search for a Topic"
							value={this.state.formInput}
							onChange={this.inputChange}
							></input>
						<input 
							id="inputSubmit" 
							type="submit" 
							value="Search"
							onClick={this.formSubmit}
						></input>
                    </div>
                </form>

				{this.props.resultado ? 
					<div className="resultado">
						<p className="text-yellow">{this.props.resultado} videos were found</p>
					</div> 
				: ''}
            </div>
        )
    }
}

export default SearchBar;