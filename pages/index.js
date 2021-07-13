import Head from "next/head";
import Document from "../components/Document";
import Header from "../components/Header";
import { getSession, useSession } from "next-auth/client";
import Login from "../components/Login";

export default function Home() {
  const [session] = useSession();

  if (!session) return <Login />;
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

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
