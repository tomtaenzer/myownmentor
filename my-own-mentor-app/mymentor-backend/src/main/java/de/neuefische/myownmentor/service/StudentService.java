package de.neuefische.myownmentor.service;

import de.neuefische.myownmentor.db.StudentsDb;
import de.neuefische.myownmentor.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {

    private final StudentsDb studentsDb;

    @Autowired
    public StudentService(StudentsDb studentsDb){
        this.studentsDb = studentsDb;
    }

    public void addStudent(Student stundentToAdd){

        studentsDb.addStudent(stundentToAdd);
    }


    public List<Student> getStudents() {
        return studentsDb.getStudents();
    }

    public List<Student> findStudentsByUniverstiy(String university) {
        List<Student> result = new ArrayList<>();
        List<Student> students = studentsDb.getStudents();
        for (Student student : students) {
            if (student.getUniversity().equals(university)) {
                result.add(student);
            }
        }

        return result;
    }
}
