package de.neuefische.myownmentor.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {

    private int id;
    private String name;
    private String lastName;
    private String university;
  /*  private int payment;
    private String subject;
    private String Description;
    */

}
