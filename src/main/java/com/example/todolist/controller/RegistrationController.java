package com.example.todolist.controller;

import com.example.todolist.entity.UserEntity;
import com.example.todolist.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RegistrationController {

    @Autowired
    private UserService userService;

    @GetMapping("/registration")
    public ResponseEntity registration() {
        try {
            UserEntity user = new UserEntity();
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Ошибка");
        }
    }

    @PostMapping("/registration")
    public ResponseEntity addUser(@RequestParam UserEntity user) {
        if (userService.saveUser(user)) {
            return ResponseEntity.ok("Пользователь добавлен");
        }
        return ResponseEntity.badRequest().body("Ошибка");

    }

}
