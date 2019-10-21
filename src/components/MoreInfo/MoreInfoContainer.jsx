import React, {useEffect} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import MoreInfo from './MoreInfo';
import {getImages} from '../../redux/default-reducers';

const MoreInfoContainer = props => {
    const {content, images, getImages} = props;
    const contentId = props.match.params.contentId;

    const currentContent = content.find(item => item.id === parseInt(contentId));

    useEffect(() => {
        getImages(contentId, currentContent.type);
    },[content]);
    
    return <MoreInfo content = {currentContent} images={images}/>
}

const mapStateTopProps = state => ({
    content: state.app.content,
    images: state.app.images,
})

export default compose(
    connect(mapStateTopProps,{getImages}),
    withRouter,  
)(MoreInfoContainer)