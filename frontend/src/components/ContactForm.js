import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactForm = ({ selectedContact, refreshContacts, clearSelection }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tags: "",
  });

  useEffect(() => {
    if (selectedContact) {
      setFormData(selectedContact);
    }
  }, [selectedContact]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedContact) {
        await axios.post("http://localhost:8080/api/contacts/update", formData);
      } else {
        await axios.post("http://localhost:8080/api/contacts/save", formData);
      }
      refreshContacts();
      clearSelection();
      setFormData({ name: "", email: "", phone: "", tags: "" });
    } catch (error) {
      console.error("Error saving contact:", error);
    }
  };

  return (
    <div className="contact-form">
      <h2>{selectedContact ? "Edit Contact" : "Add Contact"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags:</label>
          <input
            id="tags"
            type="text"
            name="tags"
            placeholder="Tags (comma-separated)"
            value={formData.tags}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">
          {selectedContact ? "Update Contact" : "Add Contact"}
        </button>
        {selectedContact && (
          <button type="button" className="cancel-button" onClick={clearSelection}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
