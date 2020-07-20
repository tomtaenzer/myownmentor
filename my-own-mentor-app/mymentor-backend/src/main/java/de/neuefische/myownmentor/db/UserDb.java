package de.neuefische.myownmentor.db;

import de.neuefische.myownmentor.model.MentorUser;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserDb extends PagingAndSortingRepository<MentorUser,String> {
}
