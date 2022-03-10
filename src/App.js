import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          {/* We need to pass key for automatic re-render the news component and we need to write exact */}
          <Route
            extact
            path="/"
            element={<News key="general" category="general" api="6e34908420bd499e9ae7dd0ee8b57143"/>}
          />
          <Route
            extact
            path="/business"
            element={<News key="business" category="business" api="6e34908420bd499e9ae7dd0ee8b57143"/>}
          />
          <Route
            extact
            path="/entertainment"
            element={<News key="entertainment" category="entertainment" api="6e34908420bd499e9ae7dd0ee8b57143"/>}
          />
          <Route
            extact
            path="/health"
            element={<News key="health" category="health" api="6e34908420bd499e9ae7dd0ee8b57143"/>}
          />
          <Route
            extact
            path="/science"
            element={<News key="science" category="science" api="6e34908420bd499e9ae7dd0ee8b57143"/>}
          />
          <Route
            extact
            path="/sports"
            element={<News key="sports" category="sports" api="6e34908420bd499e9ae7dd0ee8b57143"/>}
          />
          <Route
            extact
            path="/technology"
            element={<News key="technology" category="technology" api="6e34908420bd499e9ae7dd0ee8b57143"/>}
          />
          <Route extact path="about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
