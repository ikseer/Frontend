"use client";

import { pharmaciesHooks } from "@ikseer/api/hooks/pharmacies";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Skeleton } from "@ikseer/ui/components/ui/skeleton";
import Image from "next/image";

export default function OurPharmacies() {
	const { data, isLoading } = pharmaciesHooks.useInifinite({
		pagination: { pageSize: 100, pageIndex: 0 },
	});
	if (isLoading)
		return (
			<main className="min-hero w-full">
				<Skeleton className="w-full h-full" />
			</main>
		);

	console.log(data?.pages);

	return (
		<main className="max-w-screen max-h-[calc(100vh-60px)]">
			{data && (
				//@ts-ignore
				<MapContainer
					center={[51.505, -0.09]}
					zoom={13}
					scrollWheelZoom={true}
					className="min-hero"
				>
					<TileLayer
						//@ts-ignore
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					{Array.isArray(data?.pages?.[0]) &&
						data.pages?.[0].map((pharmacy) => (
							<Marker
								key={pharmacy.latitude}
								position={[
									Number(pharmacy.latitude) || 0,
									Number(pharmacy.longitude) || 0,
								]}
							>
								<Popup>
									{pharmacy.image && (
										<Image
											src={pharmacy.image}
											alt="pharmacy"
											width={200}
											height={200}
										/>
									)}
									<ul className="divide-y divide-gray-200">
										<li className="py-2">
											<span className="font-semibold">Name:</span>{" "}
											{pharmacy.name}
										</li>
										<li className="py-2">
											<span className="font-semibold">Location:</span>{" "}
											{pharmacy.location}
										</li>
										<li className="py-2">
											<span className="font-semibold">Phone:</span>{" "}
											{pharmacy.phone}
										</li>
										<li className="py-2">
											<span className="font-semibold">Open Time:</span>
											{pharmacy.open_time}
										</li>
										<li className="py-2">
											<span className="font-semibold">Close Time:</span>{" "}
											{pharmacy.close_time}
										</li>
									</ul>
								</Popup>
							</Marker>
						))}
				</MapContainer>
			)}
		</main>
	);
}
