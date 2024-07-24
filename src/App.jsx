import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      {/* Navigation */}
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              SEPL
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    TEST CHANGES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Classroom
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* Hero */}
      <div className="App container">
        <h1> This is the latest change </h1>
        <h1 className="my-4">Web development Training</h1>

        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <img
                src="/profile.jpeg"
                className="card-img-top rounded-circle img-thumbnail "
                alt="profile "
              ></img>
              <div className="card-body">
                <h5 className="card-title">Shyam</h5>
                <p className="card-text">Web Development trainer/Developer</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            CEO and Founder of Springevening Private Limited, Bagalkot I am a
            technology startup founder with a focus on creating hyper-local
            solutions that make a real impact in communities. With a background
            in software development and technology, particularly in the media
            industry, I have a deep understanding of the latest trends and
            opportunities in the field. I have a proven track record of
            successfully leading a team and bring a wealth of experience in
            product development, marketing, and advertising.
          </div>
        </div>
        {/* <ItemList items={items} /> */}
      </div>
      <h1 className="my-4">Classroom</h1>
      {/* Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-3">
            {" "}
            <div className="card">
              <img
                src="/css1.jpg"
                className="card-img-top rounded-circle img-thumbnail "
                alt="profile "
              ></img>
              <div className="card-body">
                <h5 className="card-title">Shyam</h5>
                <p className="card-text">Web Development trainer/Developer</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            {" "}
            <div className="card">
              <img
                src="/css2.jpg"
                className="card-img-top rounded-circle img-thumbnail "
                alt="profile "
              ></img>
              <div className="card-body">
                <h5 className="card-title">Shyam</h5>
                <p className="card-text">Web Development trainer/Developer</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            {" "}
            <div className="card">
              <img
                src="/css3.jpg"
                className="card-img-top rounded-circle img-thumbnail "
                alt="profile "
              ></img>
              <div className="card-body">
                <h5 className="card-title">Shyam</h5>
                <p className="card-text">Web Development trainer/Developer</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            {" "}
            <div className="card">
              <img
                src="/css4.jpg"
                className="card-img-top rounded-circle img-thumbnail "
                alt="profile "
              ></img>
              <div className="card-body">
                <h5 className="card-title">Shyam</h5>
                <p className="card-text">Web Development trainer/Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-3">
            {" "}
            <div className="card">
              <img
                src="/css5.jpg"
                className="card-img-top rounded-circle img-thumbnail "
                alt="profile "
              ></img>
              <div className="card-body">
                <h5 className="card-title">Shyam</h5>
                <p className="card-text">Web Development trainer/Developer</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            {" "}
            <div className="card">
              <img
                src="/css6.jpg"
                className="card-img-top rounded-circle img-thumbnail "
                alt="profile "
              ></img>
              <div className="card-body">
                <h5 className="card-title">Shyam</h5>
                <p className="card-text">Web Development trainer/Developer</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            {" "}
            <div className="card">
              <img
                src="/css7.jpg"
                className="card-img-top rounded-circle img-thumbnail "
                alt="profile "
              ></img>
              <div className="card-body">
                <h5 className="card-title">Shyam</h5>
                <p className="card-text">Web Development trainer/Developer</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            {" "}
            <div className="card">
              <img
                src="/css8.jpg"
                className="card-img-top rounded-circle img-thumbnail "
                alt="profile "
              ></img>
              <div className="card-body">
                <h5 className="card-title">Shyam</h5>
                <p className="card-text">Web Development trainer/Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-3">
            {" "}
            <div className="card">
              <img
                src="/css9.jpg"
                className="card-img-top rounded-circle img-thumbnail "
                alt="profile "
              ></img>
              <div className="card-body">
                <h5 className="card-title">Shyam</h5>
                <p className="card-text">Web Development trainer/Developer</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            {" "}
            <div className="card">
              <img
                src="/css10.jpg"
                className="card-img-top rounded-circle img-thumbnail "
                alt="profile "
              ></img>
              <div className="card-body">
                <h5 className="card-title">Shyam</h5>
                <p className="card-text">Web Development trainer/Developer</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            {" "}
            <div className="card">
              <img
                src="/css11.jpg"
                className="card-img-top rounded-circle img-thumbnail "
                alt="profile "
              ></img>
              <div className="card-body">
                <h5 className="card-title">Shyam</h5>
                <p className="card-text">Web Development trainer/Developer</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            {" "}
            <div className="card">
              <img
                src="/css12.jpg"
                className="card-img-top rounded-circle img-thumbnail "
                alt="profile "
              ></img>
              <div className="card-body">
                <h5 className="card-title">Shyam</h5>
                <p className="card-text">Web Development trainer/Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
