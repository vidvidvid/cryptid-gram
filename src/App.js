import "./App.css";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import { useState } from "react";

function App() {
  const [pageNumber, setPageNumber] = useState(1);

  const redirectToRandomPage = (currentPage) => {
    let newPage;
    do {
      newPage = Math.floor(Math.random() * 2) + 1; // 2 moras spremenit v 3, ko dodas 3. stran, itd...
    } while (newPage === currentPage);
    console.log("newPage", newPage);
    setPageNumber(newPage);
  };

  return (
    <div className='App'>
      {pageNumber === 1 && (
        <Page1 redirectToRandomPage={() => redirectToRandomPage(1)} />
      )}
      {pageNumber === 2 && (
        <Page2 redirectToRandomPage={() => redirectToRandomPage(2)} />
      )}
    </div>
  );
}

export default App;
