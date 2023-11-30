import React from "react";

export default function Main(props){
    return (
        <div className="row mb-4 p-4">
            <div className="col-lg-6 col-sm-12">
                <img src={props.imageUrl} className="img-fluid mb-3 rounded location-img"/>
            </div>
            <div className="col-lg-6 col-sm-12 m-auto">
                <i className="fa-solid fa-location-dot me-1"></i><span className="location">{props.location}</span>
                <a href={props.googleMapsUrl} target="_blank" className="ms-4 location-view">View on google map</a>    
                <h3 className="mt-2 mb-3 location-title">{props.title}</h3>
                <span className="date">{props.startDate} - {props.endDate}</span>
                <p className="mt-2 location-description">{props.description}</p>
            </div>       
        </div>
    )
}