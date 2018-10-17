package sample.city.controllers.person;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

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

    @RequestMapping(value = "/edit")
    public String toEditPerson(){
        return "/person/edit";
    }
}
