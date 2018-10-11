package sample.city.controllers.animation;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by DELL on 10/11/2018.
 */
@Controller
@RequestMapping(value = "/animate")
public class AnimationController {
    @RequestMapping(value = "/page_home",method = RequestMethod.GET)
    private String toHomePage(){
        return "/animate/page-home";
    }

    @RequestMapping(value = "/about",method = RequestMethod.GET)
    private String toAboutPage(){
        return "/animate/page-about";
    }

    @RequestMapping(value = "/contact",method = RequestMethod.GET)
    private String toContactPage(){
        return "/animate/page-contact";
    }

    @RequestMapping(value = "/index",method = RequestMethod.GET)
    private String toIndexPage(){
        return "/animate/index";
    }
}
