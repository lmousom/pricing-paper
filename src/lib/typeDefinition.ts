import React from "react";


interface Plan {
    title: String;
    price: String;
}

export declare interface Feature {
    name: String;
    applicable: Boolean;
}

type ButtonValue = String;

type ButtonDisabled = Boolean;

type Features = Feature[];

interface Styles {
    planCard?: React.CSSProperties; 
    planHeroCard?: React.CSSProperties; 
    planCardTitle?: React.CSSProperties; 
    planCardPrice?: React.CSSProperties; 
    planButton?: React.CSSProperties; 
    badge?: React.CSSProperties; 
}


export declare interface PricingProps {
    children?: React.ReactNode;
    firstPlan: Plan;
    popularPlan: Plan;
    lastPlan: Plan;
    firstFeatures: Features;
    popularFeatures: Features;
    lastFeatures: Features;
    styles?: Styles;
    buttonValue: ButtonValue;
    buttonDisabled?: ButtonDisabled;
    handleClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

}

export declare interface ButtonProps {
    buttonStyle?: React.CSSProperties;
    disabled?: Boolean;
    title: String;
    handleClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}