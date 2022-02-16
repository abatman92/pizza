import { Route, Routes } from "react-router-dom";
import { Header, Content, CartEmpty, Cart} from "./components/index";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
