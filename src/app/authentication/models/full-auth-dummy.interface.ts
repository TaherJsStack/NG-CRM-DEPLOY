import { IHair, ICrypto, ICompany, IBank, IAddress } from "./index";

export interface IFUllAuthDummy {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair:  IHair;
    domain: string;
    ip: string;
    address: IAddress;
    macAddress: string;
    university: string;
    bank: IBank;
    company: ICompany,
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: ICrypto
}