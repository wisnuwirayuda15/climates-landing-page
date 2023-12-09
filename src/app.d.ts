declare global {
	interface Document {
		startViewTransition?(callback: () => Promise<void>): void;
	}
	namespace App {}
}

export {};
