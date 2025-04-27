import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPostCardProps {
  title: string;
  imageUrl: string;
  slug: string;
  excerpt?: string;
  date?: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ title, imageUrl, slug, excerpt, date }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        {date && (
          <p className="text-sm text-gray-500 mb-2">{new Date(date).toLocaleDateString('sr-RS')}</p>
        )}
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        {excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        )}
        <Link 
          href={`/blog/${slug}`}
          className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200"
        >
          Čitaj više
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard; 