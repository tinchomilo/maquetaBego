import React from 'react'

export const Tasks = ( { orders } ) => {

    return (
        <div className="tasks__container">
            <div className="tasks__main" >
                <ul className="tasks__main-opions">
                    <li>All</li>
                    <li>In Progress</li>
                    <li>Started</li>
                    <li>Completed</li>
                </ul>
            </div>
            <h4 className="tasks__container-upcoming">Upcoming Tasks <span>{orders?.length}</span></h4>
            <div className="tasks__container-upcoming-tasks">
                {
                    orders.map( (elem) => (
                        <div key={elem.id}
                             className="tasks__upcoming-graph">
                                <h5>Order {elem.order}</h5>
                                <span>{elem.name}</span>
                                <div className="tasks__upcoming-progress">
                                    <span>Progress</span>
                                    <span>20%</span>
                                </div>
                                <div className="tasks__progress">
                                    <span className="tasks__percent"></span>
                                    <div className="tasks__bar"></div>
                                </div>
                                <p className="tasks__upcoming-graph-dates">{elem.date}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
