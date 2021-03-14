import Link from "next/link";
import Date from "./date";
import { PostData } from "../lib/posts";

export const BlogList: React.FC<{ allPostsData: PostData[] }> = (props) => (
  <section>
    <h2>Blog</h2>
    <ul>
      {props.allPostsData.map(({ id, date, title }) => (
        <li key={id}>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          <small>
            <Date dateString={date} />
          </small>
        </li>
      ))}
    </ul>
  </section>
);
