import React from "react";

const Head = () => {
  const title =
    "Veer Kunwer Bharti - Full Stack Developer Portfolio | JavaScript, React, Angular Node.js, PHP, Laravel";

  const description =
    "I'm Veer Kunwer Bharti, a passionate full stack developer with 3 years of experience building web applications. Explore my portfolio, learn about my skills and experience, and let's connect to bring your next project to life!";

  const url = "https://veerkbharti.com";
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
      <meta name="author" content="Veer Kunwer Bharti" />
      <meta rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/dp.png" />
      <meta property="og:url" content={url} />
      <meta property="og:ste_name" content={url} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />

    </>
  );
};

export default Head;
