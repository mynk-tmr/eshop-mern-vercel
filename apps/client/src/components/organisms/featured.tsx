import { BrowseTitle } from "../atoms/browse-title";
import { ProductCard } from "../molecules/product-card";

export const FeaturedSection = () => {
	return (
		<section className="grid gap-3">
			<BrowseTitle>Featured</BrowseTitle>
			<section className="grid grid-cols-2 gap-3">
				<ProductCard />
				<ProductCard />
			</section>
		</section>
	);
};
