import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section_1 from "./sections/main/Section_1";
import Section_2 from "./sections/main/Section_2";
import Section_3 from "./sections/main/Section_3";
import Section_4 from "./sections/main/Section_4";
import Section_5 from "./sections/main/Section_5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <Section_4 />
        <Section_5 />
      </main>

      <Footer />
    </div>
  );
}

export default App;
