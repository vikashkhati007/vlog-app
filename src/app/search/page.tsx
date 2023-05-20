"use client"
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loading from "../components/loading";


async function Search (e:any) {
      let loading = true;
      const router = useRouter();
      const post = await fetch(`/api/users?title=${e.searchParams.title}`);
      const posts = await post.json();
      if(post.ok){
        loading = false;
      }

  return (
    <>
      <main className={styles.maincontainer}>
      {loading ? <Loading/>: <>
        {posts.length == 0 ? <h1> Not Found !!</h1> : <h1> Searched Posts :: </h1>}
        <div className={styles.blogcontainer}>
          {posts.map((user : any, key: any) => {
            return (
              <div key={user.id} className={styles.blogpost} onClick={()=>{router.push(`/posts?postID=${user._id}`)}}>
                <Image className={styles.image} src={user.avtar} width={500} height={500} alt="hacker" />
                <div className={styles.blogtext}>
                <h3>{user.title.substring(0,20)}</h3>
                <p> {user.description.substring(0,150)+"...?"}</p>
                </div>
              </div>
            );
          })}
        </div>
        </>}
      </main>
    </>
  );
};


export default Search;
