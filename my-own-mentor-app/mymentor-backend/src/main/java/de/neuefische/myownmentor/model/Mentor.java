package de.neuefische.myownmentor.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document(collection = "Mentor")
public class Mentor {

    @Id
    private String mentorUserName;
    private String password;
    private String mentorName;
    private String mentorLastName;
    private String university;
    private String subject;
    private String semester;
    private String eMailAddress;
    private String pricing;

}

