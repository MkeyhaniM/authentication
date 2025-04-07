import type { Route } from "./+types/home";

import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center justify-center p-4 space-y-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          Welcome Back!
        </span>
      </h1>

      <p className="text-gray-600 text-lg md:text-xl text-center max-w-2xl leading-relaxed">
        Join our community of passionate creators and explorers.{" "}
        <br className="hidden md:block" />
        Sign in to continue your journey or register to start a new adventure!
      </p>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <NavLink
          to={"/login"}
          end
          className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
        >
          Sign In
        </NavLink>

        <NavLink
          to="/signin"
          end
          className="px-8 py-4 rounded-xl font-bold text-purple-600 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 border-2 border-purple-500 hover:text-purple-700 shadow-md hover:shadow-lg text-lg"
        >
          Create Account
        </NavLink>
      </div>
    </div>
  );
}
