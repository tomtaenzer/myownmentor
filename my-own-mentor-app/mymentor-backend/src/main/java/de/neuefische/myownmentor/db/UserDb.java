package de.neuefische.myownmentor.db;

import de.neuefische.myownmentor.model.AppUser;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserDb extends PagingAndSortingRepository<AppUser,String> {
}
