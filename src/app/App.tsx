import "./styles/reset.scss";
import "./styles/global.scss";

import Header from "../widgets/Header";
import AppRoutes from "./routes/AppRoutes";
import Navigation from "../widgets/Navigation";

const App = () => {
  return (
    <div className="wrapper">
      <Header />

      <main className="main">
        <div className="container">
          <div className="main__inner">
            <Navigation />
            <AppRoutes />
          </div>
        </div>
      </main>

      {/* <footer></footer> */}
    </div>
  );
};
export default App;
