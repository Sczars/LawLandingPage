import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  const sections = [
    { id: 1, name: "hero" },
    { id: 2, name: "reason" },
    { id: 3, name: "objectives" },
    { id: 4, name: "services" },
    { id: 5, name: "testimonial" },
  ];

  const pageName = "Văn Phòng Luật ABC XYZ"

  return (
    <>
      <Header sections={sections} pageName={pageName}/>
      <Main />
      <Footer />
    </>
  );
}
