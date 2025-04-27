import Image from 'next/image';
import { getPostBySlug } from '../../utils/blog';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Wikipets Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 800,
          height: 400,
          alt: post.title,
        },
      ],
      type: 'article',
    },
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container-custom py-12">
      <article className="max-w-3xl mx-auto">
        <div className="relative h-[400px] mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>{post.date}</span>
            <span>•</span>
            <span>Autor: {post.author}</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p>{post.content}</p>
        </div>
      </article>

      {/* JSON-LD strukturalni podaci */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": [post.image],
            "description": post.excerpt,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Wikipets"
            },
            "datePublished": post.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://wikipets.org/blog/${post.slug}`
            }
          }),
        }}
      />
    </main>
  );
} 