import React from "react";
import Image from "next/image";
import image7 from "./images/image7.jpeg";
import image8 from "./images/image8.jpeg";

const FIRST_CARD_HEIGHT = 330;
const SECOND_CARD_HEIGHT = Math.floor(FIRST_CARD_HEIGHT * 0.6);

const BlogCard = ({ date, title, image, height }) => (
  <div className="relative group overflow-hidden rounded-lg mb-6 mx-auto w-full max-w-[280px]">
    <div className="relative w-full" style={{ height: `${height}px` }}>
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
        <div className="absolute top-4 left-0">
          <span className="bg-blue-800 text-white px-4 py-1 rounded-r-2xl text-sm">
            {date}
          </span>
        </div>
        <h2 className="absolute bottom-6 left-6 text-white text-lg font-medium max-w-[200px]">
          {title}
        </h2>
      </div>
    </div>
  </div>
);

const BlogColumn = () => (
  <div className="w-full px-4 sm:px-0 sm:w-[280px]">
    <BlogCard
      date="20 Apr"
      title="The covid-19 epidemic is back"
      image={image7}
      height={FIRST_CARD_HEIGHT}
    />
    <BlogCard
      date="20 Apr"
      title="The covid-19 epidemic is back"
      image={image8}
      height={SECOND_CARD_HEIGHT}
    />
  </div>
);

const Blog = () => {
  return (
    <section className="py-8 sm:py-16 w-full overflow-x-hidden">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-blue-800 font-medium text-lg mb-2">Our Blog</h2>
        <h1 className="text-blue-950 font-bold text-3xl">Latest News</h1>
      </div>

      {/* Blog Grid */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 w-full">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="w-full sm:w-auto">
            <BlogColumn />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
