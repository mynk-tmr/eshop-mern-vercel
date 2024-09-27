import "@/styles/base.css";
import "@fontsource-variable/rubik";
import { Banner } from "@/components/organisms/banner";
import { Categories } from "@/components/organisms/categories";
import { FeaturedSection } from "@/components/organisms/featured";
import { Header } from "@/components/organisms/header";
import { Navbar } from "./components/molecules/navbar";

export const App = () => {
	return (
		<main className="flex flex-col min-h-full gap-6">
			<Header />
			<Banner />
			<Categories />
			<FeaturedSection />
			<Navbar />
		</main>
	);
};
