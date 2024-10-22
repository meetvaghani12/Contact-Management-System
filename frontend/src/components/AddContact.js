import React, { useState } from "react";
import { saveContact } from "../api";

const AddContact = ({ reloadContacts }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveContact({ name, email, phone });
      reloadContacts();
      setName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("Error saving contact:", error);
    }
  };

  return (
    <div className="add-contact">
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
