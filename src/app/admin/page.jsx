"use client"
import styles from "../styles/admin/admin.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Admin = () => {
  const router = useRouter();
  const now = new Date();
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const CurrentDate = new Intl.DateTimeFormat("en-US", options).format(
    now
  );

  const [image, setImage] = useState("");

  async function handleFormSubmit(formData) {
    const title = formData.get('title')
    const tags = formData.get('tags')
    const content = formData.get('content')

    console.log(content);
    const response = await fetch(`/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        description: content,
        avtar: image,
        date: CurrentDate,
        tag: tags
      })
    });
    if (response.ok) {
      router.push("/home");
    }
    if (!response.ok) {
      console.log("Response Not OK")
    }
  };
 

  function handleFileUpload(event) {
    const fileReader = new FileReader();
    const file = event.target.files[0];
    fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      const base64Image = fileReader.result.toString();
      setImage(base64Image);
    };
  }

  return (
    <form action={handleFormSubmit}>
      <div className={styles.newpostcontainer}>
        <h1>Create Post: </h1>
        <input
          name="title"
          className={styles.title}
          type="text"
          placeholder="Enter Title Of the Post"
        />
        <textarea
          name="content"
          placeholder="Enter Body Of the Post"
          style={{ resize: "none" }}
        />
        <div className={styles.tagcontainer}>
          <label>Tags:</label>
          <input name="tags" type="text" id="tags-input" />
        </div>
        <span className={styles.filecontainer}>
          <input
            name="image"
            className={styles.fileInput}
            type="file"
            accept="image/*"
            id="file-input"
            onChange={handleFileUpload}
          />
        </span>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Admin;