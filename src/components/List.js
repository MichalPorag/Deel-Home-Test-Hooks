import React from 'react';
import inputs from '../inputs'

function List({searchBoxOutput}) {
    const getHighlightedText = (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return parts.map((part, i) =>
                    <span key={i} className={part.toLowerCase() === highlight.toLowerCase() ? "bold" : {}}>
                        { part }
                    </span>);
    };

    const searchText = searchBoxOutput.replace(/\s/g, '').toLowerCase();

    return (
        <ul>
            {
                Array.from(inputs)
                    .filter(input => input.includes(searchText))
                    .map((inputFiltered, i) => <li key={i}>{getHighlightedText(inputFiltered, searchText)}</li>)
            }
        </ul>
    )
}

export default List;