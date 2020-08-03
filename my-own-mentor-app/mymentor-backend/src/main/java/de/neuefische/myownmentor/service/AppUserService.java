package de.neuefische.myownmentor.service;

import de.neuefische.myownmentor.db.AppUserDb;
import de.neuefische.myownmentor.model.AppUser;
import de.neuefische.myownmentor.model.dto.AppUserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AppUserService {

    private final AppUserDb appUserDb;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AppUserService(AppUserDb appUserDb) {
        this.appUserDb = appUserDb;

    }

    public void saveNewAppUser(AppUser newUserData){
        newUserData.setUsername(newUserData.getUsername());
        newUserData.setEMail(newUserData.getEMail());
        newUserData.setFirstName(newUserData.getFirstName());
        newUserData.setLastName(newUserData.getLastName());
        newUserData.setPassword(passwordEncoder.encode(newUserData.getPassword()));
        appUserDb.save(newUserData);
    }

    public Optional<AppUser>getUserByUserName(String userName){
        return appUserDb.findUserByName(userName);
    }
}