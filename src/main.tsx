import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
/* import { spy } from "mobx"; */
import App from "./app/App";

/* spy((ev) => {
  if (ev.type === "action") {
    console.log(ev);
  }
}); */

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="Application-React-TS-MOBX/">
    <App />
  </BrowserRouter>
);
