import Layout from "../components/layout";
import { BlogList } from "../components/blogList";
import { getSortedPostsData, PostData } from "../lib/posts";

const Blog: React.FC<{ allPostsData: PostData[] }> = ({ allPostsData }) => (
  <Layout>
    <BlogList allPostsData={allPostsData}></BlogList>
  </Layout>
);

export default Blog;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
