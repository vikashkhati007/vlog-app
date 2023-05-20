"use client";
import Image from "next/image";
import styles from "../styles/post/pages.module.css";
import Loading from "../components/loading";

async function Pages (e) {
      let loading = true;
      const post = await fetch(`/api/users?postID=${e.searchParams.postID}`);
      const posts = await post.json();
      if(post.ok){
        loading = false;
      }
 
  return (
    <>
    {loading ? <Loading/>: <>
    <div className={styles.postpagescontainer} id="pagecontainer">
        <div className={styles.status}>
          <h4>
            Uploaded Time: <span><h5>{posts.date}</h5></span>
          </h4>
        </div>
        <Image
          className={styles.image}
          src={posts.avtar}
          width={500}
          height={300}
          alt="image"
        />
        <h1>{posts.title}</h1>
        <hr />
        <p>{posts.description}</p>
        </div>
    </>}
    </>
  );
};

export default Pages;