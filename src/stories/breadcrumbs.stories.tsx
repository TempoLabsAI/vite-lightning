import { Breadcrumb } from '@salesforce/design-system-react';
import { useState } from 'react';

const meta = {
  title: 'SLDS/Breadcrumbs',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};
export default meta;

export const Base = {
  render: (args: any) => {
    const [activeItem, setActiveItem] = useState('');

    const handleClick = (href: string) => {
      setActiveItem(href);
    };

    return (
      <Breadcrumb
        {...args}
        trail={[
          { label: 'Home', href: '#', onClick: () => handleClick('#') },
          { label: 'Accounts', href: '#accounts', onClick: () => handleClick('#accounts') },
          { label: 'Company One', href: '#company', onClick: () => handleClick('#company') },
        ]}
      />
    );
  },
  args: {
    assistiveText: { label: 'Breadcrumb' },
  },
};

export const WithOverflow = {
  render: (args: any) => {
    const [activeItem, setActiveItem] = useState('');

    const handleClick = (href: string) => {
      setActiveItem(href);
    };

    return (
      <Breadcrumb
        {...args}
        trail={[
          { label: 'Home', href: '#', onClick: () => handleClick('#') },
          { label: 'Accounts', href: '#accounts', onClick: () => handleClick('#accounts') },
          { label: 'Company One', href: '#company', onClick: () => handleClick('#company') },
          { label: 'Contacts', href: '#contacts', onClick: () => handleClick('#contacts') },
          { label: 'John Doe', href: '#john', onClick: () => handleClick('#john') },
        ]}
        overflowDropdownMenu={{
          trigger: 'More',
          options: [
            { label: 'Accounts', href: '#accounts', onClick: () => handleClick('#accounts') },
            { label: 'Company One', href: '#company', onClick: () => handleClick('#company') },
          ],
        }}
      />
    );
  },
  args: {
    assistiveText: { label: 'Breadcrumb' },
  },
};

export const WithCustomStyling = {
  render: (args: any) => {
    const [activeItem, setActiveItem] = useState('');

    const handleClick = (href: string) => {
      setActiveItem(href);
    };

    return (
      <Breadcrumb
        {...args}
        trail={[
          { label: 'Home', href: '#', onClick: () => handleClick('#') },
          { label: 'Accounts', href: '#accounts', onClick: () => handleClick('#accounts') },
          { label: 'Company One', href: '#company', onClick: () => handleClick('#company') },
        ]}
        styleContainer={{
          padding: '1rem',
          backgroundColor: '#f3f2f2',
          borderRadius: '0.25rem',
        }}
      />
    );
  },
  args: {
    assistiveText: { label: 'Breadcrumb' },
  },
};

export const WithLongLabels = {
  render: (args: any) => {
    const [activeItem, setActiveItem] = useState('');

    const handleClick = (href: string) => {
      setActiveItem(href);
    };

    return (
      <Breadcrumb
        {...args}
        trail={[
          { label: 'Home', href: '#', onClick: () => handleClick('#') },
          { label: 'Very Long Account Name That Might Overflow', href: '#long', onClick: () => handleClick('#long') },
          { label: 'Another Long Label That Could Cause Issues', href: '#longer', onClick: () => handleClick('#longer') },
        ]}
      />
    );
  },
  args: {
    assistiveText: { label: 'Breadcrumb' },
  },
};

export const WithIcons = {
  render: (args: any) => {
    const [activeItem, setActiveItem] = useState('');

    const handleClick = (href: string) => {
      setActiveItem(href);
    };

    return (
      <Breadcrumb
        {...args}
        trail={[
          { label: 'Home', href: '#', onClick: () => handleClick('#'), icon: { name: 'home', category: 'utility' } },
          { label: 'Accounts', href: '#accounts', onClick: () => handleClick('#accounts'), icon: { name: 'account', category: 'standard' } },
          { label: 'Company One', href: '#company', onClick: () => handleClick('#company'), icon: { name: 'company', category: 'standard' } },
        ]}
      />
    );
  },
  args: {
    assistiveText: { label: 'Breadcrumb' },
  },
}; 