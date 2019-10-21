import React from "react";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    isLoading: state.app.isLoading
});


export const withLoading = (Component) => {

    const LoadingComponent = (props) => {
        if (props.isLoading) return <h1>Загрузка...</h1>

        return <Component {...props}/>
    }

    let ConnectedLoadingComponent = connect(mapStateToProps)(LoadingComponent)

    return ConnectedLoadingComponent;

}
