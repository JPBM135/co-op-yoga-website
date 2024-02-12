import favicon from "./favicon.png";

export function Head() {
  const metadata = {
    title: "Yoga - Choose your Teacher",
    description:
      "Calm your mind and body with the best yoga teachers available, relax your day and stay positive.",
    url: "https://co-op-yoga-website.vercel.app/",
    image: "https://co-op-yoga-website.vercel.app/metadata.png",
  };

  return (
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{metadata.title}</title>
      <meta name="title" content={metadata.title} />
      <meta name="description" content={metadata.description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={metadata.url} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metadata.url} />
      <meta property="twitter:title" content={metadata.title} />
      <meta property="twitter:description" content={metadata.description} />
      <meta property="twitter:image" content={metadata.image} />

      <link rel="icon" href={favicon.src} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lora&family=Poppins&display=swap"
        rel="stylesheet"
      />
    </head>
  );
}
