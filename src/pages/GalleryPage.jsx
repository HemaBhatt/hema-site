import { useState, useEffect } from 'react';
import { galleryData } from '../data/galleryData';
import Lightbox from '../components/Lightbox';

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleImages, setVisibleImages] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleImages((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-gallery-image]').forEach((img) => {
      observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

  const getImageStyle = (index) => {
    const spans = [1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1];
    return spans[index % spans.length];
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Gallery
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore all {galleryData.length} images from my collection
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {galleryData.map((image, index) => {
            const isVisible = visibleImages.has(`gallery-img-${image.id}`);

            return (
              <div
                key={image.id}
                id={`gallery-img-${image.id}`}
                data-gallery-image
                className="mb-4 break-inside-avoid cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedIndex(index)}
              >
                <div className="relative bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  {isVisible ? (
                    <img
                      src={`/gallery/${image.filename}`}
                      alt={image.caption}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-[300px] bg-gray-300 dark:bg-gray-600 animate-pulse" />
                  )}

                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <p className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedIndex !== null && (
        <Lightbox
          images={galleryData}
          initialIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </div>
  );
}
