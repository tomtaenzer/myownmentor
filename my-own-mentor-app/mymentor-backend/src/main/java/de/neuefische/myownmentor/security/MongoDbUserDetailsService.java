package de.neuefische.myownmentor.security;

import de.neuefische.myownmentor.db.UserDb;
import de.neuefische.myownmentor.model.MentorUser;
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

    private final UserDb userDb;

    @Autowired
    public MongoDbUserDetailsService(UserDb userDb) {
        this.userDb = userDb;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<MentorUser> optionalUser = userDb.findById(username);
        if (optionalUser.isEmpty()) {
            throw new UsernameNotFoundException("user with username: \"" + username + "\" not found");
        }

        MentorUser mentorUser = optionalUser.get();

        return new User(mentorUser.getUsername(), mentorUser.getPassword(), List.of(new SimpleGrantedAuthority("admin")));
    }
}
