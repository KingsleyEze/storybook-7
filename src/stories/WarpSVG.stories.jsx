import React from "react"
import WarpSVG from "../WarpSVG";

export default {
    title: 'WarpSVG',
    component: WarpSVG,
    argTypes: {
        initialArchValue: {
            control: 'number',
            description: 'Initial value of the arch effect',
            defaultValue: 0
        },
        min: {
            control: 'number',
            description: 'Minimum value for the arch effect slider',
            defaultValue: -100
        },
        max: {
            control: 'number',
            description: 'Maximum value for the arch effect slider',
            defaultValue: 100
        },
        step: {
            control: 'number',
            description: 'Step value for the arch effect slider',
            defaultValue: 1
        },
    }
};

const Template = (args) => <WarpSVG {...args} />;

export const SVGArchEffect = Template.bind({});
SVGArchEffect.args = {
    initialArchValue: 0,
    min: -100,
    max: 100,
    step: 1
};