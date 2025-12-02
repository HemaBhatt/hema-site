import { Link } from 'react-router-dom';
import { galleryData } from '../data/galleryData';
import '../styles/polaroid.css';

export default function PolaroidPreview() {
  const recentImages = galleryData.slice(0, 4);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Gallery
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A collection of moments from my journey
          </p>
        </div>

        <div className="polaroid-container">
          <div className="polaroid-light"></div>
          <ul className="polaroid-wrapper">
            {recentImages.map((image) => (
              <li key={image.id} className="polaroid-card">
                <img
                  src={`/gallery/${image.filename}`}
                  alt={image.caption}
                  loading="lazy"
                />
                <p>{image.caption}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center mt-1">
          <Link
            to="/images"
            className="
              inline-flex items-center gap-2
              px-6 py-3
              text-green-600 font-medium
              border border-green-600
              rounded-lg
              hover:bg-green-600 hover:text-white
              transition-all duration-300
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
