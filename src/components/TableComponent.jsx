import React from "react";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";

const data = [
  {
    name: "Ives Bertwistle",
    Role: "Electrical Engineer",
    department: "Marketing",
    status: "active",
  },
  { name: "York Ingraham",
   Role: "Nurse",
    department: "HR", 
    status: "inactive" 
},
  {
    name: "Kylen Hafner",
    Role: "Mechanical Systems Engineer",
    department: "Finance",
    status: "active",
  },
  {
    name: "Mortimer Malatalant",
    Role: "Analyst Programmer",
    department: "Finance",
    status: "active",
  },
  {
    name: "Joey Fishbie",
    Role: "Nuclear Power Engineer",
    department: "Marketing",
    status: "active",
  },
  {
    name: "Tessy Koba",
    Role: "Computer Systems Analyst II",
    department: "HR",
    status: "active",
  },
  { name: "Rubina Cannings", Role: "Legal Assistant", department: "HR",  status: "active", },
  {
    name: "Livvyy Cushelly",
    Role: "VP Product Management",
    department: "Finance",
    status: "active",
  },
  {
    name: "Glyn Ashlee",
    Role: "Environmental Specialist",
    department: "IT",
    status: "active",
  },
  {
    name: "Rollo Ketch",
    Role: "Staff Scientist",
    department: "Sales",
    status: "inactive",
  },
];

const TableComponent = () => {
  return (
    <Card className="mt-4">
      <Title>List of Employees in the Company</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Position</TableHeaderCell>
            <TableHeaderCell>Department</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <Text>{item.Role}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.department}</Text>
              </TableCell>
              <TableCell>
                <Badge color="emerald" icon={StatusOnlineIcon}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableComponent;
