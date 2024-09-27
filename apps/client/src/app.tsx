import "@/styles/base.css";
import { Avatar } from "@/components/atoms/avatar";
import { IconButton } from "@/components/atoms/buttons";
import { BellIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

export const App = () => {
	return (
		<header className="flex items-center justify-between *:flex *:gap-2 *:items-center">
			<div>
				<Avatar
					src="https://i.pravatar.cc/150"
					alt="user-avatar"
					fallback="M"
				/>
				<span className="text-sm">
					Welcome back <br />
					<strong>Mayank</strong>
				</span>
			</div>
			<div>
				<IconButton>
					<BellIcon className="size-5" />
				</IconButton>
				<ThemeButton />
			</div>
		</header>
	);
};

const ThemeButton = () => {
	return (
		<IconButton>
			<SunIcon className="size-5" />
			{/* <MoonIcon className="size-5" /> */}
		</IconButton>
	);
};
