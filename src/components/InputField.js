import React from 'react';

const InputField = ({ label, id, type, value, onChange, error }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}:</label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className={error ? 'error' : ''}
    />
    {error && <p className="error-message">{error}</p>}
  </div>
);

export default InputField;
