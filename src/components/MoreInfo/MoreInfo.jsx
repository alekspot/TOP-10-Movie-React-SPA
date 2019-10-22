import React from "react";
import img from '../../assets/noImg.png'
import Info from './Info';
import Gallery from '../Gallery/Gallery';

import {withLoading} from '../../hoc/withLoading';


const MoreInfo = props => {
    const {content, images} = props;
    
    return (
        <main>
            <Info title={content.title || content.original_name || 'Без названия'}
                  overview={content.overview || 'Описание отсутствует'}
                  img={images[0] || img}
                  date={content.release_date || content.first_air_date}
            />
            <h4>Постеры к { content.type==='movie'? 'фильму' : 'сериалу'} {images[0] ? '' : 'отстутсвуют'}</h4>
            <Gallery images = {images}/>
        </main>
    );
}

export default withLoading(MoreInfo);
    
    
 
    
