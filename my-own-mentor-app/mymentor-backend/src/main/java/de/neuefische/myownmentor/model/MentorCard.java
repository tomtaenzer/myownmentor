package de.neuefische.myownmentor.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MentorCard {

    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String university;
    private String subject;
    private String description;
    private String pricing;
    private String email;

}
