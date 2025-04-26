import React, { useState, useEffect } from "react";
import "../styles/UserPage.css";

const UserPage = ({ users, setUsers }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: "",
    image: null,
    subscription: "basic",
  });

  const [searchQuery, setSearchQuery] = useState("");

  // Load users from localStorage when component mounts
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // Save users to localStorage whenever users change
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserData({ ...userData, image: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.name || !userData.email || !userData.age) {
      alert("Please fill in all fields!");
      return;
    }

    if (userData.id) {
      // Update existing user
      setUsers(users.map((user) => (user.id === userData.id ? userData : user)));
    } else {
      // Add new user
      setUsers([...users, { ...userData, id: Date.now() }]);
    }

    setUserData({ name: "", email: "", age: "", image: null, subscription: "basic" });
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setUserData(userToEdit);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="user-page">
      {/* Sidebar Profile Section */}
      <div className="sidebar sidebar-up">
        <div className="profile-card">
          <div className="profile-image-container">
            <img
              src={userData.image || "https://via.placeholder.com/150"}
              alt="User"
              className="profile-image"
            />
            <label htmlFor="imageUpload" className="upload-btn">📷</label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />
          </div>
          <h3>{userData.name || "Your Name"}</h3>
          <p>{userData.email || "your.email@example.com"}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="content">
        <h2>Manage Users</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />

        {/* User List */}
        <div className="user-list">
          {filteredUsers.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.image} alt="User" className="user-card-img" />
              <div className="user-info">
                <h4>{user.name}</h4>
                <p>{user.email}</p>
                <p>Age: {user.age}</p>
                <p>Subscription: {user.subscription}</p>
              </div>
              <div className="user-actions">
                <button onClick={() => handleEdit(user.id)} className="edit-btn">Edit</button>
                <button onClick={() => handleDelete(user.id)} className="delete-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>

        {/* Form for Adding Users */}
        <form onSubmit={handleSubmit} className="user-form">
          <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Name" required />
          <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" required />
          <input type="number" name="age" value={userData.age} onChange={handleChange} placeholder="Age" required />
          <select name="subscription" value={userData.subscription} onChange={handleChange}>
            <option value="basic">Basic</option>
            <option value="regular">Regular</option>
            <option value="premium">Premium</option>
          </select>
          <button type="submit">{userData.id ? "Update" : "Save"}</button>
        </form>
      </div>
    </div>
  );
};

export default UserPage;