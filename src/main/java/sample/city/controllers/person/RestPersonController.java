package sample.city.controllers.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import sample.city.models.person.Person;
import sample.city.services.PersonService;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Rith on 7/17/2018.
 */
@RestController
@RequestMapping(value = "/api/persons")
public class RestPersonController {
    @Autowired
    public PersonService personService;

    @RequestMapping(method = RequestMethod.GET)
    private List<Person> getAllPerson(){
        List<Person> personList = personService.getAll();
        if (personList != null && personList.size()>3) {
            return personList;
        } else {
            for (int i = 0; i < 4; i++) {
                Person person = new Person();
                person.setName("Hello " + i);
                personService.save(person);
            }
            return personList = personService.getAll();
        }
    }

    @RequestMapping(method = RequestMethod.POST)
    private Person savePerson(@RequestBody @Valid Person person){
        System.out.println("save person");
        return personService.save(person);
    }

    @RequestMapping(method = RequestMethod.PUT)
    private Person updatePerson(@RequestBody @Valid Person person){
        System.out.println("update person");
        return personService.update(person);
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    private void deletePerson(@PathVariable("id") Long id){
        System.out.println("delete person");
        personService.delete(id);
    }
}
