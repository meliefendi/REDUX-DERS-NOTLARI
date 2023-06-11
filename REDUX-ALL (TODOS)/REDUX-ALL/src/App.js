import React from "react";

//header componenti
import Header from "./components/header";
//footer componenti
import Footer from "./components/footer";
//content componenti
import Content from "./components/content";

function App() {
  return (
    <>
      <section className="todoapp">

        <Header />
        <Content />

      </section >
      <Footer />
    </>
  )
}

export default App;