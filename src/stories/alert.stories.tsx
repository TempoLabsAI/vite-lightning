import { Alert, AlertContainer, Icon, IconSettings } from '@salesforce/design-system-react';
import { useState } from 'react';

const meta = {
  title: 'SLDS/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    onRequestClose: { action: 'closed' },
  },
};
export default meta;

export const Base = {
  render: (args: any) => (
    <IconSettings iconPath="/assets/icons">
      <Alert
        {...args}
        labels={{
          heading: 'Alert Title',
          headingLink: 'Learn More',
        }}
        onClickHeadingLink={() => {}}
      >
        <p>This is a base alert message.</p>
      </Alert>
    </IconSettings>
  ),
  args: {},
};

export const WithIcon = {
  render: (args: any) => (
    <IconSettings iconPath="/assets/icons">
      <Alert
        {...args}
        icon={<Icon category="utility" name="info" size="small" />}
        labels={{
          heading: 'Alert with Icon',
          headingLink: 'Learn More',
        }}
        onClickHeadingLink={() => {}}
      >
        <p>This alert includes an icon for better visual communication.</p>
      </Alert>
    </IconSettings>
  ),
  args: {},
};

export const Dismissible = {
  render: (args: any) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <IconSettings iconPath="/assets/icons">
        {isOpen && (
          <Alert
            {...args}
            dismissible
            onRequestClose={() => setIsOpen(false)}
            labels={{
              heading: 'Dismissible Alert',
              headingLink: 'Learn More',
            }}
            onClickHeadingLink={() => {}}
          >
            <p>This alert can be dismissed by clicking the close button.</p>
          </Alert>
        )}
      </IconSettings>
    );
  },
  args: {},
};

export const Variants = {
  render: (args: any) => (
    <IconSettings iconPath="/assets/icons">
      <AlertContainer>
        <Alert
          {...args}
          variant="warning"
          labels={{
            heading: 'Warning Alert',
            headingLink: 'Learn More',
          }}
          onClickHeadingLink={() => {}}
        >
          <p>This is a warning alert message.</p>
        </Alert>
        <Alert
          {...args}
          variant="error"
          labels={{
            heading: 'Error Alert',
            headingLink: 'Learn More',
          }}
          onClickHeadingLink={() => {}}
        >
          <p>This is an error alert message.</p>
        </Alert>
        <Alert
          {...args}
          variant="info"
          labels={{
            heading: 'Info Alert',
            headingLink: 'Learn More',
          }}
          onClickHeadingLink={() => {}}
        >
          <p>This is an info alert message.</p>
        </Alert>
        <Alert
          {...args}
          variant="offline"
          labels={{
            heading: 'Offline Alert',
            headingLink: 'Learn More',
          }}
          onClickHeadingLink={() => {}}
        >
          <p>This is an offline alert message.</p>
        </Alert>
      </AlertContainer>
    </IconSettings>
  ),
  args: {},
}; 