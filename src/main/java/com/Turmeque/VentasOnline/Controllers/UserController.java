package com.Turmeque.VentasOnline.Controllers;

import com.Turmeque.VentasOnline.Entity.User;
import com.Turmeque.VentasOnline.Services.UserService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
@CrossOrigin(origins="*")
public class UserController {
    @Autowired
    private UserService service;
    
    @GetMapping("/all")
    public List<User> findAllUsers(){
        return service.getUsers();
    }
    
    @GetMapping("/emailexist/{email}")
    public boolean emailExist(@PathVariable ("email") String email){
        return service.emailExist(email);
    }

    @GetMapping("/{email}/{password}")
    public User userAuthenticate(@PathVariable ("email") String email, @PathVariable ("password") String password){
        return service.userAuthenticate(email, password);
    }
    
    @GetMapping("birthday/{birthday}")
    public List<User> findUsersByMonthBirthday(@PathVariable ("birthday") String birthday){
        return service.findByMonthBirthtDay(birthday);
    }
    
    @GetMapping("/{id}")
    public Optional<User> findById(@PathVariable("id") Integer id)
    {
        return service.findById(id);
    }
    
    @PostMapping("/new")
    public ResponseEntity newUser(@RequestBody User user){
        service.newUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/update")
    public ResponseEntity updateUser(@RequestBody User user){
        service.updateUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@PathVariable ("id") Integer id){
        service.deleteUser(id);
        return ResponseEntity.status(204).build();
    }
}