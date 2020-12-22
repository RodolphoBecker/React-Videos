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
            <div className="searchBar ui segment mt-5 mb-5">
                <form onSubmit={this.formSubmit} id="searchForm" className="ui form">
                    <label>Ferramenta de procura de Vídeos</label>
                    <div className="d-flex justify-content-between">
						<input 
							id="inputText" 
							type="text" 
							placeholder="Digite o título de um vídeo"
							value={this.state.formInput}
							onChange={this.inputChange}
							></input>
						<input 
							id="inputSubmit" 
							type="submit" 
							value="Procurar"
							onClick={this.formSubmit}
						></input>
                    </div>
                </form>

				{this.props.resultado ? 
					<div className="resultado">
						<p>Foram encontrados {this.props.resultado} videos</p>
					</div> 
				: ''}
            </div>
        )
    }
}

export default SearchBar;