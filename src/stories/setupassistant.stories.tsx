import { SetupAssistant, SetupAssistantStep, Button, Icon, IconSettings } from '@salesforce/design-system-react';
import { useState } from 'react';

const meta = {
  title: 'SLDS/SetupAssistant',
  component: SetupAssistant,
  tags: ['autodocs'],
  argTypes: {
    onStepToggleIsOpen: { action: 'step toggled' },
  },
};
export default meta;

export const Base = {
  render: (args: any) => {
    const [steps, setSteps] = useState([
      {
        id: '1',
        heading: 'Step 1: Review',
        description: 'Review your current setup and requirements.',
        isOpen: false,
        progress: 0,
      },
      {
        id: '2',
        heading: 'Step 2: Configure',
        description: 'Configure your settings and preferences.',
        isOpen: false,
        progress: 0,
      },
      {
        id: '3',
        heading: 'Step 3: Deploy',
        description: 'Deploy your changes to the system.',
        isOpen: false,
        progress: 0,
      },
      {
        id: '4',
        heading: 'Step 4: Verify',
        description: 'Verify your setup is working correctly.',
        isOpen: false,
        progress: 0,
      },
    ]);

    const handleToggleStep = (stepId: string) => {
      setSteps(prev =>
        prev.map(step =>
          step.id === stepId ? { ...step, isOpen: !step.isOpen } : step
        )
      );
    };

    const handleUpdateProgress = (stepId: string, progress: number) => {
      setSteps(prev =>
        prev.map(step =>
          step.id === stepId ? { ...step, progress } : step
        )
      );
    };

    return (
      <IconSettings iconPath="/assets/icons">
        <SetupAssistant {...args}>
          {steps.map(step => (
            <SetupAssistantStep
              key={step.id}
              id={step.id}
              heading={step.heading}
              description={step.description}
              isOpen={step.isOpen}
              progress={step.progress}
              onToggleIsOpen={() => handleToggleStep(step.id)}
              onRenderAction={() => (
                <div className="slds-m-top_medium">
                  <Button
                    label="Complete Step"
                    onClick={() => handleUpdateProgress(step.id, 100)}
                    variant="brand"
                    className="slds-m-right_x-small"
                  />
                  <Button
                    label="Reset Progress"
                    onClick={() => handleUpdateProgress(step.id, 0)}
                    variant="neutral"
                  />
                </div>
              )}
            />
          ))}
        </SetupAssistant>
      </IconSettings>
    );
  },
  args: {},
};

export const WithIcons = {
  render: (args: any) => {
    const [steps, setSteps] = useState([
      {
        id: '1',
        heading: 'Step 1: Review',
        description: 'Review your current setup and requirements.',
        isOpen: false,
        progress: 0,
        icon: <Icon category="utility" name="review" size="small" />,
      },
      {
        id: '2',
        heading: 'Step 2: Configure',
        description: 'Configure your settings and preferences.',
        isOpen: false,
        progress: 0,
        icon: <Icon category="utility" name="settings" size="small" />,
      },
      {
        id: '3',
        heading: 'Step 3: Deploy',
        description: 'Deploy your changes to the system.',
        isOpen: false,
        progress: 0,
        icon: <Icon category="utility" name="deploy" size="small" />,
      },
      {
        id: '4',
        heading: 'Step 4: Verify',
        description: 'Verify your setup is working correctly.',
        isOpen: false,
        progress: 0,
        icon: <Icon category="utility" name="check" size="small" />,
      },
    ]);

    const handleToggleStep = (stepId: string) => {
      setSteps(prev =>
        prev.map(step =>
          step.id === stepId ? { ...step, isOpen: !step.isOpen } : step
        )
      );
    };

    const handleUpdateProgress = (stepId: string, progress: number) => {
      setSteps(prev =>
        prev.map(step =>
          step.id === stepId ? { ...step, progress } : step
        )
      );
    };

    return (
      <IconSettings iconPath="/assets/icons">
        <SetupAssistant {...args}>
          {steps.map(step => (
            <SetupAssistantStep
              key={step.id}
              id={step.id}
              heading={step.heading}
              description={step.description}
              isOpen={step.isOpen}
              progress={step.progress}
              onToggleIsOpen={() => handleToggleStep(step.id)}
              onRenderFigure={() => step.icon}
              onRenderAction={() => (
                <div className="slds-m-top_medium">
                  <Button
                    label="Complete Step"
                    onClick={() => handleUpdateProgress(step.id, 100)}
                    variant="brand"
                    className="slds-m-right_x-small"
                  />
                  <Button
                    label="Reset Progress"
                    onClick={() => handleUpdateProgress(step.id, 0)}
                    variant="neutral"
                  />
                </div>
              )}
            />
          ))}
        </SetupAssistant>
      </IconSettings>
    );
  },
  args: {},
};

export const WithEstimatedTime = {
  render: (args: any) => {
    const [steps, setSteps] = useState([
      {
        id: '1',
        heading: 'Step 1: Review',
        description: 'Review your current setup and requirements.',
        isOpen: false,
        progress: 0,
        estimatedTime: '5 minutes',
      },
      {
        id: '2',
        heading: 'Step 2: Configure',
        description: 'Configure your settings and preferences.',
        isOpen: false,
        progress: 0,
        estimatedTime: '10 minutes',
      },
      {
        id: '3',
        heading: 'Step 3: Deploy',
        description: 'Deploy your changes to the system.',
        isOpen: false,
        progress: 0,
        estimatedTime: '15 minutes',
      },
      {
        id: '4',
        heading: 'Step 4: Verify',
        description: 'Verify your setup is working correctly.',
        isOpen: false,
        progress: 0,
        estimatedTime: '5 minutes',
      },
    ]);

    const handleToggleStep = (stepId: string) => {
      setSteps(prev =>
        prev.map(step =>
          step.id === stepId ? { ...step, isOpen: !step.isOpen } : step
        )
      );
    };

    const handleUpdateProgress = (stepId: string, progress: number) => {
      setSteps(prev =>
        prev.map(step =>
          step.id === stepId ? { ...step, progress } : step
        )
      );
    };

    return (
      <IconSettings iconPath="/assets/icons">
        <SetupAssistant {...args}>
          {steps.map(step => (
            <SetupAssistantStep
              key={step.id}
              id={step.id}
              heading={step.heading}
              description={step.description}
              isOpen={step.isOpen}
              progress={step.progress}
              estimatedTime={step.estimatedTime}
              onToggleIsOpen={() => handleToggleStep(step.id)}
              onRenderAction={() => (
                <div className="slds-m-top_medium">
                  <Button
                    label="Complete Step"
                    onClick={() => handleUpdateProgress(step.id, 100)}
                    variant="brand"
                    className="slds-m-right_x-small"
                  />
                  <Button
                    label="Reset Progress"
                    onClick={() => handleUpdateProgress(step.id, 0)}
                    variant="neutral"
                  />
                </div>
              )}
            />
          ))}
        </SetupAssistant>
      </IconSettings>
    );
  },
  args: {},
};

export const WithCustomContent = {
  render: (args: any) => {
    const [steps, setSteps] = useState([
      {
        id: '1',
        heading: 'Step 1: Review',
        description: 'Review your current setup and requirements.',
        isOpen: false,
        progress: 0,
      },
      {
        id: '2',
        heading: 'Step 2: Configure',
        description: 'Configure your settings and preferences.',
        isOpen: false,
        progress: 0,
      },
      {
        id: '3',
        heading: 'Step 3: Deploy',
        description: 'Deploy your changes to the system.',
        isOpen: false,
        progress: 0,
      },
      {
        id: '4',
        heading: 'Step 4: Verify',
        description: 'Verify your setup is working correctly.',
        isOpen: false,
        progress: 0,
      },
    ]);

    const handleToggleStep = (stepId: string) => {
      setSteps(prev =>
        prev.map(step =>
          step.id === stepId ? { ...step, isOpen: !step.isOpen } : step
        )
      );
    };

    const handleUpdateProgress = (stepId: string, progress: number) => {
      setSteps(prev =>
        prev.map(step =>
          step.id === stepId ? { ...step, progress } : step
        )
      );
    };

    return (
      <IconSettings iconPath="/assets/icons">
        <SetupAssistant {...args}>
          {steps.map(step => (
            <SetupAssistantStep
              key={step.id}
              id={step.id}
              heading={step.heading}
              description={step.description}
              isOpen={step.isOpen}
              progress={step.progress}
              onToggleIsOpen={() => handleToggleStep(step.id)}
              onRenderContent={() => (
                <div className="slds-p-around_medium">
                  <h3 className="slds-text-heading_small">Custom Content</h3>
                  <p className="slds-m-top_small">This is custom content for {step.heading}</p>
                  <div className="slds-m-top_medium">
                    <Button
                      label="Complete Step"
                      onClick={() => handleUpdateProgress(step.id, 100)}
                      variant="brand"
                      className="slds-m-right_x-small"
                    />
                    <Button
                      label="Reset Progress"
                      onClick={() => handleUpdateProgress(step.id, 0)}
                      variant="neutral"
                    />
                  </div>
                </div>
              )}
            />
          ))}
        </SetupAssistant>
      </IconSettings>
    );
  },
  args: {},
}; 