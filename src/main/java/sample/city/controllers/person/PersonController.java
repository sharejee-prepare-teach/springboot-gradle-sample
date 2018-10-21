package sample.city.controllers.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import sample.city.models.test.Person;
import sample.city.services.PersonService;
import sample.city.services.PersonServiceCRUD;

import javax.validation.Valid;

/**
 * Created by Rith on 10/9/2018.
 */
@Controller
@RequestMapping(value = "/item")
public class PersonController {
    @Autowired
    private PersonServiceCRUD personService;

    @RequestMapping(value="/person_list")
    public ResponseEntity<Object> findPersonHome() {
        System.out.println("findPersonHomelist");
        Object item = 	personService.getListPerson();
        if(item == null){
            return new ResponseEntity<Object>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<Object>(item, HttpStatus.OK);
    }
    @RequestMapping(value="/home2")
    public ResponseEntity<Object> findPersonHome2() {
        System.out.println("findPersonHome2");
        Object item = 	personService.getListPerson();
        if(item == null){
            return new ResponseEntity<Object>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<Object>(item, HttpStatus.OK);
    }

    @RequestMapping(value="/save",method = RequestMethod.POST)
    public ResponseEntity<Object> findPersonToSave(@RequestBody Person person) {
        System.out.println("findPersonHome2");
        Object item = 	personService.save(person);
        if(item == null){
            return new ResponseEntity<Object>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<Object>(item, HttpStatus.OK);
    }

    @RequestMapping(path = "/edit/{id}")
    public ResponseEntity<Object> editPerson(@PathVariable(value = "id") Long id) {
        Person item = 	personService.findByID(id);
        if(item == null){
            return new ResponseEntity<Object>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<Object>(item,HttpStatus.OK);
    }

    @RequestMapping(value="/detail/{id}")
    public ResponseEntity<Person> findSpecificPerson(@PathVariable("id") long id) {
        Person item = 	personService.findByID(id);
        if(item == null){
            return new ResponseEntity<Person>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<Person>(item, HttpStatus.OK);
    }
    @RequestMapping(value = "/personupdateSave",method = RequestMethod.POST)
    public ResponseEntity<Object> updatePerson(@RequestBody Person person) {
        if(person == null){
            personService.save(person);
            return new ResponseEntity<Object>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<Object>(person,HttpStatus.OK);
    }
}
