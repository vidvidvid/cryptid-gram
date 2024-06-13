import { useState } from "react";
import "./App.css";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";
import Page6 from "./pages/page6";
import Page7 from "./pages/page7";
import Page8 from "./pages/page8";
import Page9 from "./pages/page9";
import Page10 from "./pages/page10";
import Page11 from "./pages/page11";
import Page12 from "./pages/page12";
import Page13 from "./pages/page13";


function App() {
  const [pageNumber, setPageNumber] = useState(2);

  const redirectToRandomPage = (currentPage) => {
    let newPage;
    do {
      newPage = Math.floor(Math.random() * 13) + 1;
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
      {pageNumber === 3 && (
        <Page3 redirectToRandomPage={() => redirectToRandomPage(3)} />
      )}
      {pageNumber === 4 && (
        <Page4 redirectToRandomPage={() => redirectToRandomPage(4)} />
      )}
      {pageNumber === 5 && (
        <Page5 redirectToRandomPage={() => redirectToRandomPage(5)} />
      )}
      {pageNumber === 6 && (
        <Page6 redirectToRandomPage={() => redirectToRandomPage(6)} />
      )}
      {pageNumber === 7 && (
        <Page7 redirectToRandomPage={() => redirectToRandomPage(7)} />
      )}
      {pageNumber === 8 && (
        <Page8 redirectToRandomPage={() => redirectToRandomPage(8)} />
      )}
      {pageNumber === 9 && (
        <Page9 redirectToRandomPage={() => redirectToRandomPage(9)} />
      )}
      {pageNumber === 10 && (
        <Page10 redirectToRandomPage={() => redirectToRandomPage(10)} />
      )}
      {pageNumber === 11 && (
        <Page11 redirectToRandomPage={() => redirectToRandomPage(11)} />
      )}
      {pageNumber === 12 && (
        <Page12 redirectToRandomPage={() => redirectToRandomPage(12)} />
      )}
      {pageNumber === 13 && (
        <Page13 redirectToRandomPage={() => redirectToRandomPage(13)} />
      )}
    </div>
  );
}

export default App;
