"use client"
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Loading from "../components/loading";
import Link from "next/link";
import { useEffect, useState } from "react";

const Search = (e:any) => {
  const [data,setdata] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function getPost() {
      const post = await fetch(`/api/users?title=${e.searchParams.title}`);
      const posts = await post.json();
      if(post.ok){
        setdata(posts);
        setloading(false);
      }
    }
    getPost();
  },[e.searchParams.title])

  return (
    <>
      <main className={styles.maincontainer}>
      {loading ? <Loading/>: <>
        {data.length == 0 ? <h1> Not Found !!</h1> : <h1> Searched Posts :: </h1>}
        <div className={styles.blogcontainer}>
          {data.map((user : any, key: any) => {
            return (
              <Link key={user._id} href={`/posts?postID=${user._id}`}>
              <div className={styles.blogpost} >
                <Image className={styles.image} src={user.avtar} width={500} height={500} alt="hacker" />
                <div className={styles.blogtext}>
                <h3>{user.title.substring(0,20)}</h3>
                <p> {user.description.substring(0,150)+"...?"}</p>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
        </>}
      </main>
    </>
  );
};


export default Search;
