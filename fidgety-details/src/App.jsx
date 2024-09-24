import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
// import 'tailwindcss/tailwind.css'; 
import Header from "fidgety_home/Header";
import Footer from "fidgety_home/Footer";
import SafeComponent from "./SafeComponent";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <SafeComponent>
      <Header />
    </SafeComponent>
      
    <div>Details Content</div>
    <Footer/>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)