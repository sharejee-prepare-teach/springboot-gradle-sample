package sample.city.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sample.city.models.test.Person;
import sample.city.repositories.PersonRepository;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by DELL on 10/11/2018.
 */
@Service
public class PersonServiceCRUDImpl implements PersonServiceCRUD {
    @Autowired
    private PersonRepository personRepository;

    @Override
    public List<Person> getListPerson() {
        List<Person> personList = personRepository.findAll();
        Boolean b = false;
        if (personList.size() < 5 || personList == null) {
            personList = getListPersonDefault();
            for (Person person : personList) {
                save(person);
            }
            b = true;
        }
        if (b == true) {
            personList = personRepository.findAll();
            return personList;
        }

        return personList;
    }

    @Override
    public Person save(Person person) {
        return personRepository.save(person);
    }

    public List<Person> getListPersonDefault(){
        List<Person> personList = new ArrayList<>();
        for (Long i = 0L; i < 5L; i++) {
            Person person = new Person();
            person.setId(i);
            person.setName("Per name " + i);
            personList.add(person);

        }
        return personList;
    }
}
