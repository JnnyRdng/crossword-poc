import { useState } from "react"
import "./Loading.css";

export default function Loading() {

  const [dots, setDots] = useState(".");

  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <h3 className="loading">Loading...</h3>
    </div>
  )
}