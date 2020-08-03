package de.neuefische.myownmentor.db;

import de.neuefische.myownmentor.model.AppUser;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface AppUserDb extends PagingAndSortingRepository<AppUser,String> {
    public Optional<AppUser>findUserByName(String userName);
}
