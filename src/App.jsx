import { Toaster } from "sonner";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </>
  );
}

export default App;
