import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DarkContext } from "./Context/DarkProvider";

function Main() {
  const [videos, setVideos] = useState([]);
  const [dark] = useContext(DarkContext);

  useEffect(() => {
    const url = `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "12c07e3957msh82e0c2bbd665338p15a37ajsnd3c0f029e252",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((result) => {
        console.log(result);
        setVideos(result.items || []); // Use an empty array as a fallback if 'result.items' is undefined
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div
      className={`min-h-screen ${
        dark ? "bg-black text-white" : "bg-white text-white"
      }`}
    >
      <div className="container mx-auto py-10 px-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video) => (
            <Link to={`/video/${video.id.videoId}`} key={video.id}>
              <li className="bg-gray-800 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                {video.snippet &&
                video.snippet.thumbnails &&
                video.snippet.thumbnails.high &&
                video.snippet.thumbnails.high.url ? (
                  <img
                    src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.title}
                    className="w-full h-52 object-cover"
                  />
                ) : null}
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
      </div>
    </div>
  );
}

export default Main;
