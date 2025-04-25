import { ProgressIndicator, Button, Icon, IconSettings } from '@salesforce/design-system-react';
import { useState } from 'react';

const meta = {
  title: 'SLDS/ProgressIndicator',
  component: ProgressIndicator,
  tags: ['autodocs'],
  argTypes: {
    onStepClick: { action: 'step clicked' },
  },
};
export default meta;

export const Base = {
  render: (args: any) => {
    const sampleSteps = [
        { id: '1', label: 'Step 1', assistiveText: 'Step 1: Review' },
        { id: '2', label: 'Step 2', assistiveText: 'Step 2: Configure' },
        { id: '3', label: 'Step 3', assistiveText: 'Step 3: Deploy' },
        { id: '4', label: 'Step 4', assistiveText: 'Step 4: Verify' },
    ];
    const [selectedStep, setSelectedStep] = useState(sampleSteps[0]);

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <ProgressIndicator
            {...args}
            steps={sampleSteps}
            selectedStep={selectedStep}
            onStepClick={setSelectedStep}
          />
          <div className="slds-m-top_medium">
            <Button
              label="Previous"
              onClick={() => {
                const currentIndex = sampleSteps.findIndex(step => step.id === selectedStep.id);
                if (currentIndex > 0) {
                  setSelectedStep(sampleSteps[currentIndex - 1]);
                }
              }}
              variant="neutral"
              className="slds-m-right_x-small"
              disabled={selectedStep.id === '1'}
            />
            <Button
              label="Next"
              onClick={() => {
                const currentIndex = sampleSteps.findIndex(step => step.id === selectedStep.id);
                if (currentIndex < sampleSteps.length - 1) {
                  setSelectedStep(sampleSteps[currentIndex + 1]);
                }
              }}
              variant="brand"
              disabled={selectedStep.id === '4'}
            />
          </div>
        </div>
      </IconSettings>
    );
  },
  args: {},
};

export const WithCompletedSteps = {
  render: (args: any) => {
    const sampleSteps = [
        { id: '1', label: 'Step 1', assistiveText: 'Step 1: Review' },
        { id: '2', label: 'Step 2', assistiveText: 'Step 2: Configure' },
        { id: '3', label: 'Step 3', assistiveText: 'Step 3: Deploy' },
        { id: '4', label: 'Step 4', assistiveText: 'Step 4: Verify' },
    ];
    const [selectedStep, setSelectedStep] = useState(sampleSteps[0]);
    const [completedSteps, setCompletedSteps] = useState<string[]>([]);

    const handleComplete = () => {
      if (!completedSteps.includes(selectedStep.id)) {
        setCompletedSteps([...completedSteps, selectedStep.id]);
      }
    };

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <ProgressIndicator
            {...args}
            steps={sampleSteps}
            selectedStep={selectedStep}
            completedSteps={completedSteps}
            onStepClick={setSelectedStep}
          />
          <div className="slds-m-top_medium">
            <Button
              label="Previous"
              onClick={() => {
                const currentIndex = sampleSteps.findIndex(step => step.id === selectedStep.id);
                if (currentIndex > 0) {
                  setSelectedStep(sampleSteps[currentIndex - 1]);
                }
              }}
              variant="neutral"
              className="slds-m-right_x-small"
              disabled={selectedStep.id === '1'}
            />
            <Button
              label="Complete Step"
              onClick={handleComplete}
              variant="brand"
              className="slds-m-right_x-small"
            />
            <Button
              label="Next"
              onClick={() => {
                const currentIndex = sampleSteps.findIndex(step => step.id === selectedStep.id);
                if (currentIndex < sampleSteps.length - 1) {
                  setSelectedStep(sampleSteps[currentIndex + 1]);
                }
              }}
              variant="brand"
              disabled={selectedStep.id === '4'}
            />
          </div>
        </div>
      </IconSettings>
    );
  },
  args: {},
};

export const WithErrorSteps = {
  render: (args: any) => {
    const sampleSteps = [
        { id: '1', label: 'Step 1', assistiveText: 'Step 1: Review' },
        { id: '2', label: 'Step 2', assistiveText: 'Step 2: Configure' },
        { id: '3', label: 'Step 3', assistiveText: 'Step 3: Deploy' },
        { id: '4', label: 'Step 4', assistiveText: 'Step 4: Verify' },
    ];
    const [selectedStep, setSelectedStep] = useState(sampleSteps[0]);
    const [errorSteps, setErrorSteps] = useState<string[]>([]);

    const handleToggleError = () => {
      if (errorSteps.includes(selectedStep.id)) {
        setErrorSteps(errorSteps.filter(id => id !== selectedStep.id));
      } else {
        setErrorSteps([...errorSteps, selectedStep.id]);
      }
    };

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <ProgressIndicator
            {...args}
            steps={sampleSteps}
            selectedStep={selectedStep}
            errorSteps={errorSteps}
            onStepClick={setSelectedStep}
          />
          <div className="slds-m-top_medium">
            <Button
              label="Previous"
              onClick={() => {
                const currentIndex = sampleSteps.findIndex(step => step.id === selectedStep.id);
                if (currentIndex > 0) {
                  setSelectedStep(sampleSteps[currentIndex - 1]);
                }
              }}
              variant="neutral"
              className="slds-m-right_x-small"
              disabled={selectedStep.id === '1'}
            />
            <Button
              label={errorSteps.includes(selectedStep.id) ? "Remove Error" : "Add Error"}
              onClick={handleToggleError}
              variant={errorSteps.includes(selectedStep.id) ? "neutral" : "destructive"}
              className="slds-m-right_x-small"
            />
            <Button
              label="Next"
              onClick={() => {
                const currentIndex = sampleSteps.findIndex(step => step.id === selectedStep.id);
                if (currentIndex < sampleSteps.length - 1) {
                  setSelectedStep(sampleSteps[currentIndex + 1]);
                }
              }}
              variant="brand"
              disabled={selectedStep.id === '4'}
            />
          </div>
        </div>
      </IconSettings>
    );
  },
  args: {},
};

export const Vertical = {
  render: (args: any) => {
    const sampleSteps = [
        { id: '1', label: 'Step 1', assistiveText: 'Step 1: Review' },
        { id: '2', label: 'Step 2', assistiveText: 'Step 2: Configure' },
        { id: '3', label: 'Step 3', assistiveText: 'Step 3: Deploy' },
        { id: '4', label: 'Step 4', assistiveText: 'Step 4: Verify' },
    ];
    const [selectedStep, setSelectedStep] = useState(sampleSteps[0]);

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <ProgressIndicator
            {...args}
            steps={sampleSteps}
            selectedStep={selectedStep}
            onStepClick={setSelectedStep}
            variant="vertical"
          />
          <div className="slds-m-top_medium">
            <Button
              label="Previous"
              onClick={() => {
                const currentIndex = sampleSteps.findIndex(step => step.id === selectedStep.id);
                if (currentIndex > 0) {
                  setSelectedStep(sampleSteps[currentIndex - 1]);
                }
              }}
              variant="neutral"
              className="slds-m-right_x-small"
              disabled={selectedStep.id === '1'}
            />
            <Button
              label="Next"
              onClick={() => {
                const currentIndex = sampleSteps.findIndex(step => step.id === selectedStep.id);
                if (currentIndex < sampleSteps.length - 1) {
                  setSelectedStep(sampleSteps[currentIndex + 1]);
                }
              }}
              variant="brand"
              disabled={selectedStep.id === '4'}
            />
          </div>
        </div>
      </IconSettings>
    );
  },
  args: {},
}; 