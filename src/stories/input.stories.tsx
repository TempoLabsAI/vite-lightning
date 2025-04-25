import { Input } from '@salesforce/design-system-react';
import { Icon } from '@salesforce/design-system-react';
import { useState } from 'react';

const meta = {
  title: 'SLDS/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    errorText: { control: 'text' },
    inlineHelpText: { control: 'text' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    onChange: { action: 'changed' },
  },
};

export default meta;

export const Base = {
  render: (args: any) => {
    const [value, setValue] = useState('');

    return (
      <Input
        {...args}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Input Label',
    placeholder: 'Enter text here',
  },
};

export const WithHelperText = {
  render: (args: any) => {
    const [value, setValue] = useState('');

    return (
      <Input
        {...args}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Input with Helper Text',
    placeholder: 'Enter text here',
    inlineHelpText: 'This is a helper text',
  },
};

export const WithError = {
  render: (args: any) => {
    const [value, setValue] = useState('');

    return (
      <Input
        {...args}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Input with Error',
    placeholder: 'Enter text here',
    error: true,
    errorText: 'This field is required',
  },
};

export const Disabled = {
  render: (args: any) => {
    const [value, setValue] = useState('');

    return (
      <Input
        {...args}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Disabled Input',
    placeholder: 'Enter text here',
    disabled: true,
  },
};

export const Required = {
  render: (args: any) => {
    const [value, setValue] = useState('');

    return (
      <Input
        {...args}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Required Input',
    placeholder: 'Enter text here',
    required: true,
  },
};

export const DifferentTypes = {
  render: (args: any) => {
    const [values, setValues] = useState({
      email: '',
      password: '',
      number: '',
      tel: '',
      url: '',
    });

    const handleChange = (type: string) => (e: any) => {
      setValues(prev => ({ ...prev, [type]: e.target.value }));
    };

    return (
      <div className="slds-grid slds-grid_vertical slds-gutters">
        <Input
          label="Email Input"
          type="email"
          placeholder="Enter email"
          value={values.email}
          onChange={handleChange('email')}
        />
        <Input
          label="Password Input"
          type="password"
          placeholder="Enter password"
          value={values.password}
          onChange={handleChange('password')}
        />
        <Input
          label="Number Input"
          type="number"
          placeholder="Enter number"
          value={values.number}
          onChange={handleChange('number')}
        />
        <Input
          label="Tel Input"
          type="tel"
          placeholder="Enter phone number"
          value={values.tel}
          onChange={handleChange('tel')}
        />
        <Input
          label="URL Input"
          type="url"
          placeholder="Enter URL"
          value={values.url}
          onChange={handleChange('url')}
        />
      </div>
    );
  },
  args: {},
};

export const WithIcons = {
  render: (args: any) => {
    const [value, setValue] = useState('');

    return (
      <div className="slds-grid slds-grid_vertical slds-gutters">
        <Input
          label="Input with Left Icon"
          placeholder="Enter text"
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          iconLeft={<Icon category="utility" name="search" size="small" />}
        />
        <Input
          label="Input with Right Icon"
          placeholder="Enter text"
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          iconRight={<Icon category="utility" name="check" size="small" />}
        />
        <Input
          label="Input with Both Icons"
          placeholder="Enter text"
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          iconLeft={<Icon category="utility" name="search" size="small" />}
          iconRight={<Icon category="utility" name="check" size="small" />}
        />
      </div>
    );
  },
  args: {},
}; 