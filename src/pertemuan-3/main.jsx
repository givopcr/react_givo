import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import UserForm from "./UserForm"; 
import "./tailwind.css";

createRoot(document.getElementById("root"))
  .render(
    <div className="space-y-8">
      <TailwindCSS />
      <UserForm />
    </div>
  );