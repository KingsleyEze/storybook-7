import React from "react"
import { ReactComponent as CaretIcon } from "./assets/caret.svg"
import { ReactComponent as BookmarkIcon } from "./assets/bookmark.svg"
import Button from "../Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    text: { control: "text" },
    icon: { table: { disable: true } },
    iconPosition: { table: { disable: true } },
    disabled: { control: "boolean" },
    theme: { control: "select", options: ["primary", "secondary"] },
  },
  parameters: {
    actions: {
      disabled: true,
    },
  },
}

const Template = ({ text, icon, ...args }) => (
    <Button text={text || "Button"} icon={icon} {...args} />
)

// Primary Button Stories

export const Primary = Template.bind({})
Primary.args = {
  theme: "primary",
}

export const PrimaryWithIcon = Template.bind({})
PrimaryWithIcon.args = {
  icon: <BookmarkIcon />,
  theme: "primary",
  iconPosition: "start",
}

export const PrimaryWithCaret = Template.bind({})
PrimaryWithCaret.args = {
  icon: <CaretIcon />,
  theme: "primary",
  iconPosition: "end",
}

// Secondary Button Stories

export const Secondary = Template.bind({})
Secondary.args = {
  theme: "secondary",
}

export const SecondaryWithIcon = Template.bind({})
SecondaryWithIcon.args = {
  icon: <BookmarkIcon />,
  theme: "secondary",
  iconPosition: "start",
}

export const SecondaryWithCaret = Template.bind({})
SecondaryWithCaret.args = {
  icon: <CaretIcon />,
  theme: "secondary",
  iconPosition: "end",
}
