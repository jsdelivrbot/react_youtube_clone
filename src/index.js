import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAykW_eQUBaz5Bf8FBf9-tsI4q4rjEZLmc';


// const App = () => <div><SearchBar /></div>;
class App extends Component {
    constructor(props) {
        super(props);

        this.state={videos: []};

        YTSearch({key: API_KEY, term: 'Eason Chan'}, (videos)=>
                this.setState({videos})); //same as this.setState({videos:videos})
    };

    render = () => {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[2]}/>
                <VideoList videos={this.state.videos} />
            </div>
        )
    };

}

ReactDOM.render(<App />, document.querySelector('.container'));
