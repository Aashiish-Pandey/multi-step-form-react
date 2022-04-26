import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <div>
        <label>First Name*</label>
      <input
        type="text"
        required
        placeholder="Input Your First Name"
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      </div>
      <div>
      <label>Last Name*</label>
      <input
        type="text"
        placeholder="Input your Last Name"
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      </div>
      <div>
      <label>Email*</label>
      <input
        type="text"
        placeholder="Input Your Email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      </div>
      <div>
      <label>Phone Number*</label>
      <input
        type="text"
        placeholder="Input Your Phone Number"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      </div>
      <div>
      <label>Password*</label>
      <input
        type="text"
        placeholder="Create Password"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      </div>
      <div>
      <label>Confirm Password*</label>
      <input
        type="text"
        placeholder="Confirm Your Password"
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
      </div>
    </div>
  );
}

export default SignUpInfo;
