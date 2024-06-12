import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ email, password });
    toast.success("Giriş başarılı!", {
      autoClose: 1500,
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }
  return (
    <div className="login-page">
      <div className="container d-flex align-items-center justify-content-center min-vh-100">
        <div
          className="card shadow-sm p-4"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <h2 className="text-center mb-4">Giriş Yap</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email adresi
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Emailinizi girin"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="text-danger">Email input zorunlu!</span>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Şifre
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Şifrenizi girin"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="text-danger">Password input zorunlu!</span>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-block">
                Giriş Yap
              </button>
            </div>
          </form>
          <div className="text-center mt-3">
            <a href="#">Şifremi Unuttum</a>
          </div>
          <div className="text-center mt-2">
            <a href="#">Hesabınız yok mu? Kayıt olun</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
