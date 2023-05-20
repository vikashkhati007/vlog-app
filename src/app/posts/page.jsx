"use client"
import Image from "next/image";
import styles from "../styles/post/pages.module.css";
import Loading from "../components/loading";
import { useEffect, useState } from "react";

const Pages = (e) => {
  const [data,setdata] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function getPost() {
      const post = await fetch(`/api/users?postID=${e.searchParams.postID}`);
      const posts = await post.json();
      if(post.ok){
        setdata(posts);
        setloading(false);
      }
    }
    getPost();
  },[e.searchParams.postID])

  return (
    <>
      {loading ? <Loading /> : <>
        <div className={styles.postpagescontainer} id="pagecontainer">
          <div className={styles.status}>
            <h4>
              Uploaded Time: <span><h5>{data.date}</h5></span>
            </h4>
          </div>
          <Image
            className={styles.image}
            src={data.avtar}
            width={500}
            height={300}
            alt="image"
          />
          <h1>{data.title}</h1>
          <hr />
          <p>{data.description}</p>
        </div>
      </>}
    </>
  );
};

export default Pages;