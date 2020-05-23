import React, {useState} from 'react';
import './scss/App.scss';
import SearchBox from './components/SearchBox';
import List from './components/List';

function App () {
    const [searchText, setSearchText] = useState("");

    const updateSearchText = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <div className="App">
            <div className={'container menu-container'}>
                <SearchBox handleChange={(e) => updateSearchText(e)}/>
                <List searchBoxOutput={searchText}/>
            </div>
        </div>
    );
}

export default App;
