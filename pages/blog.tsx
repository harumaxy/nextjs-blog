import Layout from "../components/layout";
import { BlogList } from "../components/blogList";
import { getSortedPostsData, PostData } from "../lib/posts";

const Blog: React.FC<{ allPostsData: PostData[] }> = ({ allPostsData }) => (
  <BlogList allPostsData={allPostsData}></BlogList>
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
