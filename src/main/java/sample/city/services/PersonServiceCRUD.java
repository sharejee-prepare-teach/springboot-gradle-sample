package sample.city.services;

import sample.city.models.test.Person;

import java.util.List;

/**
 * Created by DELL on 10/11/2018.
 */
public interface PersonServiceCRUD {
    List<Person> getListPerson();

    Person save(Person person);

    Person findByID(Long id);

    void delete(Long id);

}
