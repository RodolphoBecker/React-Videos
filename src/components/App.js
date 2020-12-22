import './styles/App.css';
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {

    componentDidMount(){
        this.onFormInputSubmit('relaxing'); // Essa linha seta um parametro de procura default pra quando o componente é montado primeiramente, no caso, quando o site carrega
    }

    state = {
        videos: [],
        selectedVideo: null
    }

    onFormInputSubmit = async (formInput) =>{
        const response = await youtube.get('/search', {   //youtube é um instância pre-configurada do axios que veio do arquivo da api. O Search é um parametro que será atribuído na url definida na instância do youtube.
            params: {
                q: formInput // Esse parametro q é defenido pela api do youtube, ele é responsavel por fazer uma querie, ou pesquisa, com base no parâmetro informado na função onFormInputSubmit.
            }
        });

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] }); //Setando o state de selectedVideo para o array 0 estamos fazendo com que esse seja video defaul e a lista default da aplicação
    }
    
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <SearchBar onFormSubmit={this.onFormInputSubmit} resultado={this.state.videos.length} />
                    </div>
                    <div className="col-12 col-lg-7">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="col-12 col-lg-5">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

// 1 - Ao clicar no botão procurar a função: formSubmit é chamada.
// 2 - Assim que chamada, ela passa como parametro da função: onFormInputSubmit o valor preenchido no input de texto e armazenado no state: formInput.
// 3 - Então a função onFormInputSubmit é executada e realiza uma busca na API com o valor armazenado no seu parametro.
// 4 - A resposta da busca então é armazenada no state: videos alterando assim seu estado inicial que é uma propriedade com um valor de array vazio.