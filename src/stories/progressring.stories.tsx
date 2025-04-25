import { ProgressRing, Button, Icon, IconSettings } from '@salesforce/design-system-react';
import { useState } from 'react';

const meta = {
  title: 'SLDS/ProgressRing',
  component: ProgressRing,
  tags: ['autodocs'],
};
export default meta;

export const Base = {
  render: (args: any) => {
    const [value, setValue] = useState(25);

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <ProgressRing
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

export const WithIcon = {
  render: (args: any) => {
    const [value, setValue] = useState(50);

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <ProgressRing
            {...args}
            value={value}
            hasIcon
            icon={<Icon category="utility" name="check" size="small" />}
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
          <div className="slds-grid slds-grid_align-center slds-m-bottom_medium">
            <div className="slds-col slds-text-align_center">
              <ProgressRing
                {...args}
                value={value}
                size="x-small"
                assistiveText={{ label: `X-Small Progress: ${value}%` }}
              />
              <p className="slds-m-top_small">X-Small</p>
            </div>
            <div className="slds-col slds-text-align_center">
              <ProgressRing
                {...args}
                value={value}
                size="small"
                assistiveText={{ label: `Small Progress: ${value}%` }}
              />
              <p className="slds-m-top_small">Small</p>
            </div>
            <div className="slds-col slds-text-align_center">
              <ProgressRing
                {...args}
                value={value}
                size="medium"
                assistiveText={{ label: `Medium Progress: ${value}%` }}
              />
              <p className="slds-m-top_small">Medium</p>
            </div>
            <div className="slds-col slds-text-align_center">
              <ProgressRing
                {...args}
                value={value}
                size="large"
                assistiveText={{ label: `Large Progress: ${value}%` }}
              />
              <p className="slds-m-top_small">Large</p>
            </div>
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

export const DifferentThemes = {
  render: (args: any) => {
    const [value, setValue] = useState(50);
    const [theme, setTheme] = useState<'complete' | 'warning' | 'expired' | 'active'>('complete');

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <ProgressRing
            {...args}
            value={value}
            theme={theme}
            assistiveText={{ label: `Progress: ${value}%` }}
          />
          <div className="slds-m-top_medium">
            <Button
              label="Complete"
              onClick={() => setTheme('complete')}
              variant={theme === 'complete' ? 'brand' : 'neutral'}
              className="slds-m-right_x-small"
            />
            <Button
              label="Warning"
              onClick={() => setTheme('warning')}
              variant={theme === 'warning' ? 'brand' : 'neutral'}
              className="slds-m-right_x-small"
            />
            <Button
              label="Expired"
              onClick={() => setTheme('expired')}
              variant={theme === 'expired' ? 'brand' : 'neutral'}
              className="slds-m-right_x-small"
            />
            <Button
              label="Active"
              onClick={() => setTheme('active')}
              variant={theme === 'active' ? 'brand' : 'neutral'}
            />
          </div>
        </div>
      </IconSettings>
    );
  },
  args: {},
}; 