"use client";
import styles from "./page.module.css";
import { dummyData } from "@/modal/Post";
import PostCard from "@/components/PostCard/PostCard";
import { useGetWhoAmIQuery, useLazyRefreshTokenQuery } from "@/services/whoami";
import { useGetUsersQuery } from "@/services/user";
import { useEffect, useState } from "react";
import Login from "./login/login";
import Modal from "@/components/Modal/Modal";

export default function Home() {
  const { error } = useGetWhoAmIQuery();
  const { data: UserData } = useGetUsersQuery();
  const [isOpen, setModal] = useState(false);

  return (
    <main className={styles.main}>
      <header></header>
      <div className={styles.container}>
        {dummyData.map((item, index) => {
          return <PostCard {...item} key={index} setModal={setModal} />;
        })}
      </div>
      <Modal isOpen={isOpen} onClose={() => setModal(false)}>
        <div className={styles.FlexBox}>
          <span className={styles.modalTitle}> Please Login to continue</span>
          <Login guest={false} />
        </div>
      </Modal>
    </main>
  );
}
