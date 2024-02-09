export function Head() {
  const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
  };

  return (
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={metadata.description} />
      <title>{metadata.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </head>
  );
}
