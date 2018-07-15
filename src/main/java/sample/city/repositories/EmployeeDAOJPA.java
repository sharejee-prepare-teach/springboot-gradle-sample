package sample.city.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import sample.city.models.Employee;

/**
 * Created by Rith on 7/15/2018.
 */
public interface EmployeeDAOJPA extends PagingAndSortingRepository<Employee,Long> {
}
