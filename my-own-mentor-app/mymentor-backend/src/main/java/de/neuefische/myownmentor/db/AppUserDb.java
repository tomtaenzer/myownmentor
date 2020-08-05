package de.neuefische.myownmentor.db;

import de.neuefische.myownmentor.model.AppUser;
import org.springframework.data.repository.PagingAndSortingRepository;



public interface AppUserDb extends PagingAndSortingRepository<AppUser,String> {

}
