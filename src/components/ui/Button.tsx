import {type ButtonHTMLAttributes, forwardRef} from 'react';

type Variant = 'primary' | 'ghost' | 'danger' | 'subtle';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: Variant;
	size?: Size;
	loading?: boolean;
	icon?: React.ReactNode;
	fullWidth?: boolean;
}

const base =
	'inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-400 focus-visible:ring-offset-2 cursor-pointer';

const variants: Record<Variant, string> = {
	primary:
		'bg-forest-700 text-forest-50 hover:bg-forest-900 active:scale-[0.97] rounded-btn',
	ghost: 'bg-transparent text-forest-700 border border-forest-700 hover:bg-forest-50 active:scale-[0.97] rounded-btn',
	danger: 'bg-transparent text-red-600 border border-red-300 hover:bg-red-50 active:scale-[0.97] rounded-btn',
	subtle: 'bg-forest-50 text-forest-700 hover:bg-forest-200 active:scale-[0.97] rounded-btn',
};

const sizes: Record<Size, string> = {
	sm: 'text-caption px-3 py-1.5',
	md: 'text-body   px-4 py-2',
	lg: 'text-body   px-5 py-2.5',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant = 'primary',
			size = 'md',
			loading = false,
			icon,
			fullWidth = false,
			children,
			className = '',
			disabled,
			...props
		},
		ref,
	) => {
		return (
			<button
				ref={ref}
				disabled={disabled || loading}
				className={[
					base,
					variants[variant],
					sizes[size],
					fullWidth ? 'w-full' : '',
					className,
				]
					.filter(Boolean)
					.join(' ')}
				{...props}>
				{loading ? (
					<span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
				) : (
					icon
				)}
				{children}
			</button>
		);
	},
);

Button.displayName = 'Button';
export default Button;
