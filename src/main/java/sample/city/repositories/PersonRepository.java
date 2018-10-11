package sample.city.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import sample.city.models.test.Person;

/**
 * Created by DELL on 10/11/2018.
 */
public interface PersonRepository extends JpaRepository<Person,Long> {
}
