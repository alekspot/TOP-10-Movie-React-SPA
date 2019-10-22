import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Zoom = (props) => {

    const {img, showZoom} = props
 
    return (
        <> 
            <CSSTransition
                in={showZoom}
                timeout={400}
                classNames="alert" 
                unmountOnExit 
            >
                <div className="row zoom__block col-12 position-fixed justify-content-center"> 
                    <img className="zoom__img col-2 " src={img} alt=""/> 
                </div>
            </CSSTransition>  
        </>
    )
}


export default Zoom