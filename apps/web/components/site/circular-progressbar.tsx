import { otpTimer } from "@/lib/otp-time";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function TimerCircularProgressBar({
	isResetTimer,
	setIsResetTimer,
}: {
	isResetTimer: boolean;
	setIsResetTimer: Dispatch<SetStateAction<boolean>>;
}) {
	const totalDuration = 120;
	const initialTime = otpTimer.get() || totalDuration;
	const [timeLeft, setTimeLeft] = useState(initialTime);
	useEffect(() => {
		if (isResetTimer) {
			const newTime = totalDuration;
			otpTimer.set(newTime.toString(), "/");
			setTimeLeft(newTime);
			setIsResetTimer(false);
		}
	}, [isResetTimer, setIsResetTimer]);

	useEffect(() => {
		if (timeLeft > 0) {
			const interval = setInterval(() => {
				setTimeLeft((prevTimeLeft) => {
					const newTimeLeft = prevTimeLeft - 1;
					otpTimer.set(newTimeLeft.toString(), "/");
					return newTimeLeft;
				});
			}, 1000);
			return () => clearInterval(interval);
			// biome-ignore lint/style/noUselessElse: <explanation>
		} else {
			otpTimer.delete(); // Optional: Delete the timer cookie when timeLeft reaches 0
		}
	}, [timeLeft]);

	const percentage = (timeLeft / totalDuration) * 100;

	return (
		<section className="flex items-center justify-center gap-x-4">
			<div className="w-[80px] h-[80px]">
				<CircularProgressbar
					value={percentage}
					maxValue={100}
					text={`${Math.round(percentage)}%`}
				/>
			</div>
			<div className="text-xl dark:text-zinc-300 text-zinc-900 text-bold">
				<span className="text-2xl">{timeLeft}</span>
				&nbsp;seconds remaining
			</div>
		</section>
	);
}
