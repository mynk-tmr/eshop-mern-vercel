import { BrowseTitle } from "../atoms/browse-title";
import { ProductCard } from "../molecules/product-card";

export const FeaturedSection = () => {
	return (
		<section>
			<BrowseTitle>Featured</BrowseTitle>
			<section className="mt-3 overflow-children *:max-w-60 md:*:max-w-72 lg:*:max-w-80">
				<ProductCard />
				<ProductCard />
			</section>
		</section>
	);
};
