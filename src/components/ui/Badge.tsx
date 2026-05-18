import {type HTMLAttributes} from 'react';

type BadgeVariant = 'green' | 'yellow' | 'red' | 'blue' | 'gray';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
	variant?: BadgeVariant;
	icon?: React.ReactNode;
}

const variants: Record<BadgeVariant, string> = {
	green: 'bg-forest-50  text-forest-700  border-forest-200',
	yellow: 'bg-yellow-50  text-yellow-800  border-yellow-200',
	red: 'bg-red-50     text-red-700     border-red-200',
	blue: 'bg-blue-50    text-blue-700    border-blue-200',
	gray: 'bg-gray-100   text-gray-600    border-gray-200',
};

/** Small pill badge — used for macro status, goal labels, food tags */
export function Badge({
	variant = 'gray',
	icon,
	className = '',
	children,
	...props
}: Readonly<BadgeProps>) {
	return (
		<span
			className={[
				'inline-flex items-center gap-1 text-caption font-medium px-2 py-0.5 rounded-full border',
				variants[variant],
				className,
			]
				.filter(Boolean)
				.join(' ')}
			{...props}>
			{icon && <span className="text-[12px] leading-none">{icon}</span>}
			{children}
		</span>
	);
}

/**
 * Macro status badge — automatically picks color from the
 * macro calorie indicator logic defined in the SRS (GOAL-04):
 *
 *   green  → within ±30 kcal of target
 *   yellow → 30–150 kcal over
 *   red    → >150 kcal over
 *   blue   → under target
 */
export function MacroStatusBadge({delta}: Readonly<{delta: number}>) {
	if (delta < -30)
		return <Badge variant="blue">↓ Under by {Math.abs(delta)} kcal</Badge>;
	if (Math.abs(delta) <= 30)
		return <Badge variant="green">✓ On target</Badge>;
	if (delta <= 150) return <Badge variant="yellow">↑ Slightly over</Badge>;
	return <Badge variant="red">↑ Over by {delta} kcal</Badge>;
}
