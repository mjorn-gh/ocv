import { logoShapes } from './logo';

// Single logo pieces reused as background decoration.
export const pieces = {
	cap: logoShapes[2].d,
	kite: logoShapes[4].d,
};

export type Piece = {
	shape: keyof typeof pieces | 'circle';
	/** Top-left of the piece's 24×24 grid on the 1280px-wide stage. */
	x: number;
	y: number;
	/** Pixels per grid unit. */
	scale: number;
	rotate?: number;
};

const circle = (cx: number, cy: number, r: number): Piece => ({
	shape: 'circle',
	x: cx - r,
	y: cy - r,
	scale: r / 12,
});

/** Small, blurred pieces far behind everything. */
export const farPieces: Piece[] = [
	{ shape: 'cap', x: 600, y: 170, scale: 3.5, rotate: -30 },
	{ shape: 'kite', x: 1180, y: 760, scale: 3.5, rotate: 20 },
	circle(36, 1240, 26),
	{ shape: 'kite', x: 460, y: 800, scale: 3, rotate: -40 },
	circle(900, 1870, 36),
];

/** Large shaded pieces in front of the glow, behind the glass. */
export const nearPieces: Piece[] = [
	{ shape: 'kite', x: -250, y: 600, scale: 16 },
	{ shape: 'cap', x: -399, y: 1513, scale: 46, rotate: -35 },
	circle(520, 770, 90),
	{ shape: 'cap', x: 520, y: 1000, scale: 20 },
	{ shape: 'kite', x: 800, y: 820, scale: 9 },
	{ shape: 'cap', x: 1310, y: 1040, scale: 26, rotate: 90 },
	{ shape: 'kite', x: 520, y: 1560, scale: 14 },
	circle(150, 2600, 120),
	circle(700, 2070, 170),
	{ shape: 'kite', x: 960, y: 2420, scale: 12, rotate: 15 },
];

/** Soft light spots: centre x/y, radius. */
export const glows: { x: number; y: number; r: number; opacity: number }[] = [
	{ x: 1000, y: 400, r: 480, opacity: 1 },
	{ x: 560, y: 1120, r: 380, opacity: 0.7 },
	{ x: 900, y: 1660, r: 300, opacity: 0.5 },
	{ x: 360, y: 2500, r: 360, opacity: 0.6 },
];
