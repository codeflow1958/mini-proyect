import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="contimg">
        <img src={props.link} />
      </div>

      <div className="contenidoTxt">
        <div className="arriba">
          {props.super == true ? <div className="super">Superhost </div> : ""}

          <div className="type">{props.type}.</div>
          <div className="camas">
            <span> {props.camas == null ? "" : `${props.camas} beds`} </span>
          </div>

          <div className="rtr">
            <span className="material-symbols-outlined estrella">star</span>
            {props.rti}
          </div>
        </div>

        <div className="textd">
          <h5>
            <strong>{props.title}</strong>
          </h5>
        </div>
      </div>
    </>
  );
}
