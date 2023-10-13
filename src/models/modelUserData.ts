import mongoose from "mongoose";

export interface modelUserSchemaType extends mongoose.Document {
	uid: {
		userID: string;
		userTransactionID: string;
	};
	userName: {
		firstName: string;
		middleName: string;
		lastName: string;
	};
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
	gender: string;
	state: {
		birth: string;
		current: string;
		audition: string;
	};
	mode: string;
	height: {
		feet: string;
		inches: string;
	};
	pictures: {
		closeUp: string | null;
		// midLength: File | null;
		// fullLength: File | null;
		naturalShot: string | null;
	};
	officialDetails: {
		pancard: {
			id: string;
			image: string | null;
		};
		passport: {
			id: string;
			image: string | null;
		};
		aadhar: {
			id: string;
			image: string | null;
		};
	};
	paymentStatus: string;
}

const ModelUserSchema = new mongoose.Schema<modelUserSchemaType>(
	{
		uid: {
			userID: {
				type: String,
				required: true,
			},
			userTransactionID: {
				type: String,
				required: true,
			},
		},
		userName: {
			firstName: {
				type: String,
				required: true,
				maxlength: 60,
			},
			middleName: {
				type: String,
				maxlength: 60,
			},
			lastName: {
				type: String,
				required: true,
				maxlength: 60,
			},
		},
		contactDetails: {
			mobileNumber: {
				type: Number,
				required: true,
			},
			alternateMobileNumber: {
				type: Number,
			},
			email: {
				type: String,
			},
		},
		dateOfBirth: {
			day: {
				type: String,
				required: true,
			},
			month: {
				type: String,
				required: true,
			},
			year: {
				type: String,
				required: true,
			},
			age: {
				type: Number,
				required: true,
			},
		},
		gender: {
			type: String,
			required: true,
		},
		state: {
			birth: {
				type: String,
				required: true,
			},
			current: {
				type: String,
				required: true,
			},
			audition: {
				type: String,
				required: true,
			},
		},
		mode: {
			type: String,
			required: true,
		},
		height: {
			feet: {
				type: String,
				required: true,
			},
			inches: {
				type: String,
				required: true,
			},
		},
		pictures: {
			closeUp: {
				type: String,
				required: false,
			},
			// midLength: {
			// 	type: String,
			// 	required: true,
			// },
			// fullLength: {
			// 	type: File,
			// 	required: true,
			// },
			naturalShot: {
				type: String,
				required: false,
			},
		},
		officialDetails: {
			pancard: {
				id: {
					type: String,
					required: false,
				},
				image: {
					type: String,
					required: false,
				},
			},
			passport: {
				id: {
					type: String,
					required: false,
				},
				image: {
					type: String,
					required: false,
				},
			},
			aadhar: {
				id: {
					type: String,
					required: true,
				},
				image: {
					type: String,
					required: false,
				},
			},
		},
		paymentStatus: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.models.ModelSchema ||
	mongoose.model<modelUserSchemaType>("ModelSchema", ModelUserSchema);
