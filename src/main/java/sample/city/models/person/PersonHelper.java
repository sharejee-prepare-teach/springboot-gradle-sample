package sample.city.models.person;

/**
 * Created by Rith on 7/21/2018.
 */
public class PersonHelper {
    private Long id;
    private String name;

    public PersonHelper(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public PersonHelper() {
    }

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
}
