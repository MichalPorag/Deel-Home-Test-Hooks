import React from 'react';

function SearchBox({handleChange}) {
    return (
        <form>
            <label>
                <div className={'icon search-icon'} />
                <input type="text"
                       placeholder={"Search..."}
                       onChange={handleChange} />
            </label>
        </form>
    )
}

export default SearchBox;