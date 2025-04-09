import requestSignIn from "src/fetch/requestSignin";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (formdata: FormData) => {
    const data = {
      email: formdata.get("email") as string | null,
      password: formdata.get("password") as string | null,
    };

    const isSucceed = await requestSignIn(data);

    if (isSucceed) navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          Welcome Back
        </h1>

        <form action={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email
            </label>
            <input
              type="text"
              name="email"
              required
              className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Password
            </label>
            <input
              type="text"
              name="password"
              required
              className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md"
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?
          {/* <Link
          to="/signup" className="text-purple-600 hover:text-purple-700
          font-semibold"
          >
          Create one
          </Link> */}
        </p>
      </div>
    </div>
  );
};

export default Login;
