// [build] library: 'lightning-design-system'
import { Button, IconSettings } from "@salesforce/design-system-react";

const meta = {
  title: "Lightning/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "base",
        "neutral",
        "brand",
        "destructive",
        "success",
        "text-destructive",
        "outline-brand",
        "icon",
      ],
    },
    iconPosition: {
      control: "select",
      options: ["left", "right"],
    },
    iconSize: {
      control: "select",
      options: ["x-small", "small", "medium", "large"],
    },
    iconCategory: {
      control: "select",
      options: ["utility", "action", "custom", "doctype", "standard"],
    },
  },
  decorators: [
    (Story) => (
      <IconSettings iconPath="/assets/icons">
        <Story />
      </IconSettings>
    ),
  ],
};

export default meta;

export const Base = {
render: (args) => <Button {...args} />,
  args: {
    label: "Button",
    variant: "base",
  },
};

export const Brand = {
  render: (args) => <Button {...args} />,
  args: {
    label: "Button",
    variant: "brand",
  },
};

export const Neutral = {
  render: (args) => <Button {...args} />,
  args: {
    label: "Button",
    variant: "neutral",
  },
};

export const Destructive = {
  render: (args) => <Button {...args} />,
  args: {
    label: "Button",
    variant: "destructive",
  },
};

export const OutlineBrand = {
  render: (args) => <Button {...args} />,
  args: {
    label: "Button",
    variant: "outline-brand",
  },
};

export const TextDestructive = {
  render: (args) => <Button {...args} />,
  args: {
    label: "Button",
    variant: "text-destructive",
  },
};

export const WithLeftIcon = {
  render: (args) => <Button {...args} />,
  args: {
    label: "Button with Icon",
    variant: "neutral",
    iconName: "email",
    iconCategory: "utility",
    iconPosition: "left",
  },
};

export const WithRightIcon = {
  render: (args) => <Button {...args} />,
  args: {
    label: "Button with Icon",
    variant: "neutral",
    iconName: "email",
    iconCategory: "utility",
    iconPosition: "right",
  },
};

export const IconButton = {
  render: (args) => <Button {...args} />,
  args: {
    assistiveText: { icon: "Email" },
    iconName: "email",
    iconCategory: "utility",
    variant: "icon",
  },
};

export const Disabled = {
  render: (args) => <Button {...args} />,
  args: {
    label: "Disabled Button",
    variant: "brand",
    disabled: true,
  },
};

export const Success = {
  render: (args) => <Button {...args} />,
  args: {
    label: "Success Button",
    variant: "success",
  },
};