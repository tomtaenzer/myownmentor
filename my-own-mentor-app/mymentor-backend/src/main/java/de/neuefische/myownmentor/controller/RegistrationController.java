package de.neuefische.myownmentor.controller;

import de.neuefische.myownmentor.model.AppUser;
import de.neuefische.myownmentor.model.dto.AppUserDto;
import de.neuefische.myownmentor.service.AppUserService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("auth/register")
public class RegistrationController {

    private final AppUserService appUserService;

    public RegistrationController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @PostMapping
    public AppUser registration(@RequestBody @Valid AppUserDto data){
        String userNameData = data.getUsername();
        AppUser newAppUser = new AppUser(data.getUsername(), data.getFirstName(), data.getLastName(),data.getEmail(), data.getPassword(), false);

        Optional<AppUser>optionalAppUser = appUserService.getUserByUserName(userNameData);
        if(optionalAppUser.isEmpty()) {
        appUserService.saveNewAppUser(newAppUser);
            return newAppUser;
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User with e-mail address " + userNameData + " does already exsist in database");
        }
    }
}
