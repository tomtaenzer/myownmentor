package de.neuefische.myownmentor.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AppUser {

    private String id;
    private String username;
    private String password;
    private boolean isMentor;
}
