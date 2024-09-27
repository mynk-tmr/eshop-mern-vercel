type ActionFn = () => void | Promise<void>;

declare global {
	interface Document {
		startViewTransition(action: ActionFn): Promise<void>;
	}
}

export async function startViewTransition(action: ActionFn) {
	if (document.startViewTransition) {
		document.startViewTransition(action);
	} else {
		action();
	}
}
