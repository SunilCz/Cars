import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: String;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" | "reset";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManuFacturerProps{
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
}

export interface CarProps{
city_mpg:number;
class:string;
combination_mpg:string;
cylinders:number;
displacement:number;
drive:string;
fuel_type:string;
highway_mpg:number;
make:string;
model:string;
transmission:string;
year:number;
}