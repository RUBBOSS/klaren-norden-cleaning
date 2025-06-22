import React, { useState, useEffect } from "react";
import MainPageLoader from "./components/MainPageLoader";
import Header from "./components/Header";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	const handleLoadingComplete = () => {
		setIsLoading(false);
	};

	// Safety timeout to prevent infinite loading
	useEffect(() => {
		const timeout = setTimeout(() => {
			if (isLoading) {
				console.warn("Loading took too long, skipping loader");
				setIsLoading(false);
			}
		}, 10000); // 10 seconds max

		return () => clearTimeout(timeout);
	}, [isLoading]);

	// Error boundary fallback
	if (hasError) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-2xl font-bold text-gray-800 mb-4">KlarerNorden</h1>
					<p className="text-gray-600">Loading application...</p>
				</div>
			</div>
		);
	}

	if (isLoading) {
		try {
			return <MainPageLoader onLoadingComplete={handleLoadingComplete} />;
		} catch (error) {
			console.error("MainPageLoader error:", error);
			setHasError(true);
			return null;
		}
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
