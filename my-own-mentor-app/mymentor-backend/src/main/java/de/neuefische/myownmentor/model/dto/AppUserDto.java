package de.neuefische.myownmentor.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppUserDto {
    /*
            @Size(min = 5, message = "user mind length 5")
        */
        private String username;
        private String firstName;
        private String lastName;
        private String email;
        @Size(min = 5, message = "user mind length 5")
        private String password;
        private boolean isMentor;

    }

