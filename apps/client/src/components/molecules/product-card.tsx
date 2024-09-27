import { Heart, Share2, ShoppingBag } from "lucide-react";
import { Button, IconButton } from "../atoms/buttons";
import { Card } from "../atoms/others";

export const ProductCard = () => {
	return (
		<Card className="grid gap-2 p-2">
			<CHeader />
			<img
				className="rounded-xl object-contain w-full h-40 bg-muted"
				src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
				alt="Product"
			/>
			<Information />
			<Footer />
		</Card>
	);
};

const CHeader = () => {
	return (
		<div className="flex-between">
			<span className="text-xs bg-green-200 text-green-800 rounded-sm px-2 py-1">
				Nearby Seller
			</span>
			<IconButton>
				<Share2 className="size-4" />
			</IconButton>
		</div>
	);
};

const Information = () => {
	return (
		<>
			<h3 className="font-medium truncate">
				Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
			</h3>
			<p className="flex-between">
				<span className="text-xs font-medium text-muted-foreground text-balance">
					Shipped in 2-4 days
				</span>
				<data aria-label="price" className="text-lg font-medium text-attention">
					₹109
				</data>
			</p>
		</>
	);
};

const Footer = () => {
	return (
		<div className="flex *:grow gap-2">
			<Button className="text-xs dark:bg-red-800">
				<ShoppingBag className="size-4 sm:size-5" />
				<span>Add to cart</span>
			</Button>
			<Button className="text-xs bg-red-400">
				<Heart className="size-4 sm:size-5" />
				<span className="sr-only">Add to wishlist</span>
			</Button>
		</div>
	);
};
