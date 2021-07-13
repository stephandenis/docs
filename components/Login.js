import Button from "@material-tailwind/react/Button";
import Image from "next/image";
import { signIn } from "next-auth/client";
import Head from "next/head";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Docs Remake</title>
        <link
          rel="icon"
          href="https://www.gstatic.com/images/branding/product/2x/docs_2020q4_48dp.png"
        />
      </Head>

      <Image
        src="https://www.gstatic.com/images/branding/product/2x/docs_2020q4_48dp.png"
        height="100"
        width="100"
        objectFit="contain"
      />
      <Button
        color="blue"
        buttonType="filled"
        ripple="light"
        className="w-44 mt-10"
        onClick={signIn}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
