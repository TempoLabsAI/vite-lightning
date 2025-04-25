// [build] library: 'lightning-design-system'
import { Card, IconSettings } from "@salesforce/design-system-react";

const meta = {
  title: "Lightning/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    bodyClassName: { control: "text" },
    heading: { control: "text" },
    headerActions: { control: "object" },
    footer: { control: "object" },
    icon: { control: "object" },
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
  render: (args) => <Card {...args}>{args.children}</Card>,
  args: {
    heading: "Card Heading",
    children: <div style={{ padding: "1rem" }}>Card body content</div>,
  },
};

export const WithIcon = {
  render: (args) => <Card {...args}>{args.children}</Card>,
  args: {
    heading: "Card with Icon",
    icon: <span className="slds-icon_container slds-icon-standard-account">Icon</span>,
    children: <div style={{ padding: "1rem" }}>Card with icon content</div>,
  },
};

export const WithFooter = {
  render: (args) => <Card {...args}>{args.children}</Card>,
  args: {
    heading: "Card with Footer",
    footer: <div style={{ padding: "0.5rem" }}>Card footer content</div>,
    children: <div style={{ padding: "1rem" }}>Card with footer content</div>,
  },
};

export const WithHeaderActions = {
  render: (args) => <Card {...args}>{args.children}</Card>,
  args: {
    heading: "Card with Header Actions",
    headerActions: <button className="slds-button slds-button_neutral">Action</button>,
    children: <div style={{ padding: "1rem" }}>Card with header actions content</div>,
  },
};

export const Empty = {
  render: (args) => <Card {...args}>{args.children}</Card>,
  args: {
    heading: "Empty Card",
    children: null,
    empty: <div style={{ padding: "1rem", textAlign: "center" }}>No items to display</div>,
  },
};
