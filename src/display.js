import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./com/heder";
import fot from "./com/foot"
import { useNavigate } from "react-router-dom"; 
export default function Display() {
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/post")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const del = (id) => {
    const confirmDelete = window.confirm("Delete user with ID " + id );
    if (confirmDelete) {
      axios
        .delete(`http://localhost:3000/post/` + id)
        .then(() => {
          alert("Deleted successfully!");
          setPosts(posts.filter((p) => p.id !== id));
          if (selectedUser.id === id) setSelectedUser(null);
        })
        .catch((err) => console.error(err));
    }
  };

 
  const [editData, setEditData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    dob: "",
    cor: "",
    add: "",
  });

  const hget = (uid) => {
    axios.get("http://localhost:3000/post/" + uid)
      .then((res) => setEditData(res.data))
      .catch((err) => console.log(err));
  };

  function uhandlechange(evt) {
   
    setEditData({ ...editData, [evt.target.name]: evt.target.value });
  }

  const hsubmit = (e) => {
    e.preventDefault();

    axios.put("http://localhost:3000/post/" + editData.id, editData)
      .then(() => {
        alert("Update successfully");
        return axios.get("http://localhost:3000/post");
      })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Nav />
      <div className="container">
        <h2 className="text-center my-3">User List</h2>
        {posts.map((item) => (
          <div key={item.id} className="card p-3 my-2 shadow-sm">
            <h5>{item.name}</h5>
            <p>ID: {item.id}</p>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            <p>DOB: {item.dob}</p>
            <p>Course: {item.cor}</p>
            <p>Address: {item.add}</p>
            <button
              className="btn btn-info w-25 my-2"
              data-bs-toggle="modal"
              data-bs-target="#editModal"
              onClick={() => hget(item.id)} // Cleaned up the onClick handler
            >
              Edit
            </button>

            <button
              className="btn btn-danger w-25"
              onClick={() => del(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <form onSubmit={(e) => hsubmit(e)}>
        <div
          className="modal fade"
          id="editModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editModalLabel">
                  Edit User
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <>
                  
                  <input
                    type="hidden" 
                    name="id"
                    value={editData.id}
                  />
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="form-control my-2"
                    value={editData.name} 
                    onChange={uhandlechange}
                  />
                  <input
                    type="text"
                    className="form-control my-2"
                    name="email"
                    placeholder="Email"
                    value={editData.email}
                    onChange={uhandlechange}
                  />
                  <input
                    type="text"
                    className="form-control my-2"
                    name="phone"
                    placeholder="Phone"
                    value={editData.phone}
                    onChange={uhandlechange}
                  />
                  <input
                    type="text"
                    className="form-control my-2"
                    name="dob"
                    placeholder="Date of Birth" 
                    value={editData.dob}
                    onChange={uhandlechange}
                  />
                  <input
                    type="text"
                    className="form-control my-2"
                    name="cor"
                    placeholder="Course"
                    value={editData.cor}
                    onChange={uhandlechange}
                  />
                  <textarea
                    className="form-control my-2"
                    name="add"
                    placeholder="Address"
                    value={editData.add}
                    onChange={uhandlechange}
                  />
                </>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit" 
                  className="btn btn-success"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
     <fot></fot>
    </>
  );
}