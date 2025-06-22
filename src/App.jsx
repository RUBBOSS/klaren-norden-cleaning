import React, { useState } from "react";
import logo from "../public/logo/logo.png";
import MainPageLoader from "./components/MainPageLoader";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	const handleLoadingComplete = () => {
		setIsLoading(false);
	};

	if (isLoading) {
		return <MainPageLoader onLoadingComplete={handleLoadingComplete} />;
	}

	return (
		<div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
			<img src={logo} alt="KlarerNorden Logo" className="w-32 h-32 mb-4" />
			<h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-2 text-center">
				KlarerNorden
			</h1>
			<p className="text-lg md:text-xl text-blue-400 mb-6 text-center">
				Sauberkeit mit Qualität
			</p>
			{/* Main content can go here */}
		</div>
	);
};

export default App;
