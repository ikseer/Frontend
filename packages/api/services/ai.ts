import type { AxiosInstance } from "axios";

export class AI_API {
	constructor(private http: AxiosInstance) {}

	predictDisease = async (symptoms: string[]) => {
		return await this.http
			.post<{
				predicted_disease: string;
				description: string;
				precaution: string[][];
				medication: string[];
				diet: string[];
				workout: string[];
			}>("/ai/predict/", symptoms)
			.then((res) => res.data);
	};
}
