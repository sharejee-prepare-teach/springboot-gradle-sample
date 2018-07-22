package sample.city.services;

import sample.city.models.person.Person;

import java.util.Iterator;
import java.util.List;

/**
 * Created by Rith on 7/16/2018.
 */
public interface PersonService {
    List<Person> getAll();

    List<Person> getByID(Long id);

    Person getOnePerson(Long id);

    Person save(Person person);

    Person update(Person person);

    void delete(Long id);
}
