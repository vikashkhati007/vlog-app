"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/post/pages.module.css";
import Loading from "../components/loading";

const Pages = (e) => {
  const [userposts, setuserposts] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    async function GetPosts() {
      const post = await fetch(`/api/users?postID=${e.searchParams.postID}`);
      const posts = await post.json();
      setuserposts(posts);
      if(post.ok){
        setloading(false);
      }
    }
    GetPosts();
  }, [e.searchParams.postID]);

  return (
    <>
    {loading ? <Loading/>: <>
    <div className={styles.postpagescontainer} id="pagecontainer">
        <div className={styles.status}>
          <h4>
            Uploaded Time: <span><h5>{userposts.date}</h5></span>
          </h4>
        </div>
        <Image
          className={styles.image}
          src={userposts.avtar}
          width={500}
          height={300}
          alt="image"
        />
        <h1>{userposts.title}</h1>
        <hr />
        <p>{userposts.description}</p>
        </div>
    </>}
    </>
  );
};

export default Pages;