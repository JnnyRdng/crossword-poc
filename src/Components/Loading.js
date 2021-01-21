import "./Loading.css";

export default function Loading({ msg }) {

  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <h3 className="loading">{msg}</h3>
    </div>
  )
}