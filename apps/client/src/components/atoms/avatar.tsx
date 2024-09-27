import { useState } from "react";

type Props = React.ComponentProps<"img"> & {
	fallback: string;
	src: string;
	alt: string;
};

export const Avatar = (props: Props) => {
	const [error, setError] = useState(false);
	const { fallback, ...rest } = props;
	return (
		<div className="rounded-full grid place-items-center size-14 bg-yellow-200 *:rounded-full">
			{error && <strong>{fallback}</strong>}
			{!error && <img {...rest} onError={() => setError(true)} />}
		</div>
	);
};
