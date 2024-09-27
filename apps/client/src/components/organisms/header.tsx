import { Avatar } from "@/components/atoms/avatar";
import { IconButton } from "@/components/atoms/buttons";
import { useTheme } from "@/lib/theme-setter";
import { BellIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

export const Header = () => {
	return (
		<header className="flex items-center justify-between *:flex *:gap-2 *:items-center">
			<div>
				<Avatar
					src="https://i.pravatar.cc/150"
					alt="user-avatar"
					fallback="M"
				/>
				<span className="text-sm text-muted-foreground">
					Welcome back <br />
					<strong className="text-foreground">Mayank</strong>
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
	const { isDark, toggleTheme } = useTheme();
	const Icon = isDark ? MoonIcon : SunIcon;
	return (
		<IconButton onClick={toggleTheme}>
			<Icon className="size-5" />
		</IconButton>
	);
};
