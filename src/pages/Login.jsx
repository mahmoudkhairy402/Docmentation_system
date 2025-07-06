import React, { useState } from "react";
import { FaEnvelope, FaLock, FaPlane, FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //! Handle login logic here
    navigate("/");
    console.log("Login attempt:", formData);
  };

  return (
    <div className="login-container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="login-bg-pattern"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 col-lg-4">
            <div className="login-card card-custom p-4 p-md-5">
              {/* Logo and Title */}
              <div className="text-center mb-4">
                <div className="login-logo mb-3">
                  <FaPlane className="login-icon" />
                </div>
                <h2 className="login-title mb-2">مرحباً بك</h2>
                <p className="login-subtitle text-muted">
                  نظام إدارة العمليات الجوية
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label fw-medium">
                    البريد الإلكتروني
                  </label>
                  <div className="input-group login-input-group">
                    <span className="input-group-text login-input-icon">
                      <FaEnvelope />
                    </span>
                    <input
                      type="email"
                      className="form-control login-input"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="أدخل بريدك الإلكتروني"
                      required
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-medium">كلمة المرور</label>
                  <div className="input-group login-input-group">
                    <span className="input-group-text login-input-icon">
                      <FaLock />
                    </span>
                    <input
                      type="password"
                      className="form-control login-input"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="أدخل كلمة المرور"
                      required
                      dir="ltr"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary-custom btn-custom w-100 py-3 mb-3 login-btn"
                >
                  <FaSignInAlt className="me-2" />
                  تسجيل الدخول
                </button>
              </form>

              {/* Footer */}
              <div className="text-center mt-4">
                <small className="text-muted">
                  © 2024 نظام إدارة العمليات الجوية
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
