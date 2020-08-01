package de.neuefische.myownmentor.db;

import de.neuefische.myownmentor.model.Mentor;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface MentorDb extends PagingAndSortingRepository<Mentor, String> {
}
