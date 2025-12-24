import React, { useState } from "react";
import axios from "axios";
import Nav from "./com/heder";

export default function Insert() {
  const [state, setState] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    dob: "",
    gnd: "",
    cor: "",
    add: "",
  });

  function handleChange(evt) {
    setState({ ...state, [evt.target.name]: evt.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/post/", state)
      .then((res) => alert("Insert Successfully"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Nav />
      <div className="row">
        <div className="col-sm-4"></div>

        <div className="col-sm-4">
          <p className="h2 text-center mt-2" id="para">
            Form
          </p>

          <div className="mb-3 mt-4 card shadow-lg p-4 mx-auto rounded-3 border border-dark">
            <form onSubmit={handleSubmit}>
              <label className="form-label fw-bold" id="head">
                ID
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your ID"
                name="id"
                value={state.id}
                onChange={handleChange}
              />

              <label className="form-label fw-bold" id="head" htmlFor="nameInput">
                Name
              </label>
              <input
                type="text"
                id="nameInput"
                className="form-control"
                placeholder="Enter Your Name"
                name="name"
                value={state.name}
                onChange={handleChange}
              />

              <div className="mb-3">
                <label className="form-label fw-bold" id="head">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold" id="head">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Your Phone Number"
                  name="phone"
                  value={state.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold" id="head" htmlFor="dobInput">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dobInput"
                  className="form-control"
                  name="dob"
                  value={state.dob}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold" id="head">
                  Gender
                </label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gnd"
                    value="male"
                    onChange={handleChange}
                    id="inlineradio1"/>
                   <label className="form-check-label" htmlFor="inlineradio1">
                    Male
                   </label>
                   </div>
                   <div className="form-check form-check-inline">
                   <input
                    className="form-check-input"
                    type="radio"
                    name="gnd"
                    value="female"
                    onChange={handleChange}
                    id="inlineradio2"/>
                   <label className="form-check-label" htmlFor="inlineradio2">
                    Female
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold" id="head">
                  Courses
                </label>
                <select
                  className="form-select"
                  name="cor"
                  value={state.cor}
                  onChange={handleChange}
                >
                  <option value="">Select the Course</option>
                  <option>B.Sc</option>
                  <option>B.A</option>
                  <option>BCA</option>
                  <option>B.Com</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold" id="head" htmlFor="floatingTextarea">
                  Address
                </label>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Enter Your Address Here"
                    id="floatingTextarea"
                    name="add"
                    value={state.add}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="floatingTextarea">Fill the Address</label>
                </div>
              </div>

              <div className="d-grid gap-2 col-4 mx-auto mt-4">
                <button className="btn btn-secondary rounded-pill" type="submit" id="btn">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-sm-4"></div>
      </div>
    </>
  );
}
