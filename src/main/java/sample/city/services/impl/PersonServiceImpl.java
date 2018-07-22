package sample.city.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sample.city.models.person.Person;
import sample.city.repositories.person.PersonRepository;
import sample.city.services.*;

import java.util.List;

/**
 * Created by Rith on 7/17/2018.
 */
@Service
@Transactional
public class PersonServiceImpl implements PersonService{
    @Autowired
    public PersonRepository personRepository;


    @Override
    public List<Person> getAll() {
        return personRepository.findAll();

    }

    @Override
    public List<Person> getByID(Long id) {
        return null;
    }

    @Override
    public Person getOnePerson(Long id) {
        return null;
    }

    @Override
    public Person save(Person person) {
        return personRepository.save(person);
    }

    @Override
    public Person update(Person person) {
        return personRepository.save(person);
    }

    @Override
    public void delete(Long id) {
        personRepository.delete(id);
    }
}
