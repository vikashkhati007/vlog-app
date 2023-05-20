"use client"
// pages/index.js
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Loading from "../components/loading";
import {useEffect, useState} from "react";

const Main = () => {
  const [data,setdata] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(()=>{
    async function getPost(){
      const post = await fetch(`/api/users`, { next: { revalidate: 5 }});
      const posts = await post.json();
      if(post.ok){
        setdata(posts);
        setloading(false);
      }
    }
    getPost();
  },[])


  return (
    <>
      <main className={styles.maincontainer}>
      {loading ? <Loading /> : <><h1 className="blogtitle">Latest Posts :: </h1>
        <div className={styles.blogcontainer}>
          {data.map((user: any, key: any) => {
            return (
              <Link key={key} href={`/posts?postID=${user._id}`}>
                <div className={styles.blogpost}>
                  <Image
                    className={styles.image}
                    src={user.avtar}
                    width={500}
                    height={500}
                    alt="hacker"
                  />
                  <div className={styles.blogtext}>
                    <h3>{user.title.substring(0, 30)}</h3>
                    <p> {user.description.substring(0, 150) + "...?"}</p>
                  </div>
                </div>
              </Link>
            );
          }).reverse()}
        </div>
         </>}
      </main>
    </>
  );
};

export default Main;