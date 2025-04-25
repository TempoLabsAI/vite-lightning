import { Tree, Button, Icon, IconSettings } from '@salesforce/design-system-react';
import { useState } from 'react';

const meta = {
  title: 'SLDS/Tree',
  component: Tree,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    onExpandClick: { action: 'expanded' },
  },
};
export default meta;

const sampleNodes = [
  {
    id: '1',
    label: 'Parent 1',
    type: 'branch',
    nodes: [
      {
        id: '1-1',
        label: 'Child 1-1',
        type: 'item',
      },
      {
        id: '1-2',
        label: 'Child 1-2',
        type: 'item',
      },
    ],
  },
  {
    id: '2',
    label: 'Parent 2',
    type: 'branch',
    nodes: [
      {
        id: '2-1',
        label: 'Child 2-1',
        type: 'item',
      },
      {
        id: '2-2',
        label: 'Child 2-2',
        type: 'item',
      },
    ],
  },
];

export const Base = {
  render: (args: any) => {
    const [nodes, setNodes] = useState(sampleNodes);
    const [selectedNode, setSelectedNode] = useState<string | null>(null);

    const handleClick = (node: any) => {
      setSelectedNode(node.id);
    };

    const handleExpand = (node: any) => {
      setNodes(prev => 
        prev.map(n => 
          n.id === node.id 
            ? { ...n, expanded: !n.expanded }
            : n
        )
      );
    };

    return (
      <IconSettings iconPath="/assets/icons">
        <Tree
          {...args}
          nodes={nodes}
          selectedNode={selectedNode}
          onClick={handleClick}
          onExpandClick={handleExpand}
        />
      </IconSettings>
    );
  },
  args: {},
};

export const WithIcons = {
  render: (args: any) => {
    const [nodes, setNodes] = useState(sampleNodes.map(node => ({
      ...node,
      icon: <Icon category="utility" name="folder" size="small" />,
      nodes: node.nodes?.map(child => ({
        ...child,
        icon: <Icon category="utility" name="file" size="small" />,
      })),
    })));
    const [selectedNode, setSelectedNode] = useState<string | null>(null);

    const handleClick = (node: any) => {
      setSelectedNode(node.id);
    };

    const handleExpand = (node: any) => {
      setNodes(prev => 
        prev.map(n => 
          n.id === node.id 
            ? { ...n, expanded: !n.expanded }
            : n
        )
      );
    };

    return (
      <IconSettings iconPath="/assets/icons">
        <Tree
          {...args}
          nodes={nodes}
          selectedNode={selectedNode}
          onClick={handleClick}
          onExpandClick={handleExpand}
        />
      </IconSettings>
    );
  },
  args: {},
};

export const WithSearch = {
  render: (args: any) => {
    const [nodes, setNodes] = useState(sampleNodes);
    const [selectedNode, setSelectedNode] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleClick = (node: any) => {
      setSelectedNode(node.id);
    };

    const handleExpand = (node: any) => {
      setNodes(prev => 
        prev.map(n => 
          n.id === node.id 
            ? { ...n, expanded: !n.expanded }
            : n
        )
      );
    };

    return (
      <IconSettings iconPath="/assets/icons">
        <div>
          <div className="slds-m-bottom_medium">
            <input
              type="text"
              className="slds-input"
              placeholder="Search nodes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Tree
            {...args}
            nodes={nodes}
            selectedNode={selectedNode}
            onClick={handleClick}
            onExpandClick={handleExpand}
            searchTerm={searchTerm}
          />
        </div>
      </IconSettings>
    );
  },
  args: {},
};

export const WithCustomStyling = {
  render: (args: any) => {
    const [nodes, setNodes] = useState(sampleNodes);
    const [selectedNode, setSelectedNode] = useState<string | null>(null);

    const handleClick = (node: any) => {
      setSelectedNode(node.id);
    };

    const handleExpand = (node: any) => {
      setNodes(prev => 
        prev.map(n => 
          n.id === node.id 
            ? { ...n, expanded: !n.expanded }
            : n
        )
      );
    };

    return (
      <IconSettings iconPath="/assets/icons">
        <Tree
          {...args}
          nodes={nodes}
          selectedNode={selectedNode}
          onClick={handleClick}
          onExpandClick={handleExpand}
          className="slds-tree_custom"
          listClassName="slds-tree_custom-list"
          listStyle={{ padding: '1rem' }}
        />
      </IconSettings>
    );
  },
  args: {},
}; 