import React, { useState } from "react";
import MainPageLoader from "./components/MainPageLoader";
import Header from "./components/Header";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	const handleLoadingComplete = () => {
		setIsLoading(false);
	};

	if (isLoading) {
		return <MainPageLoader onLoadingComplete={handleLoadingComplete} />;
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<Header />
			<main className="flex flex-col items-center justify-center px-4 py-16">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
						Willkommen bei KlarerNorden
					</h2>
					<p className="text-lg md:text-xl text-gray-600 mb-8">
						Ihr Partner für professionelle Reinigungsdienstleistungen in Deutschland
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
						{/* Service cards can go here */}
						<div className="bg-white p-6 rounded-lg shadow-sm border">
							<h3 className="text-xl font-semibold text-gray-800 mb-3">
								Büroreinigung
							</h3>
							<p className="text-gray-600">
								Professionelle Reinigung für Büros und Geschäftsräume
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-sm border">
							<h3 className="text-xl font-semibold text-gray-800 mb-3">
								Haushaltsreinigung
							</h3>
							<p className="text-gray-600">
								Zuverlässige Reinigung für Ihr Zuhause
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-sm border">
							<h3 className="text-xl font-semibold text-gray-800 mb-3">
								Fensterreinigung
							</h3>
							<p className="text-gray-600">
								Kristallklare Fenster für mehr Licht
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default App;
