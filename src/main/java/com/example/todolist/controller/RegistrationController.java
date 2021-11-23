package com.example.todolist.controller;

import com.example.todolist.entity.UserEntity;
import com.example.todolist.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/registration")
public class RegistrationController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity registration() {
        try {
            UserEntity user = new UserEntity();
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Ошибка");
        }
    }

    @PostMapping
    public ResponseEntity addUser(@RequestBody UserEntity user) {
        try {
            return ResponseEntity.ok(userService.saveUser(user));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Ошибка");
        }
    }

}
