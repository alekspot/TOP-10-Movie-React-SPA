import React from "react";


const Info = props => {
    const {title, overview, img, date} = props;
    
    return (
        <div className="info my-3 row">
            <div className="col-12 col-sm-4 col-lg-2 text-center mb-2">
                <img className="info__img w-100" src={img} alt=""/>
            </div>
            
            <div className="col-12 col-sm-8 col-lg-10">
                <h2>{title}</h2>
                <h4>Описание</h4>
                <p>{overview}</p>
                <p className="text-muted">Дата выхода: {date}</p>
            </div> 
        </div>
    );
}

export default Info;