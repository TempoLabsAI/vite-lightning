import { Accordion, AccordionPanel } from '@salesforce/design-system-react';
import { useState } from 'react';

const meta = {
  title: 'SLDS/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    onToggle: { action: 'toggled' },
  },
};
export default meta;

export const Base = {
  render: (args: any) => {
    const [expandedPanels, setExpandedPanels] = useState<string[]>([]);

    const handleToggle = (panelId: string) => {
      setExpandedPanels(prev => 
        prev.includes(panelId) 
          ? prev.filter(id => id !== panelId)
          : [...prev, panelId]
      );
    };

    return (
      <Accordion {...args}>
        <AccordionPanel
          id="panel1"
          title="Section 1"
          summary="This is the first section"
          expanded={expandedPanels.includes('panel1')}
          onTogglePanel={() => handleToggle('panel1')}
        >
          <div className="slds-p-around_medium">
            <p>Content for section 1</p>
          </div>
        </AccordionPanel>
        <AccordionPanel
          id="panel2"
          title="Section 2"
          summary="This is the second section"
          expanded={expandedPanels.includes('panel2')}
          onTogglePanel={() => handleToggle('panel2')}
        >
          <div className="slds-p-around_medium">
            <p>Content for section 2</p>
          </div>
        </AccordionPanel>
      </Accordion>
    );
  },
  args: {},
};

export const Expanded = {
  render: (args: any) => {
    const [expandedPanels, setExpandedPanels] = useState<string[]>(['panel1']);

    const handleToggle = (panelId: string) => {
      setExpandedPanels(prev => 
        prev.includes(panelId) 
          ? prev.filter(id => id !== panelId)
          : [...prev, panelId]
      );
    };

    return (
      <Accordion {...args}>
        <AccordionPanel
          id="panel1"
          title="Section 1"
          summary="This is the first section"
          expanded={expandedPanels.includes('panel1')}
          onTogglePanel={() => handleToggle('panel1')}
        >
          <div className="slds-p-around_medium">
            <p>Content for section 1</p>
          </div>
        </AccordionPanel>
        <AccordionPanel
          id="panel2"
          title="Section 2"
          summary="This is the second section"
          expanded={expandedPanels.includes('panel2')}
          onTogglePanel={() => handleToggle('panel2')}
        >
          <div className="slds-p-around_medium">
            <p>Content for section 2</p>
          </div>
        </AccordionPanel>
      </Accordion>
    );
  },
  args: {},
};

export const Disabled = {
  render: (args: any) => {
    const [expandedPanels, setExpandedPanels] = useState<string[]>([]);

    const handleToggle = (panelId: string) => {
      setExpandedPanels(prev => 
        prev.includes(panelId) 
          ? prev.filter(id => id !== panelId)
          : [...prev, panelId]
      );
    };

    return (
      <Accordion {...args}>
        <AccordionPanel
          id="panel1"
          title="Section 1"
          summary="This is the first section"
          disabled
          expanded={expandedPanels.includes('panel1')}
          onTogglePanel={() => handleToggle('panel1')}
        >
          <div className="slds-p-around_medium">
            <p>Content for section 1</p>
          </div>
        </AccordionPanel>
        <AccordionPanel
          id="panel2"
          title="Section 2"
          summary="This is the second section"
          expanded={expandedPanels.includes('panel2')}
          onTogglePanel={() => handleToggle('panel2')}
        >
          <div className="slds-p-around_medium">
            <p>Content for section 2</p>
          </div>
        </AccordionPanel>
      </Accordion>
    );
  },
  args: {},
};

export const WithCustomContent = {
  render: (args: any) => {
    const [expandedPanels, setExpandedPanels] = useState<string[]>([]);

    const handleToggle = (panelId: string) => {
      setExpandedPanels(prev => 
        prev.includes(panelId) 
          ? prev.filter(id => id !== panelId)
          : [...prev, panelId]
      );
    };

    return (
      <Accordion {...args}>
        <AccordionPanel
          id="panel1"
          title="Section 1"
          summary="This is the first section"
          expanded={expandedPanels.includes('panel1')}
          onTogglePanel={() => handleToggle('panel1')}
        >
          <div className="slds-p-around_medium">
            <h3 className="slds-text-heading_medium">Custom Content</h3>
            <p className="slds-m-top_small">This section contains custom styled content</p>
            <button className="slds-button slds-button_neutral slds-m-top_small">Custom Button</button>
          </div>
        </AccordionPanel>
        <AccordionPanel
          id="panel2"
          title="Section 2"
          summary="This is the second section"
          expanded={expandedPanels.includes('panel2')}
          onTogglePanel={() => handleToggle('panel2')}
        >
          <div className="slds-p-around_medium">
            <h3 className="slds-text-heading_medium">More Custom Content</h3>
            <p className="slds-m-top_small">Another section with custom styled content</p>
            <input 
              type="text" 
              placeholder="Custom Input" 
              className="slds-input slds-m-top_small"
            />
          </div>
        </AccordionPanel>
      </Accordion>
    );
  },
  args: {},
}; 