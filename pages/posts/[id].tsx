import { getAllPostIds, getPostData, PostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import React, { useEffect, useState } from "react";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";

const Post: React.FC<{
  postData: PostData;
}> = ({ postData }) => {
  const mdxContent = hydrate(postData.mdxSource);
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="pb-6">
        <h1 className="text-3xl font-extrabold">{postData.title}</h1>
        <Date dateString={postData.date} />
      </div>
      <article className="mx-auto">{mdxContent}</article>
    </>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default Post;
