import Banner from "../../components/Banner";
import Post from "../../components/Post";
import styles from "./Inicio.module.css";
import posts from "../../json/posts.json";

export default function Inicio() {
  return (
    <main>
      <Banner />
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}
