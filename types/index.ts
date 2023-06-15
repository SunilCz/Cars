import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: String;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
}