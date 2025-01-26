import PostCard from "../../components/PostCard";
import posts from "../../json/posts.json";
import styles from "./Inicio.module.css";

export default function Inicio() {
  return (
    <main>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}
