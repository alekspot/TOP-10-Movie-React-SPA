import React, { Component } from "react";
import {NavLink} from "react-router-dom";

const Card = props => {
    const {title, text1, text2, img, position, id, type} = props;
  
    return (
        <div className="card mb-3">
            
            <div className="row no-gutters">
                <div className="col-sm-12 col-md-1 card-number">{position} <span className="card-hidden">место</span> </div>
                <div className="col-12 col-sm-3 col-lg-2 text-center">
                    <NavLink to={`/${type}/` + id}>
                        <img src={img} className="card-img w-100" alt=""/>
                    </NavLink>
                </div>
                <div className="col-12 col-sm-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text card-text_overflow">{text1 || 'Описание отсутствует'}</p>
                        <p className="card-text"><small className="text-muted">Дата выхода: {text2}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;