"use client";

import clsx from "clsx";

import "./CustomInput.css";

const CustomInput = (props: {
	placeholder: string;
	required: boolean;
	val: string;
	type: string;
	name: string;
	className?: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
	return (
		<div className={clsx("relative flex items-end", props.className)}>
			<label
				htmlFor={props.name}
				className={clsx(
					"text-white absolute left-3 top-1/2 text-xs whitespace-nowrap",
					"transition-all duration-200 pointer-events-none",
					"lg:text-base",
					props.val.length > 0
						? "-translate-y-[160%] bg-black text-sm"
						: "-translate-y-1/2"
				)}
			>
				{props.placeholder}
				{props.required ? "*" : ""}
			</label>
			{props.type === "tel" ? (
				<input
					className={clsx(
						"text-white bg-transparent border border-gray-100 rounded-sm px-3 py-2 w-full",
						"focus:outline-none"
					)}
					required={props.required ? true : false}
					onChange={props.onChange}
					value={props.val}
					type="number"
					maxLength={10}
					inputMode="numeric"
					name={props.name}
					id={props.name}
					autoComplete="one-time-code"
				/>
			) : (
				<input
					className={clsx(
						"text-white bg-transparent border border-gray-100 rounded-sm px-3 py-2 w-full",
						"focus:outline-none"
					)}
					required={props.required ? true : false}
					onChange={props.onChange}
					value={props.val}
					type={props.type}
					name={props.name}
					id={props.name}
					autoComplete="one-time-code"
				/>
			)}
		</div>
	);
};

export default CustomInput;
