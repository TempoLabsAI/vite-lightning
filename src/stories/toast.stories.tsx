import { Toast, ToastContainer, Button, Icon, IconSettings } from '@salesforce/design-system-react';
import { useState } from 'react';

const meta = {
  title: 'SLDS/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    onRequestClose: { action: 'closed' },
  },
};
export default meta;

export const Base = {
  render: (args: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <Button
            label="Show Toast"
            onClick={() => setIsOpen(true)}
            variant="brand"
          />
          {isOpen && (
            <Toast
              {...args}
              onRequestClose={() => setIsOpen(false)}
              labels={{
                heading: 'Success',
                details: 'Your changes have been saved successfully.',
              }}
            />
          )}
        </div>
      </IconSettings>
    );
  },
  args: {},
};

export const WithIcon = {
  render: (args: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <Button
            label="Show Toast with Icon"
            onClick={() => setIsOpen(true)}
            variant="brand"
          />
          {isOpen && (
            <Toast
              {...args}
              onRequestClose={() => setIsOpen(false)}
              icon={<Icon category="utility" name="success" size="small" />}
              labels={{
                heading: 'Success',
                details: 'Your changes have been saved successfully.',
              }}
            />
          )}
        </div>
      </IconSettings>
    );
  },
  args: {},
};

export const Variants = {
  render: (args: any) => {
    const [toasts, setToasts] = useState<Array<{ id: number; variant: string }>>([]);

    const addToast = (variant: string) => {
      setToasts(prev => [...prev, { id: Date.now(), variant }]);
    };

    const removeToast = (id: number) => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <div className="slds-m-bottom_medium">
            <Button
              label="Success Toast"
              onClick={() => addToast('success')}
              variant="success"
              className="slds-m-right_x-small"
            />
            <Button
              label="Error Toast"
              onClick={() => addToast('error')}
              variant="destructive"
              className="slds-m-right_x-small"
            />
            <Button
              label="Warning Toast"
              onClick={() => addToast('warning')}
              variant="neutral"
              className="slds-m-right_x-small"
            />
            <Button
              label="Info Toast"
              onClick={() => addToast('info')}
              variant="neutral"
            />
          </div>
          <ToastContainer>
            {toasts.map(toast => (
              <Toast
                key={toast.id}
                {...args}
                variant={toast.variant}
                onRequestClose={() => removeToast(toast.id)}
                labels={{
                  heading: toast.variant.charAt(0).toUpperCase() + toast.variant.slice(1),
                  details: `This is a ${toast.variant} toast message.`,
                }}
              />
            ))}
          </ToastContainer>
        </div>
      </IconSettings>
    );
  },
  args: {},
};

export const WithLink = {
  render: (args: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <Button
            label="Show Toast with Link"
            onClick={() => setIsOpen(true)}
            variant="brand"
          />
          {isOpen && (
            <Toast
              {...args}
              onRequestClose={() => setIsOpen(false)}
              labels={{
                heading: 'Success',
                details: 'Your changes have been saved successfully.',
                headingLink: 'View Details',
              }}
              onClickHeadingLink={() => {
                console.log('Link clicked');
                setIsOpen(false);
              }}
            />
          )}
        </div>
      </IconSettings>
    );
  },
  args: {},
}; 