import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import WhatWeOffer from "./components/WhatWeOffer";
import OurWorks from "./components/OurWorks";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	// Loader removed: always render app directly

	return (
		<div className="App">
			<Header />
			<AboutUs />
			<WhatWeOffer />
			<OurWorks />
			<Reviews />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
