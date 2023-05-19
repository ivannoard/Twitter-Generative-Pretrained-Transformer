import { AuthLayout } from "../components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <AuthLayout>
        <div className="flex justify-center items-center w-full h-full">
          <div className="bg-white w-11/12 p-3 rounded-md">
            <form>
              <h4 className="mb-2 text-2xl text-gray-700">
                Welcome back, Human!
              </h4>
              <hr />
              <div className="form-group mt-2">
                <label htmlFor="email" className="text-gray-500">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoFocus
                  className="auth-input"
                  placeholder="youremail@domain.tld"
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="password" className="text-gray-500">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="auth-input"
                  placeholder="* * * * * *"
                />
              </div>
              <button className="w-full rounded-lg bg-blue-500 text-white font-semibold py-2 mt-3">
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
      </AuthLayout>
    </>
  );
};

export default Login;
