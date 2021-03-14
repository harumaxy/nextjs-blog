import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { NavLink } from "./navLink";

export const name = "Max";
export const siteTitle = "Maxのブログ";
export const myIconSrc = "/images/PowerSkull.png";

const Layout: React.FC<{ home?: boolean }> = ({ children, home }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-green-400 mx-auto container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="harumaxy 技術ブログ" />
        <meta property="og:image" content={myIconSrc} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content={siteTitle} />
      </Head>

      <header className="p-6 flex justify-between items-center bg-gray-700">
        <div className="flex justify-center items-center space-x-6">
          <img
            src={myIconSrc}
            alt="power skull"
            className="h-16 w-16 rounded-full"
          />
          <h1 className="text-4xl text-white font-extrabold">
            <Link href="/">{siteTitle}</Link>
          </h1>
        </div>

        <NavLink
          items={[
            { title: "Home", route: "/" },
            { title: "Blog", route: "/posts" },
          ]}
        />
      </header>
      <main className="bg-white rounded-lg p-10 m-10 flex-grow">
        {children}
      </main>
      {!home && (
        <div className="bg-white text-gray-800">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer className="h-44 bg-gray-700">
        <div className="h-full flex items-center justify-center">
          <p className="text-white my-auto">
            © 2021 ~ 20XX | harumaxy@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
