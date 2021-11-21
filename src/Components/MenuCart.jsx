import React from "react";
import "./style.css"

const MenuCart = ({menuCart}) => {
    return (<>
    <section className="main-card--cointainer">
    {menuCart.map((props) => {

    return (<> <div className="card-container" key={props.id}>
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">{props.id}</span>
                    <span className="card-author subtle">{props.category}</span>
                    <h2 className="card-title">{props.name}</h2>
                    <span className="card-description subtle">{props.description}</span>
                    <div className="card-read">{props.price}</div>
                </div>
            <img src={props.image} alt="images" className="card-media" />
            <span className="card-tag subtle">Order now</span>
            </div>

        </div>
        </>);
    })}
    </section>
        </>
    )
}

export default MenuCart
