export {};

declare global {
	interface ModelDataType {
		contactDetails: {
			mobileNumber: string;
			alternateMobileNumber: string;
			email: string;
		};
		dateOfBirth: {
			day: string;
			month: string;
			year: string;
			age: number;
		};
		userName: {
			firstName: string;
			middleName: string;
			lastName: string;
		};
		gender: string;
		state: {
			brith: string;
			current: string;
			audition: string;
		};
		height: {
			feet: string;
			inches: string;
		};
		pictures: {
			closeUp: File | null;
			midLength: File | null;
			fullLength: File | null;
			naturalShot: File | null;
		};
		officialDetails: {
			pancard: {
				id: string;
				image: File | null;
			};
			passport: {
				id: string;
				image: File | null;
			};
			aadhar: {
				id: string;
				image: File | null;
			};
		};
	}
}
