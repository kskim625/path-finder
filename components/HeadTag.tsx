import Head from 'next/head';

const HeadTag = () => {
  return (
    <Head>
      <title>Calendars</title>
      <meta name="description" content="World Calendar App" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadTag;
