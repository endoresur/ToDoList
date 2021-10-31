package com.example.todolist.controller;

import com.example.todolist.entity.TodoEntity;
import com.example.todolist.exceptions.TodoNotFoundException;
import com.example.todolist.model.Todo;
import com.example.todolist.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping
    public ResponseEntity<List<Todo>> getTodos(){
        try {
            return ResponseEntity.ok(todoService.getTodos());
        } catch (Exception e){
            return null;
        }
    }

    @PostMapping
    public ResponseEntity createTodo(@RequestBody TodoEntity todo, @RequestParam Long userId) {
        try {
            return ResponseEntity.ok(todoService.createTodo(todo, userId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Произошла ошибка");
        }
    }

    @PutMapping("/change_title")
    public ResponseEntity changeTitle(@RequestParam Long todoId, @RequestParam String newTitle) {
        try {
            return ResponseEntity.ok(todoService.changeTitle(todoId, newTitle));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Произошла ошибка");
        }
    }

    @PutMapping("/change_description")
    public ResponseEntity changeDescription(@RequestParam Long todoId, @RequestParam String newDescription) {
        try {
            return ResponseEntity.ok(todoService.changeDescription(todoId, newDescription));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Произошла ошибка");
        }
    }

    @PutMapping
    public ResponseEntity completeTodo(@RequestParam Long id){
        try {
            return ResponseEntity.ok(todoService.completeTodo(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Произошла ошибка");
        }
    }

}
