import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main";
import Video from "./Video";
import Search from "./Search";
import Searchvideo from "./Searchvideo";
import Games from "./Games";
import Music from "./Music";
import Sports from "./Sports";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import Navbar from "./Navbar";
import Navbar1 from "./Navbar1";
import { Link } from "react-router-dom";
import DarkProvider from "./Context/DarkProvider";
const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <SignedOut>
            <Navbar1 />
          </SignedOut>
          <SignedIn>
            <Navbar />
          </SignedIn>
          <Main />
        </div>
      ),
    },
    {
      path: "/video/:videoId",
      element: (
        <div>
          <SignedOut>
            <Link to="/" className="absolute top-4 left-4 text-white text-lg">
              Back
            </Link>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-red-500 text-white p-8 text-center">
              <h1 className="text-3xl mb-6">Sign in please</h1>
              <SignInButton
                className="bg-red-500 text-white py-2 px-4 rounded-full text-lg hover:bg-red-600 cursor-pointer"
                buttonText="Sign In"
              />
            </div>
          </SignedOut>
          <SignedIn>
            <Video />
          </SignedIn>
        </div>
      ),
    },
    {
      path: "/search",
      element: (
        <div>
          <SignedOut>
            <Link to="/" className="absolute top-4 left-4 text-white text-lg">
              Back
            </Link>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-red-500 text-white p-8 text-center">
              <h1 className="text-3xl mb-6">Sign in please</h1>
              <SignInButton
                className="bg-red-500 text-white py-2 px-4 rounded-full text-lg hover:bg-red-600 cursor-pointer"
                buttonText="Sign In"
              />
            </div>
          </SignedOut>
          <SignedIn>
            <Search />
          </SignedIn>
        </div>
      ),
    },
    {
      path: "/searchmain/:videoId",
      element: (
        <div>
          <SignedOut>
            <Link to="/" className="absolute top-4 left-4 text-white text-lg">
              Back
            </Link>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-red-500 text-white p-8 text-center">
              <h1 className="text-3xl mb-6">Sign in please</h1>
              <SignInButton
                className="bg-red-500 text-white py-2 px-4 rounded-full text-lg hover:bg-red-600 cursor-pointer"
                buttonText="Sign In"
              />
            </div>
          </SignedOut>
          <SignedIn>
            <Searchvideo />
          </SignedIn>
        </div>
      ),
    },
    {
      path: "/games",
      element: (
        <div>
          <SignedOut>
            <Navbar1 />
          </SignedOut>
          <SignedIn>
            <Navbar />
          </SignedIn>
          <Games />
        </div>
      ),
    },
    {
      path: "/music",
      element: (
        <div>
          <SignedOut>
            <Navbar1 />
          </SignedOut>
          <SignedIn>
            <Navbar />
          </SignedIn>
          <Music />
        </div>
      ),
    },
    {
      path: "/sports",
      element: (
        <div>
          <SignedOut>
            <Navbar1 />
          </SignedOut>
          <SignedIn>
            <Navbar />
          </SignedIn>
          <Sports />
        </div>
      ),
    },
  ]);

  return (
    <div>
      <DarkProvider>
        <RouterProvider router={router} />
      </DarkProvider>
    </div>
  );
};

export default AppRouter;
