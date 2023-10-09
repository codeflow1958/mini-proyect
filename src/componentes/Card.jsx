import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="contimg">
        <img src={props.link} />
      </div>

      <div className="contenidoTxt">
        <div className="arriba">
          <div className="super"> SUPER HOST</div>

          <div className="type">{props.type}.</div>
          <div className="camas " id="b">
            {props.camas} beds
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
