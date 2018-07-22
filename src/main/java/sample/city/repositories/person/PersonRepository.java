package sample.city.repositories.person;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import sample.city.models.person.Person;

/**
 * Created by Rith on 7/16/2018.
 */
public interface PersonRepository extends JpaRepository<Person,Long> {
}
