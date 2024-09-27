import { twx } from "@/lib/utils";
import type { TwcComponentProps } from "react-twc";

export const IconButton = twx.button`bg-muted text-accent-foreground hocus:invert rounded-full p-2 active:scale-95`;

type ButtonProps = TwcComponentProps<"button"> & {
	$intent?: "default" | "outline";
};

export const Button = twx.button<ButtonProps>((props) => [
	"px-5 py-2 active:scale-95 text-sm rounded-md hocus:ring-black whitespace-nowrap flex justify-center items-center gap-2",
	(!props.$intent || props.$intent === "default") &&
		"bg-primary text-primary-foreground shadow hocus:invert",
	props.$intent === "outline" &&
		"border border-input text-primary bg-background shadow-sm hocus:bg-primary/80 hocus:text-primary-foreground",
]);
