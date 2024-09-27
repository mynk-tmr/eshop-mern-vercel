import { twx } from "@/lib/utils";
import { Heart, Share2, ShoppingBag } from "lucide-react";
import { Button, IconButton } from "../atoms/buttons";

const Dot = twx.span`flex size-2 rounded-full bg-sky-500 translate-y-1`;

const Card = twx.article`p-4 rounded-xl border text-card-foreground shadow`;

const Label = twx.span`text-sm bg-green-200 text-green-800 rounded-sm px-2 py-1`;

const Image = twx.img`rounded-xl object-contain w-full h-40 bg-muted`;

export const ProductCard = () => {
	return (
		<Card className="grid gap-2 p-2">
			<Header />
			<Image
				src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
				alt="Product"
			/>
			<Information />
			<Footer />
		</Card>
	);
};

const Header = () => {
	return (
		<div className="flex-between">
			<Label>Nearby Seller</Label>
			<IconButton>
				<Share2 className="size-4" />
			</IconButton>
		</div>
	);
};

const Information = () => {
	return (
		<>
			<h3 className="font-bold truncate">
				Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
			</h3>
			<span className="text-muted-foreground text-sm">Shipped in 2-4 days</span>
			<strong>₹109.95</strong>
		</>
	);
};

const Footer = () => {
	return (
		<div className="flex *:grow gap-2">
			<Button className="text-xs">
				<ShoppingBag className="size-5" />
				<span className="sr-only sm:not-sr-only">Add to cart</span>
			</Button>
			<Button className="text-xs bg-red-400 hocus:!bg-red-700">
				<Heart className="size-5" />
				<span className="sr-only sm:not-sr-only">Add to wishlist</span>
			</Button>
		</div>
	);
};
