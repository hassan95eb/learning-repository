import Timer from "./Timer";
import "./style.css";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Timer />
    </div>
  );
}
