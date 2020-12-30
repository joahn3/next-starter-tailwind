import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Ionuț Francisc - Web developer enthusiast</title>
        <meta
          name="Description"
          content="Ionuț Francisc - Web developer enthusiast."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
