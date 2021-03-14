import { useEffect } from "react";
import { highlightAll } from "prismjs";
import { AppPropsType } from "next/dist/next-server/lib/utils";
import Layout from "../components/layout";
import "../styles/global.css";

const App: React.FC<AppPropsType> = ({ Component, pageProps, router }) => {
  useEffect(() => {
    highlightAll();
  }, []);
  return (
    <Layout home={router.route === "/"}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
