package com.Turmeque.VentasOnline.Repository;

import com.Turmeque.VentasOnline.Entity.User;
import com.Turmeque.VentasOnline.RepositoryCrud.IUserRepositoryCrud;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {
    @Autowired
    private IUserRepositoryCrud userRepo;
    
    public List<User> getUsers(){
        return userRepo.findAll();
    }
    
    public User findByEmail(String email){
        return userRepo.findByEmail(email);
    }
    
    public User saveUser(User user){
        return userRepo.save(user);
    }
    
    public Optional<User> findById(Integer id){
        return userRepo.findById(id);
    }

    public User findUserAuthenticate(String email, String password) {
        return userRepo.findUserAuthenticate(email, password);
    }

    public void deleteById(Integer id) {
        userRepo.deleteById(id);
    }    
    
    public List<User> findByMonthBirthtDay(String monthBirthtDay){
        return userRepo.findByMonthBirthtDay(monthBirthtDay);
    }
}