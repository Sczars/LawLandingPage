import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

export default function App() {
  const [sections, setSections] = useState([]);

  const pageLogo = "Văn Phòng Luật ABC XYZ";

  return (
    <>
      {sections.length > 0 && (
        <Header sections={sections} pageLogo={pageLogo} />
      )}
      <Main setSections={setSections} />
      <Footer />
    </>
  );
}
