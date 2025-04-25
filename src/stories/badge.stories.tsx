// [build] library: 'lightning-design-system'
import { Badge, IconSettings } from "@salesforce/design-system-react";

const meta = {
  title: "Lightning/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: [
        "default",
        "success",
        "warning",
        "error",
        "inverse",
        "light-inverse",
      ],
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

export const Default = {
  render: (args) => <Badge {...args} />,
  args: {
    content: "Badge Label",
    color: "default",
  },
};

export const Success = {
  render: (args) => <Badge {...args} />,
  args: {
    content: "Success",
    color: "success",
  },
};

export const Warning = {
  render: (args) => <Badge {...args} />,
  args: {
    content: "Warning",
    color: "warning",
  },
};

export const Error = {
  render: (args) => <Badge {...args} />,
  args: {
    content: "Error",
    color: "error",
  },
};

export const Inverse = {
  render: (args) => <Badge {...args} />,
  args: {
    content: "Inverse",
    color: "inverse",
  },
};
