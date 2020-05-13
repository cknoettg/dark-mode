import React from "react";
//STRECTH: Events component

const Events = ({ eventData }) => {
    console.log(eventData);
    return (
        <div className="events">
            {eventData.map(ev => (
                <div>
                    <h2>Events</h2>
                    <h2>{ev.type}</h2> 
                </div>
            ))}           
        </div>
    )
}
export default Events;