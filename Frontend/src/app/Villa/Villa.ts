import { IVilla } from "./IVilla.interface";

export class Villa implements IVilla{
    id!: number;
    name!: string;
    rate!: number;
    occupancy!: number;
    sqft!: number;
    details!: string;
    image!: string;

}