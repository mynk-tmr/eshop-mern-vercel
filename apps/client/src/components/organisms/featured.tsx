import { BrowseTitle } from "../atoms/browse-title";
import { ProductCard } from "../molecules/product-card";

export const FeaturedSection = () => {
	return (
		<section>
			<BrowseTitle>Featured</BrowseTitle>
			<section className="mt-3 grid grid-cols-2 lg:grid-cols-3 gap-3">
				<ProductCard />
				<ProductCard />
			</section>
		</section>
	);
};
