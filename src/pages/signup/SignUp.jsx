
import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/authProvider";

const SignUp = () => {
  const { signup } = useContext(AuthContext)

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password"); // Get the value of the password field

  const validatePasswordMatch = (value, password) => {
    return value === password || "Passwords do not match";
  };

  const onSubmit = (data) => {
    signup(data.email, data.password)
  };

  return (
    <div className="mt-16">
      <h2 className="font-Montserrat text-center font-bold text-2xl text-[#000000]">
        Create an account
      </h2>
      <div className="hero-content  text-center">
        <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-md border">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-Montserrat font-medium text-base text-black">
                  First name
                </span>
              </label>
              <input
                {...register("firstName", { required: true })}
                type="text"
                placeholder="First Name"
                className="input input-bordered font-Montserrat font-medium text-base text-black"
              />
              {errors.firstName && (
                <span className="font-inter font-medium text-xl text-red-600">
                  First Name is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-Montserrat font-medium text-base text-black">
                  Last Name
                </span>
              </label>
              <input
                {...register("lastName", { required: true })}
                type="text"
                placeholder="Last Name"
                className="input input-bordered font-Montserrat font-medium text-base text-black"
              />
              {errors.lastName && (
                <span className="font-inter font-medium text-xl text-red-600">
                  Last Name is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-Montserrat font-medium text-base text-black">
                  User Name or email
                </span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="user name"
                className="input input-bordered font-Montserrat font-medium text-base text-black"
              />
              {errors.email && (
                <span className="font-inter font-medium text-xl text-red-600">
                  Email is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-Montserrat font-medium text-base text-black">
                  Password
                </span>
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="password"
                className="input input-bordered font-Montserrat font-medium text-base text-black"
              />
              {errors.password && (
                <span className="font-inter font-medium text-xl text-red-600">
                  Password is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-Montserrat font-medium text-base text-black">
                  Confirm password
                </span>
              </label>
              <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                rules={{
                  required: "Confirm password is required",
                  validate: (value) => validatePasswordMatch(value, password),
                }}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      type="password"
                      placeholder="confirm password"
                      className="input input-bordered font-Montserrat font-medium text-base text-black"
                    />
                    {errors.confirmPassword && (
                      <span className="font-inter font-medium text-xl text-red-600">
                        {errors.confirmPassword.message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
            <button
              type="submit"
              disabled={!password}
              className={`font-poppins font-semibold text-sm py-2 px-10 rounded-md text-[#FFF] mt-6 mb-4 ${!password ? "bg-gray-300 cursor-not-allowed" : "bg-[#F63E7B]"
                }`}
            >
              Create an account
            </button>
            <p className="font-Montserrat font-medium text-base text-[#000000]">
              Already have an account? <Link to="/login"><span className="text-[#F63E7B]">Login</span></Link>
            </p>
          </div>
          <div className="divider text-center">OR</div>
          <p className="flex gap-4 border rounded-3xl p-2 justify-evenly mx-auto font-Montserrat font-medium text-base text-black items-center max-w-sm">
            <BsGoogle /> Continue with Google
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
