import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";

type FormProps = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  username?: string;
};

const Register = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState<FormProps>();
  const [isDisable, setIsDisable] = useState(true);

  // function checkPassword(fields: FormProps) {
  //   if (fields.password !== fields.confirmPassword) {
  //     return toast.error("Confirm password and password is not match!");
  //   }
  // }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  }

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    // do verify confirm password is password
    e.preventDefault();
    console.log(fields);
    if (fields?.password !== fields?.confirmPassword) {
      return toast.error("Confirm password and password is not match!");
    }
    const registerData = {
      username: fields?.username,
      email: fields?.email,
      password: fields?.password,
    };

    try {
      await addDoc(collection(db, "users"), registerData)
        .then(() => {
          toast.success("Register success!");
          navigate("/auth/login");
          return;
        })
        .catch(() => {
          toast.error("Register failed!");
        });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (
      fields?.username !== "" &&
      fields?.email !== "" &&
      fields?.password !== "" &&
      fields?.confirmPassword
    )
      return setIsDisable(false);
  }, [fields]);

  return (
    <>
      <div className="flex justify-center items-center w-full h-full">
        <div className="bg-white w-11/12 p-3 rounded-md">
          <h4 className="mb-2 text-2xl text-gray-700">Welcome back, Human!</h4>
          <hr />
          <form onSubmit={handleRegister}>
            <div className="form-group mt-2">
              <label htmlFor="username" className="text-gray-500 text-sm">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                autoFocus
                onChange={handleChange}
                className="auth-input"
                placeholder="youremail@domain.tld"
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="email" className="text-gray-500 text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
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
            <div className="form-group mt-2">
              <label
                htmlFor="confirmPassword"
                className="text-gray-500 text-sm"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="auth-input"
                onChange={handleChange}
                placeholder="* * * * * *"
              />
            </div>
            <button
              type="submit"
              disabled={isDisable}
              className={`w-full rounded-lg ${
                isDisable ? "bg-blue-300" : "bg-blue-500"
              } text-white font-semibold py-2 mt-3`}
            >
              Register
            </button>
          </form>
          <p className="text-gray-500 mt-2 text-center">
            Have an account?{" "}
            <span
              className="underline text-blue-500 cursor-pointer"
              onClick={() => navigate("/auth/login")}
            >
              Login Here
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
