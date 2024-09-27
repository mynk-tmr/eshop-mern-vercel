import {
	Cable,
	Flower2,
	HeartHandshake,
	Shirt,
	UtensilsCrossed,
} from "lucide-react";
import { BrowseTitle } from "../atoms/browse-title";
import { IconButton } from "../atoms/buttons";

const categories = [
	{ icon: Cable, value: "Electronics" },
	{ icon: Shirt, value: "Clothings" },
	{ icon: UtensilsCrossed, value: "Kitchenware" },
	{ icon: HeartHandshake, value: "Personal Care" },
	{ icon: Flower2, value: "Plants / Decor" },
];

export const Categories = () => {
	return (
		<section>
			<BrowseTitle>Categories</BrowseTitle>
			<div className="flex items-center gap-3 *:shrink-0 mt-4 overflow-x-auto">
				{categories.map((it) => (
					<div key={it.value} className="grid place-items-center">
						<IconButton>
							<it.icon className="size-6" />
						</IconButton>
						<span className="text-sm text-muted-foreground">{it.value}</span>
					</div>
				))}
			</div>
		</section>
	);
};
