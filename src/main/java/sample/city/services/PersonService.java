package sample.city.services;

import sample.city.models.test.Person;

import java.util.List;

/**
 * Created by Rith on 10/9/2018.
 */
public interface PersonService {
    Person findById(Long id);

    List<Person> getPerson();
}
