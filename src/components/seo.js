import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'Cung cấp mọi công cụ kiểm soát hành trình vận tải của bạn, đem đến một trải nghiệm quản lý hành trình hoàn toàn mới mẻ.',
  author = 'Trolynhaxe team',
  meta,
  title = 'Trolynhaxe - Phần mềm quản lý hành trình vận tải thời gian thực',
}) {
  const metaData = [
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: 'og:image',
      content: 'https://i.imgur.com/yMTbFtO.png',
    },
    {
      property: `twitter:card`,
      content: `summary`,
    },
    {
      property: `twitter:creator`,
      content: author,
    },
    {
      property: `twitter:title`,
      content: title,
    },
    {
      property: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Trolynhaxe - Phần mềm quản lý hành trình vận tải thời gian thực"/>
      {metaData.map(({ property, content }, i) => (
        <meta key={i} property={property} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
