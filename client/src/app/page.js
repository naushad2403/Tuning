import Image from "next/image";
import styles from "./page.module.css";
import { dummyData } from "@/modal/Post";
import PostCard from "@/components/PostCard/PostCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <header></header>
      <div className={styles.container}>
        {dummyData.map((item) => {
          return <PostCard {...item} key={item.id} />;
        })}
      </div>
    </main>
  );
}
