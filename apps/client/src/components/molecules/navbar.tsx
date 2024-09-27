import { Home, Search, ShoppingBag, Star, UserCircle } from "lucide-react";

const config = [
	{ icon: Home, value: "Home" },
	{ icon: Search, value: "Search" },
	{ icon: Star, value: "Wishlist" },
	{ icon: ShoppingBag, value: "Cart" },
	{ icon: UserCircle, value: "Account" },
];

export const Navbar = () => {
	return (
		<nav className="flex-between fixed bottom-0 z-50 mx-auto bg-green-500 dark:bg-primary font-medium rounded-lg">
			{config.map((it) => (
				<span key={it.value} className="py-2 px-4 grid place-items-center">
					<it.icon className="size-5" strokeWidth={3} />
					<span className="text-xs">{it.value}</span>
				</span>
			))}
		</nav>
	);
};
