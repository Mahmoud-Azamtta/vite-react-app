import React from "react";
import "./Product.css";
export default function Product(props) {
    return (
        <div className="col">
            <div className="item border rounded-4 mt-3 p-3">
                <h2 className="border-bottom pb-2">{ props.title }</h2>
                <p className="m-0">
                    { props.desc }
                </p>
                <p>{ props.price }</p>
            </div>
        </div>
    );
}
