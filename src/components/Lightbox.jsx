import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Lightbox({ images, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-60"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-60"
        aria-label="Previous image"
      >
        <ChevronLeft size={40} />
      </button>

      <div className="flex flex-col items-center gap-4 max-w-4xl w-full">
        <img
          src={`/gallery/${currentImage.filename}`}
          alt={currentImage.caption}
          className="max-h-[70vh] max-w-full object-contain"
        />
        <div className="text-white text-center">
          <p className="text-lg font-semibold">{currentImage.caption}</p>
          <p className="text-gray-400 text-sm">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-60"
        aria-label="Next image"
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
}
