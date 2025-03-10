import React from "react";
import { Link } from "react-router-dom";
import { Label, TextInput } from "flowbite-react";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 p-8 bg-white rounded-3xl shadow-2xl">
        {/* Left side */}
        <div className="flex-1 flex flex-col justify-center">
          <Link
            to="/"
            className="font-bold dark:text-gray-900 flex items-center space-x-2 text-5xl mb-8"
          >
            <span className="px-3 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-white">
              Shashank's
            </span>
            <span className="text-gray-900 font-extrabold">Blog</span>
          </Link>
          <p className="text-gray-600 text-xl leading-relaxed">
            Create an account and start sharing your thoughts with the world.
            Connect with like-minded people, explore amazing content, and make
            your voice heard.
          </p>
        </div>

        {/* Right side */}
        <div className="flex-1 flex flex-col justify-center">
          <form className="flex flex-col gap-6">
            <div>
              <Label
                value="Your username"
                className="text-lg font-semibold text-gray-700 mb-2"
              />
              <TextInput
                type="text"
                placeholder="Enter your username"
                id="username"
                className="w-full text-lg"
              />
            </div>
            <div>
              <Label
                value="Your email"
                className="text-lg font-semibold text-gray-700 mb-2"
              />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                className="w-full text-lg"
              />
            </div>
            <div>
              <Label
                value="Your password"
                className="text-lg font-semibold text-gray-700 mb-2"
              />
              <TextInput
                type="password"
                placeholder="Enter your password"
                id="password"
                className="w-full text-lg"
              />
            </div>
            <button
              type="submit"
              className="gradient-button w-full text-lg font-semibold py-3 mt-4 rounded-lg"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-6 text-center">
            <span className="text-gray-600 text-lg">
              Have an account?
            </span>
            <Link
              to="/sign-in"
              className="ml-2 text-indigo-600 hover:text-indigo-500 font-semibold text-lg"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}