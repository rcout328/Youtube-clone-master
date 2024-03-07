import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Video = () => {
    const { videoId } = useParams();

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900 px-4">
            <div className="absolute top-4 left-4">
                {/* Back button */}
                <Link to="/" className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">
                    Back
                </Link>
            </div>
            <ReactPlayer 
                url={`https://www.youtube.com/watch?v=${videoId}`}
                width="100%"
                height="100%"
                controls={true}
                playing={true}
                className="react-player"
            />
        </div>
    );
}

export default Video;
