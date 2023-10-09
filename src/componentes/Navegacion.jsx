import React from "react";
// mi app te da la opcion de la buscar por invitados teda las avitaciones iguales o mas
export default function Navegacion(props) {
  return (
    <>
      <div>
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid contenedor2">
            <a class="navbar-brand " id="nav1">
              Navbar
            </a>
            <form class="d-flex " role="search" onSubmit={props.fn}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="gueses"
                aria-label="Search"
              />
              <button class="btn btn-danger" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}
