import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Geçerli bir email girin!")
    .required("Email zorunlu!"),
  password: Yup.string()
    .required("Şifre zorunlu!")
    .min(6, "Şifre en az 6 karakter olmalı!"),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="login-page">
      <div className="container d-flex align-items-center justify-content-center min-vh-100">
        <div
          className="card shadow-sm p-4"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <h2 className="text-center mb-4">Giriş Yap</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email adresi
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Emailinizi girin"
                {...register("email")}
                onBlur={() => trigger("email")}
              />
              {errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </div>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Şifre
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Şifrenizi girin"
                {...register("password")}
                onBlur={() => trigger("password")}
              />
              {errors.password && (
                <span className="text-danger">{errors.password.message}</span>
              )}
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
