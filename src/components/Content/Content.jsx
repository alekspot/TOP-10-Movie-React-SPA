import React from "react";
import img from '../../assets/noImg.png'
import Card from '../Card/Card';
import {withLoading} from '../../hoc/withLoading';

const Content = props => {
    const {content} = props
   
    return (
       <main className="main">
           
            {content.map( (item, index) => 
                <Card key={index}
                    type = {item.type}
                    position={index + 1}
                    id={item.id}
                    title = {item.title || item.name}
                    text1 = {item.overview}
                    text2 = {item.release_date || item.first_air_date}
                    img = {item.poster_path ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.poster_path}`: img}
                />
            )}
            
       </main>
    );
}

export default withLoading(Content);