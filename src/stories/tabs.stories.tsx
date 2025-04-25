import { Tabs, TabsPanel, Icon, IconSettings } from '@salesforce/design-system-react';
import { useState } from 'react';

const meta = {
  title: 'SLDS/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    onSelect: { action: 'selected' },
  },
};
export default meta;

export const Base = {
  render: (args: any) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
      <IconSettings iconPath="/assets/icons">
        <Tabs
          {...args}
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
        >
          <TabsPanel label="Tab One">
            <div className="slds-p-around_medium">
              <p>Content for Tab One</p>
            </div>
          </TabsPanel>
          <TabsPanel label="Tab Two">
            <div className="slds-p-around_medium">
              <p>Content for Tab Two</p>
            </div>
          </TabsPanel>
          <TabsPanel label="Tab Three">
            <div className="slds-p-around_medium">
              <p>Content for Tab Three</p>
            </div>
          </TabsPanel>
        </Tabs>
      </IconSettings>
    );
  },
  args: {},
};

export const WithIcons = {
  render: (args: any) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
      <IconSettings iconPath="/assets/icons">
        <Tabs
          {...args}
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
        >
          <TabsPanel
            label="Home"
            icon={<Icon category="utility" name="home" size="small" />}
          >
            <div className="slds-p-around_medium">
              <p>Home tab content</p>
            </div>
          </TabsPanel>
          <TabsPanel
            label="Settings"
            icon={<Icon category="utility" name="settings" size="small" />}
          >
            <div className="slds-p-around_medium">
              <p>Settings tab content</p>
            </div>
          </TabsPanel>
          <TabsPanel
            label="Info"
            icon={<Icon category="utility" name="info" size="small" />}
          >
            <div className="slds-p-around_medium">
              <p>Info tab content</p>
            </div>
          </TabsPanel>
        </Tabs>
      </IconSettings>
    );
  },
  args: {},
};

export const Scoped = {
  render: (args: any) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
      <IconSettings iconPath="/assets/icons">
        <Tabs
          {...args}
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
          variant="scoped"
        >
          <TabsPanel label="Tab One">
            <div className="slds-p-around_medium">
              <p>Content for Tab One</p>
            </div>
          </TabsPanel>
          <TabsPanel label="Tab Two">
            <div className="slds-p-around_medium">
              <p>Content for Tab Two</p>
            </div>
          </TabsPanel>
          <TabsPanel label="Tab Three">
            <div className="slds-p-around_medium">
              <p>Content for Tab Three</p>
            </div>
          </TabsPanel>
        </Tabs>
      </IconSettings>
    );
  },
  args: {},
};

export const Vertical = {
  render: (args: any) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
      <IconSettings iconPath="/assets/icons">
        <Tabs
          {...args}
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
          variant="vertical"
        >
          <TabsPanel label="Tab One">
            <div className="slds-p-around_medium">
              <p>Content for Tab One</p>
            </div>
          </TabsPanel>
          <TabsPanel label="Tab Two">
            <div className="slds-p-around_medium">
              <p>Content for Tab Two</p>
            </div>
          </TabsPanel>
          <TabsPanel label="Tab Three">
            <div className="slds-p-around_medium">
              <p>Content for Tab Three</p>
            </div>
          </TabsPanel>
        </Tabs>
      </IconSettings>
    );
  },
  args: {},
}; 