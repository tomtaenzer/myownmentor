package de.neuefische.myownmentor.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "MentorUser")
public class AppUser {

    @Id
    private String username;
    private String firstName;
    private String lastName;
    private String eMail;
    private String password;
    private boolean isMentor;

}
