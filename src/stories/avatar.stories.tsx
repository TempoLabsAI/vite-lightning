// [build] library: 'lightning-design-system'
import { Avatar, IconSettings } from "@salesforce/design-system-react";

const meta = {
  title: "Lightning/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["user", "entity"],
    },
    size: {
      control: "select",
      options: ["x-small", "small", "medium", "large"],
    },
    presence: {
      control: "select",
      options: [undefined, "online", "busy", "focus", "offline", "away"],
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

export const User = {
  render: (args) => <Avatar {...args} />,
  args: {
    variant: "user",
    size: "medium",
    title: "User avatar",
  },
};

export const Entity = {
  render: (args) => <Avatar {...args} />,
  args: {
    variant: "entity",
    size: "medium",
    title: "Entity avatar",
  },
};

export const Small = {
  render: (args) => <Avatar {...args} />,
  args: {
    variant: "user",
    size: "small",
    title: "Small avatar",
  },
};

export const Large = {
  render: (args) => <Avatar {...args} />,
  args: {
    variant: "user",
    size: "large",
    title: "Large avatar",
  },
};

export const WithPresence = {
  render: (args) => <Avatar {...args} />,
  args: {
    variant: "user",
    size: "medium",
    presence: "online",
    title: "Avatar with presence",
  },
};
