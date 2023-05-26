import React, { useState, useEffect } from "react";
import SideImage from "images/verification-image.png"

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div className="forgot-flex">

      <div className="all">

        <header className="logo-header">
          <h1>Mealy</h1>
        </header>

        <div className="form-container">
          <div className="form-minScreen">
            <div className="text">
              <h4 className="form-title">Forgot your Password?</h4>
              <p className="form-description">
                Enter the email address associated with your account
              </p>
            </div>
            <div className="input">
              <form onSubmit={handleSubmit}>
                <Input
                  type="email"
                  className="input-width"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                />
                <Button type="submit" className="input-width">
                  Get Code
                </Button>
              </form>
            </div>
            {message && <p className="message">{message}</p>}
          </div>
        </div>

      </div>
      <SideImage className="Simage" />
    </div>
  );
};

export default ForgotPassword;