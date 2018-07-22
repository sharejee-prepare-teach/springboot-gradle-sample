package sample.city.controllers.person;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Rith on 7/21/2018.
 */
@Controller
public class MainPersonController {
    @RequestMapping("/api")
    public String welcome() {
        return "/person/index";
    }
}
