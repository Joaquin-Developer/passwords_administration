import React from "react";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Passw-Admin</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#">Inicio<span class="visually-hidden">(current)</span></a>
            </li>
          </ul>
          <form class="d-flex">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Sign In</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sign Un</a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
