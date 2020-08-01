package de.neuefische.myownmentor.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppUserDto {
    /*
            @Size(min = 5, message = "user mind length 5")
        */
        private String username;
        private String password;
        private String firstname;
        private String lastname;
        private String email;
    }

