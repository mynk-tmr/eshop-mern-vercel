import { twx } from "@/lib/utils";
import { useState } from "react";
import type { TwcComponentProps } from "react-twc";

type DotProps = TwcComponentProps<"div"> & {
	$active: boolean;
};

const Dot = twx.div<DotProps>((props) => [
	"size-3 rounded-full bg-accent inline-block",
	props.$active && "outline-dotted outline-2 outline-offset-2 outline-current",
]);

const Dots = ({ activeIndex }: { activeIndex: number }) => {
	return (
		<div className="flex justify-center gap-2">
			{Array.from({ length: 5 }).map((_, index) => (
				<Dot key={index} $active={activeIndex === index} />
			))}
		</div>
	);
};

type SlideProps = {
	update: () => void;
	image: string;
	next: string;
};

const Slide = (props: SlideProps) => (
	<section className="h-44 my-3 *:size-full *:rounded-lg">
		<img src={props.image} alt="Promotional Banner" />
		<img
			src={props.next}
			hidden
			aria-hidden
			alt="Promotional Banner"
			onLoad={props.update}
			onError={props.update}
		/>
	</section>
);

export const Banner = () => {
	const [index, setIndex] = useState(0);

	const images = [1, 2, 3, 4, 5].map(
		(i) => `https://picsum.photos/seed/${i}/176/900`,
	);

	const tiv = (i: number) => (i + 1) % images.length;

	function update() {
		const action = () => setIndex(tiv(index));
		setTimeout(action, 3000);
	}

	return (
		<section>
			<Slide
				{...{
					update,
					image: images[index],
					next: images[tiv(index)],
				}}
			/>
			<Dots activeIndex={index} />
		</section>
	);
};
