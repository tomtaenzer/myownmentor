package de.neuefische.myownmentor.db;

import de.neuefische.myownmentor.model.Student;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class StudentsDb {

    private final List<Student> students = new ArrayList<>(
            List.of(new Student (01, "Tom", "Tänzer", "Cologne"),
            new Student( 02, "Nina", "Nonnenmacher", "Bielefeld")));

    public List <Student> getStudents(){
        return students;
    }

    public void addStudent(Student student){
        this.students.add(student);
    }

    public void clearDB(){
        students.clear();
    }
}


