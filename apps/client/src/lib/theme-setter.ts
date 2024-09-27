import { useState } from "react";
import { startViewTransition } from "./web-api";

type Theme = "dark" | "light";

const theme = {
	get preferance() {
		return matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	},
	get() {
		const $val = localStorage.getItem("theme") as Theme | undefined;
		return $val || this.preferance;
	},
	set(_new: Theme) {
		this.updateRoot(_new);
		localStorage.setItem("theme", _new);
	},
	toggle() {
		this.set(theme.get() === "dark" ? "light" : "dark");
	},
	updateRoot(_new: Theme) {
		const html = document.documentElement;
		const action = () => {
			html.classList.remove("dark", "light");
			html.classList.add(_new);
		};
		startViewTransition(action);
	},
};

theme.set(theme.get()); // Set initial theme

export function useTheme() {
	const [isDark, setIsDark] = useState(theme.get() === "dark");
	return {
		isDark,
		setTheme: theme.set.bind(theme),
		toggleTheme: () => {
			theme.toggle();
			setIsDark(!isDark);
		},
	};
}
