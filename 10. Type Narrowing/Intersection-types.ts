type Employee = {
  id: number;
  name: string;
};
type Manager = {
  department: string;
  role: string;
};
type EmployeeAndManager = Employee & Manager;

const manager: EmployeeAndManager = {
  id: 1,
  name: "Abdullah",
  department: "IT",
  role: "HR",
};
console.log(manager);
