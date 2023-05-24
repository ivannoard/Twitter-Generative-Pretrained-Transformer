import Context from "./context";
import Router from "./router";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
      />
      <Context>
        <Router />
      </Context>
    </>
  );
}

export default App;
