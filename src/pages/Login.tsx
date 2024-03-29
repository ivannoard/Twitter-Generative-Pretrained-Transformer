import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";

type FormProps = {
  email?: string;
  password?: string;
};

const Login = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState<FormProps>();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  }

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await authService.post("/login", {
        email: fields?.email,
        password: fields?.password,
      });
      if (response.data.status === 200) {
        toast.success("Login success!");
        localStorage.setItem("data_user", JSON.stringify(response.data.data));
        setTimeout(() => {
          navigate("/beranda");
        }, 1000);
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center w-full h-full">
        <div className="bg-white w-11/12 p-3 rounded-md">
          <form onSubmit={(e) => handleLogin(e)}>
            <h4 className="mb-2 text-2xl text-gray-700">
              Welcome back, Human!
            </h4>
            <hr />
            <div className="form-group mt-2">
              <label htmlFor="email" className="text-gray-500 text-sm">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
                autoFocus
                className="auth-input"
                placeholder="youremail@domain.tld"
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="password" className="text-gray-500 text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                className="auth-input"
                placeholder="* * * * * *"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 text-white font-semibold py-2 mt-3"
            >
              Login
            </button>
          </form>
          <p className="text-gray-500 mt-2 text-center">
            Don't have an account?{" "}
            <span
              className="underline text-blue-500 cursor-pointer"
              onClick={() => navigate("/auth/register")}
            >
              Register Here
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
