import { HomePage } from "./components/HomePage";
import { globalStyles } from "./styles/global";

function App() {
  globalStyles();
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
