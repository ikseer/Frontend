"use client";

import DoctorForm from "@/components/forms/doctor";
import type { doctorSchema } from "@ikseer/api/services/accounts";
import { Box, Menu } from "@mantine/core";
import { MantineReactTable } from "mantine-react-table";
import { useTranslations } from "next-intl";
import { useState } from "react";
import type { z } from "zod";
import useDoctorsTable from "./use-doctors-table";
import { doctorsHooks } from "@ikseer/api/hooks/accounts";

export default function DoctorsCRUDTable() {
	const [formState, setFormState] = useState<"update">();
	const [initialValues, setInitialValues] = useState<
		z.infer<typeof doctorSchema> & { id?: string }
	>();
	const t = useTranslations("Doctors");

	const update = doctorsHooks.useUpdate();

	const table = useDoctorsTable({
		tableOptions: {
			renderRowActionMenuItems: ({ row }) => (
				<Menu.Item
					onClick={() => {
						const doctor = row.original;
						setInitialValues({
							id: doctor.id,
							first_name: doctor.first_name,
							last_name: doctor.last_name,
							date_of_birth: new Date(doctor.date_of_birth),
							specialization: doctor.specialization,
							gender: doctor.gender,
							approved: doctor.approved,
							bio: doctor.bio,
							email: doctor.email,
							location: doctor.location,
							timezone: doctor.timezone,
						});
						setFormState("update");
					}}
				>
					{t("edit")}
				</Menu.Item>
			),
		},
	});

	return (
		<Box>
			<MantineReactTable table={table} />
			<DoctorForm
				onSubmit={(data) => {
					if (!initialValues?.id)
						throw new Error("Can't find the ID being updated");
					return update.mutateAsync({
						...data,
						id: initialValues?.id,
					});
				}}
				opened={!!formState}
				onSuccess={() => setFormState(undefined)}
				onClose={() => setFormState(undefined)}
				initialValues={initialValues}
			/>
		</Box>
	);
}
