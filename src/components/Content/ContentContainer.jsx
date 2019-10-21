import React from "react";
import {connect} from "react-redux";

import Content from './Content';

const mapStateToProps = state => ({
    content: state.app.content
})

const ContentContainer = props => (<Content {...props}/>)
    
export default connect(mapStateToProps, {})(ContentContainer);