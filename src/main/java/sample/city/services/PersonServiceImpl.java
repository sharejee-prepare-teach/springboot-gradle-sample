package sample.city.services;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sample.city.models.test.Person;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Rith on 10/9/2018.
 */
@Service
@Transactional
public class PersonServiceImpl implements PersonService {
    @Override
    public Person findById(Long id) {
        List<Person> personList = getListPerson();
        for (Person person : personList) {
            if (person.getId() == id) {
                return person;
            }
        }
        return null;
    }

    @Override
    public List<Person> getPerson() {
        return getListPerson();
    }

    public List<Person> getListPerson(){
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
