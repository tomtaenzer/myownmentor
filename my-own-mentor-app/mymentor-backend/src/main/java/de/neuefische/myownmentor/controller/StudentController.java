package de.neuefische.myownmentor.controller;

import de.neuefische.myownmentor.model.Student;
import de.neuefische.myownmentor.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/students")
public class StudentController {

    private final StudentService StudService;

    @Autowired
    public StudentController(StudentService StudService){
        this.StudService = StudService;
    }

    @GetMapping
    public List<Student>getAllStudents(){
        return StudService.getStudents();
    }



}
