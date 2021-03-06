package de.neuefische.myownmentor.security;

import de.neuefische.myownmentor.db.AppUserDb;
import de.neuefische.myownmentor.model.AppUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MongoDbUserDetailsService implements UserDetailsService {

    private final AppUserDb userDb;

    @Autowired
    public MongoDbUserDetailsService(AppUserDb userDb) {
        this.userDb = userDb;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<AppUser> optionalUser = userDb.findById(username);
        if (optionalUser.isEmpty()) {
            throw new UsernameNotFoundException("user with username: \"" + username + "\" not found");
        }

        AppUser mentorUser = optionalUser.get();

        return new User(mentorUser.getUsername(), mentorUser.getPassword(), List.of(new SimpleGrantedAuthority(mentorUser.isMentor()?"mentor":"student")));
    }
}
