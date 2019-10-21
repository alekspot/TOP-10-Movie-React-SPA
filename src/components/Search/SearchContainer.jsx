import React from "react";
import {connect} from "react-redux";
import {getContent} from '../../redux/default-reducers';
import Search from './Search';

const SearchContainer = props => {
    
    return <Search {...props}/>
}


export default connect(null, {getContent})(SearchContainer);