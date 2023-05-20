import Image from "next/image"
export default function Loading() {
  const design = {
    width: "100%",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  return (
    <div style={design}>
      <Image src={"/loading.gif"} width={60} height={60} alt="loading"/>
    </div>
  )
}

