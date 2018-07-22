package sample.city.models.person;

import javax.persistence.*;

/**
 * Created by Rith on 7/16/2018.
 */
@Entity
@Table(name = "td_person")
public class Person {
    private Long id;
    private String name;

    public Person() {
    }

    public Person(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Person(PersonHelper personHelper){
        this.id = personHelper.getId();
        this.name = personHelper.getName();
    }

}
