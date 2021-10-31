package com.example.todolist.service;

import com.example.todolist.entity.TodoEntity;
import com.example.todolist.entity.UserEntity;
import com.example.todolist.model.Todo;
import com.example.todolist.repository.TodoRepository;
import com.example.todolist.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Todo> getTodos() {
        var todos = todoRepository.findAll();
        var list = new ArrayList<Todo>();
        for(var todo: todos){
            list.add(Todo.toModel(todo));
        }
        return list;
    }

    public Todo createTodo(TodoEntity todo, Long userId) {
        var user = userRepository.findById(userId).get();
        todo.setUser(user);
        return Todo.toModel(todoRepository.save(todo));
    }

    public Todo changeTitle(Long todoId, String newTitle) {
        var todo = todoRepository.findById(todoId).get();
        if (newTitle != null && !newTitle.isEmpty()) {
            todo.setTitle(newTitle);
        }
        return Todo.toModel(todoRepository.save(todo));
    }

    public Todo changeDescription(Long todoId, String newDescription){
        var todo = todoRepository.findById(todoId).get();
        if (newDescription != null && !newDescription.isEmpty()) {
            todo.setDescription(newDescription);
        }
        return Todo.toModel(todoRepository.save(todo));
    }

    public Todo completeTodo(Long userId) {
        var todo = todoRepository.findById(userId).get();
        todo.setCompleted(!todo.getCompleted());
        return Todo.toModel(todoRepository.save(todo));
    }

}
