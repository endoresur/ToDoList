package com.example.todolist.exceptions;

public class TodoNotFoundException extends Exception{
    public TodoNotFoundException(String message) {
        super(message);
    }
}
