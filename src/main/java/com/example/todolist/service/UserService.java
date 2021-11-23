package com.example.todolist.service;

import com.example.todolist.entity.UserEntity;
import com.example.todolist.exceptions.UserAlreadyExistException;
import com.example.todolist.exceptions.UserNotFoundException;
import com.example.todolist.model.User;
import com.example.todolist.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    BCryptPasswordEncoder passwordEncoder;
    @PersistenceContext
    EntityManager entityManager;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        var user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return (UserDetails) user;
    }

    public User findUserById(Long userId) {
        Optional<UserEntity> userFromDb = userRepository.findById(userId);
        return User.toModel(userFromDb.orElse(new UserEntity()));
    }

    public List<User> allUsers() {
        var users = userRepository.findAll();
        var list = new ArrayList<User>();
        for(var user: users){
            list.add(User.toModel(user));
        }
        return list;
    }

    public UserEntity saveUser(UserEntity user) throws UserAlreadyExistException {
        var name = user.getUsername();
        if (userRepository.findByUsername(name) != null) {
            throw new UserAlreadyExistException("Пользователь с таким именем сущесвтвует");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public Boolean deleteUser(Long userId) {
        if (userRepository.findById(userId).isPresent()) {
            userRepository.deleteById(userId);
            return true;
        }
        return false;
    }
}
