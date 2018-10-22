package sample.city.controllers.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import sample.city.services.PersonServiceCRUD;

/**
 * Created by Rith on 10/10/2018.
 */
@Controller
@RequestMapping("/items")
public class MainPersonController {

    @RequestMapping(value="/person_list")
    public String getPrinterPersonHome() {
        return "/person/person_list";
    }

    @RequestMapping(value="/home2")
    public String getPrinterPersonHome2() {
        return "/person/home2";
    }

    @RequestMapping(value = "/create")
    public String toSavePerson(){
        return "/person/create";
    }

    @RequestMapping(value = "/personedit")
    public String toEditPerson(){
        return "/person/edit";
    }
    @RequestMapping(value = "/personupdate")
    public String toUpdatePerson(){
        return "/person/edit";
    }
    @RequestMapping(value = "/persondetail")
    public String toDetailPerson(){
        return "/person/detail";
    }

    /*@RequestMapping(value="/delete")
    public String getDelete() {
        return "/person/delete";
    }*/
}
