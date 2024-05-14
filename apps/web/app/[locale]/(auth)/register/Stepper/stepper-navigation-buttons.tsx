"use client";
import { useRegisterContext } from "../context/RegisterContext";

export default function StepperNavigationButtons() {
	const { triggerFunction: ref } = useRegisterContext();

	return (
		<div className="mt-5">
			{/*Don't remove this because querySelector issues */}
			<button type="button" className="invisible" data-hs-stepper-back-btn>
				prev
			</button>
			<button
				ref={ref}
				type="button"
				className=" py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
				data-hs-stepper-next-btn
			>
				Next
			</button>

			<button
				type="button"
				className="hidden py-2 px-3  items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
				data-hs-stepper-finish-btn
			>
				finish
			</button>
		</div>
	);
}
