/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const OTPVerification = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-900">
      <div className="w-full flex flex-col justify-center items-center px-10">
        <h2 className="text-white text-3xl font-bold mb-2">OTP Verification</h2>
        <p className="text-gray-400 mb-6">Enter the 6-digit code sent to your email</p>

        <form onSubmit={handleSubmit(() => { })} className="w-full max-w-md flex justify-center gap-2 mb-3">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              {...register(`otp${i}`, { required: true })}
              className="w-12 h-12 text-center text-white bg-gray-800 border border-gray-700 rounded"
            />
          ))}
        </form>
        {errors.otp && <span className="text-red-600">All fields are required</span>}

        <button type="submit" className="w-full max-w-sm bg-green-600 hover:bg-green-700 py-3 text-white font-bold rounded">
          Verify OTP
        </button>

        <p className="text-red-500 mt-2 cursor-pointer">Didn't receive the code? Resend</p>

        <p className="text-gray-400 mt-5">
          Remember your password? <Link to="/login" className="text-green-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default OTPVerification;
