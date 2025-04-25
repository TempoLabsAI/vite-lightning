import {
    DataTable,
    DataTableColumn,
    DataTableCell,
    DataTableRowActions,
  } from "@salesforce/design-system-react";
  import { useState } from "react";
  
  const meta = {
    title: "SLDS/DataTable",
    component: DataTable,
    tags: ["autodocs"],
    argTypes: {
      onSort: { action: "sorted" },
      onRowChange: { action: "row changed" },
    },
  };
  export default meta;
  
  export const Base = {
    render: (args: any) => {
      const sampleData = [
        { id: "1", name: "John Doe", email: "john@example.com", role: "Admin" },
        { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User" },
        { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "User" },
      ];
  
      const [items, setItems] = useState(sampleData);
      const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
      const [sortedColumn, setSortedColumn] = useState<string>("name");
  
      const handleSort = (column: string) => {
        const newDirection =
          column === sortedColumn && sortDirection === "asc" ? "desc" : "asc";
        setSortDirection(newDirection);
        setSortedColumn(column);
  
        const sortedItems = [...items].sort((a, b) => {
          const aValue = a[column as keyof typeof a];
          const bValue = b[column as keyof typeof b];
          return newDirection === "asc"
            ? String(aValue).localeCompare(String(bValue))
            : String(bValue).localeCompare(String(aValue));
        });
  
        setItems(sortedItems);
      };
  
      return (
        <DataTable {...args} items={items} onSort={handleSort}>
          <DataTableColumn
            label="Name"
            property="name"
            sortable
            sortDirection={sortedColumn === "name" ? sortDirection : undefined}
          />
          <DataTableColumn
            label="Email"
            property="email"
            sortable
            sortDirection={sortedColumn === "email" ? sortDirection : undefined}
          />
          <DataTableColumn
            label="Role"
            property="role"
            sortable
            sortDirection={sortedColumn === "role" ? sortDirection : undefined}
          />
        </DataTable>
      );
    },
    args: {},
  };
  
  export const WithRowActions = {
    render: (args: any) => {
      const sampleData = [
        { id: "1", name: "John Doe", email: "john@example.com", role: "Admin" },
        { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User" },
        { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "User" },
      ];
  
      const [items, setItems] = useState(sampleData);
  
      const handleAction = (action: string, item: any) => {
        console.log(`Action ${action} on item ${item.id}`);
      };
  
      return (
        <DataTable {...args} items={items}>
          <DataTableColumn label="Name" property="name" />
          <DataTableColumn label="Email" property="email" />
          <DataTableColumn label="Role" property="role" />
          <DataTableRowActions
            options={[
              { label: "Edit", value: "edit" },
              { label: "Delete", value: "delete" },
            ]}
            onAction={(action, item) => handleAction(action, item)}
          />
        </DataTable>
      );
    },
    args: {},
  };
  
  export const WithCustomCells = {
    render: (args: any) => {
      const sampleData = [
        { id: "1", name: "John Doe", email: "john@example.com", role: "Admin" },
        { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User" },
        { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "User" },
      ];
  
      const [items, setItems] = useState(sampleData);
  
      return (
        <DataTable {...args} items={items}>
          <DataTableColumn label="Name" property="name">
            <DataTableCell>
              {(item) => (
                <div className="slds-truncate" title={item.name}>
                  <strong>{item.name}</strong>
                </div>
              )}
            </DataTableCell>
          </DataTableColumn>
          <DataTableColumn label="Email" property="email">
            <DataTableCell>
              {(item) => (
                <a href={`mailto:${item.email}`} className="slds-truncate">
                  {item.email}
                </a>
              )}
            </DataTableCell>
          </DataTableColumn>
          <DataTableColumn label="Role" property="role">
            <DataTableCell>
              {(item) => (
                <span
                  className={`slds-badge slds-badge_${item.role === "Admin" ? "success" : "lightest"}`}
                >
                  {item.role}
                </span>
              )}
            </DataTableCell>
          </DataTableColumn>
        </DataTable>
      );
    },
    args: {},
  };
  
  export const WithSelection = {
    render: (args: any) => {
      const sampleData = [
        { id: "1", name: "John Doe", email: "john@example.com", role: "Admin" },
        { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User" },
        { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "User" },
      ];
  
      const [items, setItems] = useState(sampleData);
      const [selectedRows, setSelectedRows] = useState<string[]>([]);
  
      const handleRowChange = (selectedRows: string[]) => {
        setSelectedRows(selectedRows);
      };
  
      return (
        <DataTable
          {...args}
          items={items}
          selection={selectedRows}
          onRowChange={handleRowChange}
        >
          <DataTableColumn label="Name" property="name" />
          <DataTableColumn label="Email" property="email" />
          <DataTableColumn label="Role" property="role" />
        </DataTable>
      );
    },
    args: {},
  };
  