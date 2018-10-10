package sample.city.controllers.person;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/person")
public class IndexPersonController {//Serves main index.html
	  	@RequestMapping(method = RequestMethod.GET)
	    public String getIndexPage() {
	        return "/person/home";
	    }
	  
	  	
}
