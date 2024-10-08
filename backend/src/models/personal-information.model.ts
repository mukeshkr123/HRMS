import { Document, Schema, model } from "mongoose";

export interface IPersonalInformation extends Document {
    firstName: string;
    middleName?: string;
    lastName: string;
    preferredName?: string;
    dateOfBirth: Date;
    gender: string;
    maritalStatus: string;
    ssn: string;
}

const personalInformationSchema = new Schema<IPersonalInformation>(
    {
        firstName: { type: String, required: true },
        middleName: { type: String },
        lastName: { type: String, required: true },
        preferredName: { type: String },
        dateOfBirth: { type: Date, required: true },
        gender: { type: String, required: true },
        maritalStatus: { type: String, required: true },
        ssn: { type: String, required: true, minlength: 9, maxlength: 9 },
    },
);

export const PersonalInformation = model<IPersonalInformation>(
    "PersonalInformation",
    personalInformationSchema
);
