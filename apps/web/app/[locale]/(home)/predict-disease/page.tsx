"use client";

import { clientAPI } from "@ikseer/api/utils/api.client";
import { Button } from "@ikseer/ui/components/ui/button";
import { Label } from "@ikseer/ui/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ikseer/ui/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const symptoms = {
	itching: 0,
	skin_rash: 1,
	nodal_skin_eruptions: 2,
	continuous_sneezing: 3,
	shivering: 4,
	chills: 5,
	joint_pain: 6,
	stomach_pain: 7,
	acidity: 8,
	ulcers_on_tongue: 9,
	muscle_wasting: 10,
	vomiting: 11,
	burning_micturition: 12,
	"spotting_ urination": 13,
	fatigue: 14,
	weight_gain: 15,
	anxiety: 16,
	cold_hands_and_feets: 17,
	mood_swings: 18,
	weight_loss: 19,
	restlessness: 20,
	lethargy: 21,
	patches_in_throat: 22,
	irregular_sugar_level: 23,
	cough: 24,
	high_fever: 25,
	sunken_eyes: 26,
	breathlessness: 27,
	sweating: 28,
	dehydration: 29,
	indigestion: 30,
	headache: 31,
	yellowish_skin: 32,
	dark_urine: 33,
	nausea: 34,
	loss_of_appetite: 35,
	pain_behind_the_eyes: 36,
	back_pain: 37,
	constipation: 38,
	abdominal_pain: 39,
	diarrhoea: 40,
	mild_fever: 41,
	yellow_urine: 42,
	yellowing_of_eyes: 43,
	acute_liver_failure: 44,
	fluid_overload: 45,
	swelling_of_stomach: 46,
	swelled_lymph_nodes: 47,
	malaise: 48,
	blurred_and_distorted_vision: 49,
	phlegm: 50,
	throat_irritation: 51,
	redness_of_eyes: 52,
	sinus_pressure: 53,
	runny_nose: 54,
	congestion: 55,
	chest_pain: 56,
	weakness_in_limbs: 57,
	fast_heart_rate: 58,
	pain_during_bowel_movements: 59,
	pain_in_anal_region: 60,
	bloody_stool: 61,
	irritation_in_anus: 62,
	neck_pain: 63,
	dizziness: 64,
	cramps: 65,
	bruising: 66,
	obesity: 67,
	swollen_legs: 68,
	swollen_blood_vessels: 69,
	puffy_face_and_eyes: 70,
	enlarged_thyroid: 71,
	brittle_nails: 72,
	swollen_extremeties: 73,
	excessive_hunger: 74,
	extra_marital_contacts: 75,
	drying_and_tingling_lips: 76,
	slurred_speech: 77,
	knee_pain: 78,
	hip_joint_pain: 79,
	muscle_weakness: 80,
	stiff_neck: 81,
	swelling_joints: 82,
	movement_stiffness: 83,
	spinning_movements: 84,
	loss_of_balance: 85,
	unsteadiness: 86,
	weakness_of_one_body_side: 87,
	loss_of_smell: 88,
	bladder_discomfort: 89,
	"foul_smell_of urine": 90,
	continuous_feel_of_urine: 91,
	passage_of_gases: 92,
	internal_itching: 93,
	"toxic_look_(typhos)": 94,
	depression: 95,
	irritability: 96,
	muscle_pain: 97,
	altered_sensorium: 98,
	red_spots_over_body: 99,
	belly_pain: 100,
	abnormal_menstruation: 101,
	"dischromic _patches": 102,
	watering_from_eyes: 103,
	increased_appetite: 104,
	polyuria: 105,
	family_history: 106,
	mucoid_sputum: 107,
	rusty_sputum: 108,
	lack_of_concentration: 109,
	visual_disturbances: 110,
	receiving_blood_transfusion: 111,
	receiving_unsterile_injections: 112,
	coma: 113,
	stomach_bleeding: 114,
	distention_of_abdomen: 115,
	history_of_alcohol_consumption: 116,
	"fluid_overload.1": 117,
	blood_in_sputum: 118,
	prominent_veins_on_calf: 119,
	palpitations: 120,
	painful_walking: 121,
	pus_filled_pimples: 122,
	blackheads: 123,
	scurring: 124,
	skin_peeling: 125,
	silver_like_dusting: 126,
	small_dents_in_nails: 127,
	inflammatory_nails: 128,
	blister: 129,
	red_sore_around_nose: 130,
	yellow_crust_ooze: 131,
};

type Prediction = Awaited<ReturnType<typeof clientAPI.ai.predictDisease>>;

export default function PredictDisease() {
	const [data, setData] = useState<Prediction>();
	const [selected, setSelected] = useState<string[]>([]);
	const unselected = Object.keys(symptoms).filter(
		(key) => !selected.includes(key),
	);

	const predict = useMutation({
		mutationFn: clientAPI.ai.predictDisease,
		onSuccess(data) {
			const re = /[\['\]]/g;
			setData({
				...data,
				precaution: [
					data.precaution[0].flatMap((item) =>
						item.split(",").map((i) => i.replace(re, "").trim()),
					),
				],
				medication: data.medication.flatMap((item) =>
					item.split(",").map((i) => i.replace(re, "").trim()),
				),
				diet: data.diet.flatMap((item) =>
					item.split(",").map((i) => i.replace(re, "").trim()),
				),
				workout: data.workout.flatMap((item) =>
					item.split(",").map((i) => i.replace(re, "").trim()),
				),
			});
		},
	});

	// biome-ignore lint/correctness/useExhaustiveDependencies:
	useEffect(() => {
		setData(undefined);
	}, [selected]);

	return (
		<div className="page-container">
			<h1 className="text-3xl font-bold mb-3">Diagnosis of Diseases</h1>
			<p className="mb-8 text-muted-foreground">
				You as a doctor can enter the patient's diagnosis and symptoms to
				predict his disease.
				<br />
				Please note that this prediction is not fully reliable but identifies
				disease right in most cases.
			</p>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<div className="mb-6 flex flex-col gap-2">
					<Label>Symptoms</Label>
					<Select
						value={""}
						onValueChange={(val) => {
							setSelected([val, ...selected]);
						}}
					>
						<SelectTrigger>
							<SelectValue placeholder="Select a symptom" />
						</SelectTrigger>
						<SelectContent>
							{unselected.map((key) => (
								<SelectItem key={key} value={key}>
									{key}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<p className="text-muted-foreground text-sm">
						Select from this list of symptoms.
					</p>
				</div>
				<div className="mb-8">
					<h3 className="font-semibold mb-2">Selected symptoms:</h3>
					{selected.length ? (
						<div className="flex flex-col gap-2">
							{selected.map((key) => (
								<div
									key={key}
									className="w-full bg-muted p-2 rounded-md flex items-center justify-between"
								>
									<span>{key}</span>
									<Button
										iconOnly
										size="sm"
										variant={"ghost"}
										className="hover:text-red-500"
										onClick={() => {
											setSelected(selected.filter((item) => item !== key));
										}}
									>
										<X size={16} />
									</Button>
								</div>
							))}
						</div>
					) : (
						<p className="text-muted-foreground">
							Please select at least one symptom
						</p>
					)}
				</div>
				<Button
					isLoading={predict.isPending}
					disabled={selected.length === 0}
					onClick={() => {
						predict.mutate(selected);
					}}
				>
					Diagnose
				</Button>

				{data && (
					<div className="mt-8">
						<DataTable data={data} />
					</div>
				)}
			</form>
		</div>
	);
}

const DataTable = ({ data }: { data: Prediction }) => {
	return (
		<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
			<thead className="bg-gray-50 dark:bg-gray-950">
				<tr>
					<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Category
					</th>
					<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Details
					</th>
				</tr>
			</thead>
			<tbody className="divide-y divide-gray-200 dark:divide-gray-800">
				<tr>
					<td className="px-6 py-4 whitespace-nowrap">Predicted Disease</td>
					<td className="px-6 py-4 whitespace-nowrap">
						{data.predicted_disease}
					</td>
				</tr>
				<tr>
					<td className="px-6 py-4 whitespace-nowrap">Description</td>
					<td className="px-6 py-4 whitespace-nowrap">{data.description}</td>
				</tr>
				<tr>
					<td className="px-6 py-4 whitespace-nowrap">Precaution</td>
					<td className="px-6 py-4 whitespace-nowrap">
						<ul className="list-disc list-inside">
							{data.precaution[0].map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</td>
				</tr>
				<tr>
					<td className="px-6 py-4 whitespace-nowrap">Medication</td>
					<td className="px-6 py-4 whitespace-nowrap">
						<ul className="list-disc list-inside">
							{data.medication.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</td>
				</tr>
				<tr>
					<td className="px-6 py-4 whitespace-nowrap">Diet</td>
					<td className="px-6 py-4 whitespace-nowrap">
						<ul className="list-disc list-inside">
							{data.diet.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</td>
				</tr>
				<tr>
					<td className="px-6 py-4 whitespace-nowrap">Workout</td>
					<td className="px-6 py-4 whitespace-nowrap">
						<ul className="list-disc list-inside">
							{data.workout.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</td>
				</tr>
			</tbody>
		</table>
	);
};
