import { ProgressBar, Button, IconSettings } from '@salesforce/design-system-react';
import { useState } from 'react';

const meta = {
  title: 'SLDS/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
};
export default meta;

export const Base = {
  render: (args: any) => {
    const [value, setValue] = useState(25);

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <ProgressBar
            {...args}
            value={value}
            assistiveText={{ label: `Progress: ${value}%` }}
          />
          <div className="slds-m-top_medium">
            <Button
              label="Increase"
              onClick={() => setValue(prev => Math.min(prev + 25, 100))}
              variant="neutral"
              className="slds-m-right_x-small"
            />
            <Button
              label="Decrease"
              onClick={() => setValue(prev => Math.max(prev - 25, 0))}
              variant="neutral"
            />
          </div>
        </div>
      </IconSettings>
    );
  },
  args: {},
};

export const WithLabel = {
  render: (args: any) => {
    const [value, setValue] = useState(50);

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <ProgressBar
            {...args}
            value={value}
            label="Progress"
            assistiveText={{ label: `Progress: ${value}%` }}
          />
          <div className="slds-m-top_medium">
            <Button
              label="Increase"
              onClick={() => setValue(prev => Math.min(prev + 25, 100))}
              variant="neutral"
              className="slds-m-right_x-small"
            />
            <Button
              label="Decrease"
              onClick={() => setValue(prev => Math.max(prev - 25, 0))}
              variant="neutral"
            />
          </div>
        </div>
      </IconSettings>
    );
  },
  args: {},
};

export const DifferentSizes = {
  render: (args: any) => {
    const [value, setValue] = useState(75);

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <div className="slds-m-bottom_medium">
            <ProgressBar
              {...args}
              value={value}
              size="x-small"
              assistiveText={{ label: `X-Small Progress: ${value}%` }}
            />
          </div>
          <div className="slds-m-bottom_medium">
            <ProgressBar
              {...args}
              value={value}
              size="small"
              assistiveText={{ label: `Small Progress: ${value}%` }}
            />
          </div>
          <div className="slds-m-bottom_medium">
            <ProgressBar
              {...args}
              value={value}
              size="medium"
              assistiveText={{ label: `Medium Progress: ${value}%` }}
            />
          </div>
          <div className="slds-m-bottom_medium">
            <ProgressBar
              {...args}
              value={value}
              size="large"
              assistiveText={{ label: `Large Progress: ${value}%` }}
            />
          </div>
          <div className="slds-m-top_medium">
            <Button
              label="Increase"
              onClick={() => setValue(prev => Math.min(prev + 25, 100))}
              variant="neutral"
              className="slds-m-right_x-small"
            />
            <Button
              label="Decrease"
              onClick={() => setValue(prev => Math.max(prev - 25, 0))}
              variant="neutral"
            />
          </div>
        </div>
      </IconSettings>
    );
  },
  args: {},
};

export const WithError = {
  render: (args: any) => {
    const [value, setValue] = useState(50);
    const [hasError, setHasError] = useState(false);

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <ProgressBar
            {...args}
            value={value}
            hasError={hasError}
            assistiveText={{ label: `Progress: ${value}%` }}
          />
          <div className="slds-m-top_medium">
            <Button
              label="Increase"
              onClick={() => setValue(prev => Math.min(prev + 25, 100))}
              variant="neutral"
              className="slds-m-right_x-small"
            />
            <Button
              label="Decrease"
              onClick={() => setValue(prev => Math.max(prev - 25, 0))}
              variant="neutral"
              className="slds-m-right_x-small"
            />
            <Button
              label={hasError ? "Remove Error" : "Add Error"}
              onClick={() => setHasError(!hasError)}
              variant={hasError ? "neutral" : "destructive"}
            />
          </div>
        </div>
      </IconSettings>
    );
  },
  args: {},
}; 