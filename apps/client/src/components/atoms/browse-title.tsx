import { ArrowRightIcon } from "@radix-ui/react-icons";

export const BrowseTitle = ({ children }: { children: React.ReactNode }) => {
	return (
		<h3 className="text-xl font-bold flex-between">
			{children}
			<span
				aria-label="See more of this section"
				className="cursor-pointer text-primary flex gap-4 text-sm group"
			>
				See All <ArrowRightIcon className="group-hover:scale-[2]" />
			</span>
		</h3>
	);
};
