import Header from "./shared/header/Header";
import Counter from "./features/counter/Counter";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Counter />
      </main>
    </>
  );
}

export default App;
