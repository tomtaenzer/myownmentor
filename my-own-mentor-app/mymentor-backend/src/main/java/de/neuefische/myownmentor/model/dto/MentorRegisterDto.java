package de.neuefische.myownmentor.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MentorRegisterDto {

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
