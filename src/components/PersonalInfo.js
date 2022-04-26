import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <div>GENERAL INFORMATION</div>
      <label>Brand Name*</label>
      <input
        type="text"
        placeholder="Input Your Brand Name"
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <label>Brand Type*</label>
      <input
        type="text"
        placeholder="Select Brand Type"
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <label>Street Address*</label>
      <input
        type="text"
        placeholder="Input Your Street Address"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <label>City*</label>
      <input
        type="text"
        placeholder="Input City"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <label>Zip Code*</label>
      <input
        type="text"
        placeholder="Input Zip code"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <label>Tax ID Number*</label>
      <input
        type="text"
        placeholder="Input Tax Id Number"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
    </div>
  );
}

export default PersonalInfo;
