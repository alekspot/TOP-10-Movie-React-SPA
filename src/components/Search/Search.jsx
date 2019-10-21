import React, { useState, useEffect } from "react";

const Search = props => {
    const {getContent} = props;

    const MOVIE = 'movie';
    const TV = 'tv';
    const [type, setType] = useState(MOVIE);
    const [year, setYear] = useState(2019);

    useEffect(() => {
        getContent(year, type);
    });
    
    const onChangeYear = (e) => {
        setYear(e.target.value);
        
    };
    const onChangeType = (e) => {
        setType(e.target.value);
    };

    return (   
        <div className="search row mx-0 my-3 justify-content-between justify-content-sm-start">

            <select value={year} onChange={onChangeYear} className="col-6 col-sm-3 col-md-2 custom-select search__select">
                {(new Array(100)).fill(1).map((a,i)=><option key={i} value={2018-i+1}>{2018-i+1}</option>)}
            </select>

            <select value={type}  onChange={onChangeType} className="col-6 col-sm-3 col-md-2 custom-select search__select ml-sm-4">
                <option value={MOVIE}>Фильмы</option>
                <option value={TV}>Сериалы</option>
            </select>
            
            <h2 className="search__title col-12 my-2">ТОП-10 худших {type === MOVIE ? 'фильмов' : 'сериалов'} {year} года</h2>
        </div>
    );
}

export default Search;