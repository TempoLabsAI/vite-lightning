import { Spinner, Button, IconSettings } from '@salesforce/design-system-react';
import { useState } from 'react';

const meta = {
  title: 'SLDS/Spinner',
  component: Spinner,
  tags: ['autodocs'],
};
export default meta;

export const Base = {
  render: (args: any) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          {isLoading ? (
            <Spinner
              {...args}
              assistiveText={{ label: 'Loading...' }}
            />
          ) : (
            <Button
              label="Show Spinner"
              onClick={() => setIsLoading(true)}
              variant="brand"
            />
          )}
        </div>
      </IconSettings>
    );
  },
  args: {},
};

export const DifferentSizes = {
  render: (args: any) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <div className="slds-grid slds-grid_align-center slds-m-bottom_medium">
            <div className="slds-col slds-text-align_center">
              <Spinner
                {...args}
                size="xx-small"
                assistiveText={{ label: 'XX-Small Spinner' }}
              />
              <p className="slds-m-top_small">XX-Small</p>
            </div>
            <div className="slds-col slds-text-align_center">
              <Spinner
                {...args}
                size="x-small"
                assistiveText={{ label: 'X-Small Spinner' }}
              />
              <p className="slds-m-top_small">X-Small</p>
            </div>
            <div className="slds-col slds-text-align_center">
              <Spinner
                {...args}
                size="small"
                assistiveText={{ label: 'Small Spinner' }}
              />
              <p className="slds-m-top_small">Small</p>
            </div>
            <div className="slds-col slds-text-align_center">
              <Spinner
                {...args}
                size="medium"
                assistiveText={{ label: 'Medium Spinner' }}
              />
              <p className="slds-m-top_small">Medium</p>
            </div>
            <div className="slds-col slds-text-align_center">
              <Spinner
                {...args}
                size="large"
                assistiveText={{ label: 'Large Spinner' }}
              />
              <p className="slds-m-top_small">Large</p>
            </div>
          </div>
          <div className="slds-m-top_medium">
            <Button
              label="Toggle Spinners"
              onClick={() => setIsLoading(!isLoading)}
              variant="neutral"
            />
          </div>
        </div>
      </IconSettings>
    );
  },
  args: {},
};

export const DifferentVariants = {
  render: (args: any) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <div className="slds-grid slds-grid_align-center slds-m-bottom_medium">
            <div className="slds-col slds-text-align_center">
              <Spinner
                {...args}
                variant="base"
                assistiveText={{ label: 'Base Spinner' }}
              />
              <p className="slds-m-top_small">Base</p>
            </div>
            <div className="slds-col slds-text-align_center">
              <Spinner
                {...args}
                variant="brand"
                assistiveText={{ label: 'Brand Spinner' }}
              />
              <p className="slds-m-top_small">Brand</p>
            </div>
            <div className="slds-col slds-text-align_center">
              <Spinner
                {...args}
                variant="inverse"
                assistiveText={{ label: 'Inverse Spinner' }}
              />
              <p className="slds-m-top_small">Inverse</p>
            </div>
          </div>
          <div className="slds-m-top_medium">
            <Button
              label="Toggle Spinners"
              onClick={() => setIsLoading(!isLoading)}
              variant="neutral"
            />
          </div>
        </div>
      </IconSettings>
    );
  },
  args: {},
};

export const WithContainer = {
  render: (args: any) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <div className="slds-box slds-box_xx-small slds-m-bottom_medium">
            <Spinner
              {...args}
              hasContainer
              assistiveText={{ label: 'Spinner with Container' }}
            />
          </div>
          <div className="slds-m-top_medium">
            <Button
              label="Toggle Spinner"
              onClick={() => setIsLoading(!isLoading)}
              variant="neutral"
            />
          </div>
        </div>
      </IconSettings>
    );
  },
  args: {},
}; 