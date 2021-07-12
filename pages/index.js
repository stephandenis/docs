import Head from "next/head";
import Document from "../components/Document";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Docs Remake</title>
        <link
          rel="icon"
          href="https://www.gstatic.com/images/branding/product/2x/docs_2020q4_48dp.png"
        />
      </Head>

      <Header />
      <Document />
    </div>
  );
}
