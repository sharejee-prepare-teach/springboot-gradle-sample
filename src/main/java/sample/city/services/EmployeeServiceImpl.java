package sample.city.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sample.city.models.Employee;
import sample.city.models.EmployeeForm;
import sample.city.repositories.EmployeeDAOJPA;

import java.util.List;

/**
 * Created by Rith on 7/15/2018.
 */
@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    public EmployeeDAOJPA employeeDAOJPA;

    @Override
    public Long getMaxEmpId() {
        return null;
    }

    @Override
    public Employee getEmployee(Long empId) {
        return employeeDAOJPA.findOne(empId);
    }

    @Override
    public Employee addEmployee(EmployeeForm empForm) {
        //return employeeDAOJPA.save(empForm);
        return null;
    }

    @Override
    public Employee updateEmployee(EmployeeForm empForm) {
        return null;
    }

    @Override
    public void deleteEmployee(Long empId) {

    }

    @Override
    public List<Employee> getAllEmployees() {
        return null;
    }
}
