import React from "react";

export default function Navegacion(props) {
  return (
    <>
      <div>
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid contenedor2">
            <a class="navbar-brand">Navbar</a>
            <form class="d-flex " role="search" onSubmit={props.fn}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="gueses"
                aria-label="Search"
              />
              <button class="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}
