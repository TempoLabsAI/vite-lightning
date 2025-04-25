// [build] library: 'lightning-design-system'
import { Checkbox, IconSettings } from "@salesforce/design-system-react";

const meta = {
  title: "Lightning/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    errorText: { control: "text" },
    onChange: { action: "changed" },
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

export const Basic = {
  render: (args) => <Checkbox {...args} />,
  args: {
    label: "Checkbox Label",
    checked: false,
  },
};

export const Checked = {
  render: (args) => <Checkbox {...args} />,
  args: {
    label: "Checked Checkbox",
    checked: true,
  },
};

export const Disabled = {
  render: (args) => <Checkbox {...args} />,
  args: {
    label: "Disabled Checkbox",
    disabled: true,
  },
};

export const DisabledChecked = {
  render: (args) => <Checkbox {...args} />,
  args: {
    label: "Disabled Checked Checkbox",
    disabled: true,
    checked: true,
  },
};

export const WithError = {
  render: (args) => <Checkbox {...args} />,
  args: {
    label: "Checkbox with Error",
    errorText: "This field has an error",
  },
};
