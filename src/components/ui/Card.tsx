import {type HTMLAttributes} from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	/** Tinted green surface — used for meal block headers, active states */
	tinted?: boolean;
	/** Remove all padding — useful when you want full-bleed content inside */
	flush?: boolean;
}

export function Card({
	tinted = false,
	flush = false,
	className = '',
	children,
	...props
}: Readonly<CardProps>) {
	return (
		<div
			className={[
				'border rounded-card',
				tinted
					? 'bg-forest-50 border-forest-200'
					: 'bg-white border-forest-200/60 dark:bg-gray-900 dark:border-forest-900',
				flush ? '' : 'p-4',
				className,
			]
				.filter(Boolean)
				.join(' ')}
			{...props}>
			{children}
		</div>
	);
}

/** Lightweight section inside a Card — adds a top divider + tighter padding */
export function CardSection({
	className = '',
	children,
	...props
}: Readonly<HTMLAttributes<HTMLDivElement>>) {
	return (
		<div
			className={[
				'border-t border-forest-200/60 dark:border-forest-900 pt-3',
				className,
			]
				.filter(Boolean)
				.join(' ')}
			{...props}>
			{children}
		</div>
	);
}

/** Card header row — title left, optional action right */
export function CardHeader({
	title,
	action,
	className = '',
}: Readonly<{
	title: React.ReactNode;
	action?: React.ReactNode;
	className?: string;
}>) {
	return (
		<div
			className={['flex items-center justify-between mb-3', className]
				.filter(Boolean)
				.join(' ')}>
			<span className="text-heading font-medium text-forest-900 dark:text-forest-200">
				{title}
			</span>
			{action && <div>{action}</div>}
		</div>
	);
}
