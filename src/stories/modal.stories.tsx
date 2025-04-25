import { Modal, Button, Icon, IconSettings } from '@salesforce/design-system-react';
import { useState } from 'react';

const meta = {
  title: 'SLDS/Modal',
  component: Modal,
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
            label="Open Modal"
            onClick={() => setIsOpen(true)}
            variant="brand"
          />
          <Modal
            {...args}
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            heading="Modal Title"
          >
            <div className="slds-p-around_medium">
              <p>This is the modal content.</p>
            </div>
          </Modal>
        </div>
      </IconSettings>
    );
  },
  args: {},
};

export const WithFooter = {
  render: (args: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <Button
            label="Open Modal with Footer"
            onClick={() => setIsOpen(true)}
            variant="brand"
          />
          <Modal
            {...args}
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            heading="Modal with Footer"
            footer={[
              <Button
                key="cancel"
                label="Cancel"
                onClick={() => setIsOpen(false)}
                variant="neutral"
              />,
              <Button
                key="save"
                label="Save"
                onClick={() => setIsOpen(false)}
                variant="brand"
              />,
            ]}
          >
            <div className="slds-p-around_medium">
              <p>This modal has a footer with action buttons.</p>
            </div>
          </Modal>
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
            label="Open Modal with Icon"
            onClick={() => setIsOpen(true)}
            variant="brand"
          />
          <Modal
            {...args}
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            heading="Modal with Icon"
            icon={<Icon category="utility" name="info" size="small" />}
          >
            <div className="slds-p-around_medium">
              <p>This modal includes an icon in the header.</p>
            </div>
          </Modal>
        </div>
      </IconSettings>
    );
  },
  args: {},
};

export const DifferentSizes = {
  render: (args: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <div className="slds-m-bottom_medium">
            <Button
              label="Small Modal"
              onClick={() => {
                setSize('small');
                setIsOpen(true);
              }}
              variant="neutral"
              className="slds-m-right_x-small"
            />
            <Button
              label="Medium Modal"
              onClick={() => {
                setSize('medium');
                setIsOpen(true);
              }}
              variant="neutral"
              className="slds-m-right_x-small"
            />
            <Button
              label="Large Modal"
              onClick={() => {
                setSize('large');
                setIsOpen(true);
              }}
              variant="neutral"
            />
          </div>
          <Modal
            {...args}
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            heading={`${size.charAt(0).toUpperCase() + size.slice(1)} Modal`}
            size={size}
          >
            <div className="slds-p-around_medium">
              <p>This is a {size} sized modal.</p>
            </div>
          </Modal>
        </div>
      </IconSettings>
    );
  },
  args: {},
}; 