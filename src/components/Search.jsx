import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { DarkContext } from "./Context/DarkProvider";

function Main() {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query

  useEffect(() => {
    if (searchQuery.trim()) {
      // Check if the search query is not just empty spaces
      const url = `https://youtube-v31.p.rapidapi.com/search?q=${encodeURIComponent(
        searchQuery
      )}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`;

      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "12c07e3957msh82e0c2bbd665338p15a37ajsnd3c0f029e252",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      };

      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          setVideos(data.items || []);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }
  }, [searchQuery]); // useEffect will trigger every time the searchQuery state updates

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query state when the user types
  };
  const [dark] = useContext(DarkContext);

  return (
    <div
      className={`min-h-screen ${
        dark ? "bg-black text-white" : "bg-white text-white"
      }`}
    >
      <header className="bg-gradient-to-r from-red-600 to-red-800 shadow-lg">
        <div className="container mx-auto py-6 px-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-4xl font-bold text-white hover:text-gray-300"
          >
            YouTube Clone
          </Link>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-lg text-gray-800"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </header>

      <div className="container mx-auto py-10 px-4">
        {videos.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {videos.map((video, index) => (
              <Link
                to={`/searchmain/${video.id.videoId}`}
                key={video.id.videoId || index}
              >
                <li className="bg-gray-800 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  {video.snippet.thumbnails.high.url && (
                    <img
                      src={video.snippet.thumbnails.high.url}
                      alt={video.snippet.title}
                      className="w-full h-52 object-cover"
                    />
                  )}
                  <div className="p-5">
                    <h2 className="text-xl font-semibold mb-2 hover:text-red-500 transition-colors duration-300">
                      {video.snippet.title}
                    </h2>
                    <p className="text-sm text-gray-400">
                      {video.snippet.channelTitle}
                    </p>
                    <p className="text-sm text-gray-400">
                      {new Date(video.snippet.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <div className="text-center">No videos found</div>
        )}
      </div>
    </div>
  );
}

export default Main;
