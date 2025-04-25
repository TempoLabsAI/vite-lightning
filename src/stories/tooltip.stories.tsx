import { Tooltip, Button, Icon, IconSettings } from '@salesforce/design-system-react';
import { useState } from 'react';

const meta = {
  title: 'SLDS/Tooltip',
  component: Tooltip,
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
        <Tooltip
          {...args}
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          content="This is a tooltip message"
        >
          <Button
            label="Hover for Tooltip"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            variant="neutral"
          />
        </Tooltip>
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
        <Tooltip
          {...args}
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          content="This tooltip has an icon"
        >
          <Button
            icon={<Icon category="utility" name="info" size="small" />}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            variant="icon"
          />
        </Tooltip>
      </IconSettings>
    );
  },
  args: {},
};

export const DifferentPositions = {
  render: (args: any) => {
    const [position, setPosition] = useState<string>('top');
    const [isOpen, setIsOpen] = useState(false);

    return (
      <IconSettings iconPath="/assets/icons">
        <div className="slds-grid slds-grid_vertical slds-grid_align-center">
          <div className="slds-m-bottom_medium">
            <Button
              label="Top"
              onClick={() => {
                setPosition('top');
                setIsOpen(true);
              }}
              variant="neutral"
              className="slds-m-right_x-small"
            />
            <Button
              label="Right"
              onClick={() => {
                setPosition('right');
                setIsOpen(true);
              }}
              variant="neutral"
              className="slds-m-right_x-small"
            />
            <Button
              label="Bottom"
              onClick={() => {
                setPosition('bottom');
                setIsOpen(true);
              }}
              variant="neutral"
              className="slds-m-right_x-small"
            />
            <Button
              label="Left"
              onClick={() => {
                setPosition('left');
                setIsOpen(true);
              }}
              variant="neutral"
            />
          </div>
          <Tooltip
            {...args}
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            content={`This tooltip is positioned ${position}`}
            align={position}
          >
            <Button
              label="Show Tooltip"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              variant="brand"
            />
          </Tooltip>
        </div>
      </IconSettings>
    );
  },
  args: {},
};

export const WithHTMLContent = {
  render: (args: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <IconSettings iconPath="/assets/icons">
        <Tooltip
          {...args}
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          content={
            <div>
              <h3 className="slds-text-heading_small">Tooltip Title</h3>
              <p className="slds-m-top_x-small">This tooltip contains HTML content.</p>
              <ul className="slds-m-top_x-small">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          }
        >
          <Button
            label="Show HTML Tooltip"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            variant="neutral"
          />
        </Tooltip>
      </IconSettings>
    );
  },
  args: {},
};  