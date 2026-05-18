import {
	forwardRef,
	type InputHTMLAttributes,
	type TextareaHTMLAttributes,
} from 'react';

/* ─── shared style tokens ─────────────────────────────────────────────── */

const inputBase = [
	'w-full rounded-btn border bg-white dark:bg-gray-900',
	'border-forest-200/80 dark:border-forest-900',
	'text-body text-forest-900 dark:text-forest-100 placeholder:text-forest-400/70',
	'transition-colors duration-150',
	'focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent',
	'disabled:opacity-50 disabled:cursor-not-allowed',
].join(' ');

/* ─── Input ───────────────────────────────────────────────────────────── */

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	hint?: string;
	error?: string;
	/** Icon shown on the left inside the input */
	leftAddon?: React.ReactNode;
	/** Unit label shown on the right — e.g. "kcal", "kg", "g" */
	rightAddon?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			label,
			hint,
			error,
			leftAddon,
			rightAddon,
			className = '',
			id,
			...props
		},
		ref,
	) => {
		const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

		return (
			<div className="flex flex-col gap-1">
				{label && (
					<label
						htmlFor={inputId}
						className="text-caption font-medium text-forest-700 dark:text-forest-300">
						{label}
					</label>
				)}

				<div className="relative flex items-center">
					{leftAddon && (
						<span className="absolute left-3 text-forest-400 text-body pointer-events-none">
							{leftAddon}
						</span>
					)}

					<input
						ref={ref}
						id={inputId}
						className={[
							inputBase,
							'py-2',
							leftAddon ? 'pl-9 pr-3' : 'px-3',
							rightAddon ? 'pr-14' : '',
							error ? 'border-red-400 focus:ring-red-400' : '',
							className,
						]
							.filter(Boolean)
							.join(' ')}
						{...props}
					/>

					{rightAddon && (
						<span className="absolute right-3 text-caption text-forest-400 pointer-events-none">
							{rightAddon}
						</span>
					)}
				</div>

				{(hint || error) && (
					<p
						className={[
							'text-caption',
							error ? 'text-red-600' : 'text-forest-400',
						].join(' ')}>
						{error ?? hint}
					</p>
				)}
			</div>
		);
	},
);

Input.displayName = 'Input';

/* ─── Textarea ────────────────────────────────────────────────────────── */

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	hint?: string;
	error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({label, hint, error, className = '', id, ...props}, ref) => {
		const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

		return (
			<div className="flex flex-col gap-1">
				{label && (
					<label
						htmlFor={inputId}
						className="text-caption font-medium text-forest-700 dark:text-forest-300">
						{label}
					</label>
				)}

				<textarea
					ref={ref}
					id={inputId}
					rows={3}
					className={[
						inputBase,
						'px-3 py-2 resize-none',
						error ? 'border-red-400 focus:ring-red-400' : '',
						className,
					]
						.filter(Boolean)
						.join(' ')}
					{...props}
				/>

				{(hint || error) && (
					<p
						className={[
							'text-caption',
							error ? 'text-red-600' : 'text-forest-400',
						].join(' ')}>
						{error ?? hint}
					</p>
				)}
			</div>
		);
	},
);

Textarea.displayName = 'Textarea';

/* ─── Select ──────────────────────────────────────────────────────────── */

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
	label?: string;
	hint?: string;
	error?: string;
	options: {value: string; label: string}[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
	({label, hint, error, options, className = '', id, ...props}, ref) => {
		const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

		return (
			<div className="flex flex-col gap-1">
				{label && (
					<label
						htmlFor={inputId}
						className="text-caption font-medium text-forest-700 dark:text-forest-300">
						{label}
					</label>
				)}

				<select
					ref={ref}
					id={inputId}
					className={[
						inputBase,
						'px-3 py-2 appearance-none cursor-pointer',
						error ? 'border-red-400 focus:ring-red-400' : '',
						className,
					]
						.filter(Boolean)
						.join(' ')}
					{...props}>
					{options.map((o) => (
						<option key={o.value} value={o.value}>
							{o.label}
						</option>
					))}
				</select>

				{(hint || error) && (
					<p
						className={[
							'text-caption',
							error ? 'text-red-600' : 'text-forest-400',
						].join(' ')}>
						{error ?? hint}
					</p>
				)}
			</div>
		);
	},
);

Select.displayName = 'Select';

export {Input, Select, Textarea};
