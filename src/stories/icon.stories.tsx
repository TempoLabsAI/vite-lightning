// [build] library: 'lightning-design-system'
import { Icon, IconSettings } from "@salesforce/design-system-react";

const meta = {
  title: "Lightning/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    category: {
      control: "select",
      options: ["action", "custom", "doctype", "standard", "utility"],
    },
    name: { control: "text" },
    size: {
      control: "select",
      options: ["xx-small", "x-small", "small", "medium", "large"],
    },
    colorVariant: {
      control: "select",
      options: [
        "base", 
        "default", 
        "warning", 
        "error", 
        "light", 
        "success"
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

export const Utility = {
  render: (args) => <Icon {...args} />,
  args: {
    category: "utility",
    name: "announcement",
    size: "medium",
    assistiveText: { label: "Announcement" },
  },
};

export const Action = {
  render: (args) => <Icon {...args} />,
  args: {
    category: "action",
    name: "approval",
    size: "medium",
    assistiveText: { label: "Approval" },
  },
};

export const Standard = {
  render: (args) => <Icon {...args} />,
  args: {
    category: "standard",
    name: "account",
    size: "medium",
    assistiveText: { label: "Account" },
  },
};

export const Doctype = {
  render: (args) => <Icon {...args} />,
  args: {
    category: "doctype",
    name: "audio",
    size: "medium",
    assistiveText: { label: "Audio" },
  },
};

export const Custom = {
  render: (args) => <Icon {...args} />,
  args: {
    category: "custom",
    name: "custom1",
    size: "medium",
    assistiveText: { label: "Custom Icon" },
  },
};
