import React from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';

const BlogSeo = ({ title, summary, publishedAt, slug, image }) => {
  const date = new Date(publishedAt).toISOString();
  const url = `https://leerob.io/blog/${slug}`;
  const featuredImage = {
    url: `https://leerob.io${image}`,
    alt: title
  };

  return (
    <>
      <NextSeo
        title={`${title} – Lee Robinson`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date
          },
          url,
          title,
          description: summary,
          images: [featuredImage]
        }}
      />
      <ArticleJsonLd
        authorName="Lee Robinson"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="Lee Robinson"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
