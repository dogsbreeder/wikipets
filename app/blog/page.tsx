import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '../utils/blog';

export const metadata = {
  title: 'Blog | Wikipets',
  description: 'Najnoviji saveti, vodiči i informacije za vlasnike kućnih ljubimaca u Srbiji. Pročitajte naše blog postove!',
  openGraph: {
    title: 'Blog | Wikipets',
    description: 'Najnoviji saveti, vodiči i informacije za vlasnike kućnih ljubimaca u Srbiji. Pročitajte naše blog postove!',
    url: '/blog',
    type: 'website',
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="prose prose-lg mb-8">
        <p>
          Dobrodošli na naš blog gde delimo korisne savete i informacije o brzi o ljubimcima. 
          Ovde ćete pronaći članke o veterinarskoj nezi, ishrani, treningu i mnogo više.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link href={`/blog/${post.slug}`}>
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm text-gray-500">Autor: {post.author}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* JSON-LD strukturalni podaci */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "headline": "Blog | Wikipets",
            "description": "Najnoviji saveti, vodiči i informacije za vlasnike kućnih ljubimaca u Srbiji.",
            "publisher": {
              "@type": "Organization",
              "name": "Wikipets"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://wikipets.org/blog"
            }
          }),
        }}
      />
    </main>
  );
} 