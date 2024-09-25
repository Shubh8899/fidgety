import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
// import 'tailwindcss/tailwind.css'; 
import Header from "../../fidgety-home/src/shared/Header";
import Footer from "../../fidgety-home/src/shared/Footer";
import HomeContent from "./HomeContent";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header app={{ name: 'home' }}/>
    <div className="my-10">
      <HomeContent></HomeContent>  
    </div>
    <Footer/>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)