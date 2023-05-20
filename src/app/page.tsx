"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "../app/styles/loading/loading.module.css";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  useEffect(()=>{
    setTimeout(()=>{
      router.push("/home");
    },(2000))
  })
  return (
    <>
    <div className={styles.loadingcontainer}>
    <Image className={styles.gif1} src="/loading/loadingtext.gif" width={600} height={450} alt="loading"/>
    </div>
    </>
  )
}
