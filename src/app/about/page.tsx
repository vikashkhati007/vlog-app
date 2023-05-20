import Image from "next/image"
import styles from "../styles/about.module.css";
const about = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.aboutcontainer}>
      <Image src="https://avatars.githubusercontent.com/u/124573409?v=4" className= {styles.image} width={150} height={150} alt="profilepic"/>
      <h1>About</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum cumque molestias nemo necessitatibus reprehenderit in natus culpa, id corrupti ad odit laudantium porro eum labore nostrum officiis accusantium excepturi tempore omnis aliquam! Consequatur, rerum ab. Aspernatur ullam error accusantium perferendis voluptatem earum voluptates eum fugit odio corrupti, saepe mollitia est! Placeat consectetur, laudantium impedit ab omnis esse, explicabo dicta eligendi repellat eaque quasi sed dolores quos labore, reprehenderit optio non incidunt ipsum nisi excepturi. Delectus ratione nobis temporibus rem officiis eveniet hic, error asperiores reiciendis laborum laudantium inventore sed, voluptatibus, quidem voluptate amet accusantium suscipit eos deserunt fugit harum dolore.</p>
        </div>
      </div>
    </>
  )
}

export default about
