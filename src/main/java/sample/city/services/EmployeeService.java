package sample.city.services;

import sample.city.models.Employee;
import sample.city.models.EmployeeForm;

import java.util.List;

/**
 * Created by Rith on 7/15/2018.
 */
public interface EmployeeService {
    Long getMaxEmpId();

    Employee getEmployee(Long empId);

    Employee addEmployee(EmployeeForm empForm);

    Employee updateEmployee(EmployeeForm empForm);

    void deleteEmployee(Long empId);

    List<Employee> getAllEmployees();
}
