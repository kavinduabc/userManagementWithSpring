package com.userManegment.backend.controller;

import com.userManegment.backend.dto.UserDto;
import com.userManegment.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// user for create rest controller
@RestController
@CrossOrigin
@RequestMapping(value = "api/v1/" )
public class UserController {

    //import the required dependency
    @Autowired
    private UserService userService;

    @GetMapping("/getusers")
    public List<UserDto> getUsers(){
        return userService.getAllUsers();
    }

    @PostMapping("/adduser")
    public UserDto addUser(@RequestBody UserDto userDto){
      return userService.saveUser(userDto);
    }
    @PutMapping("/updateuser")
    public UserDto updateUser(@RequestBody UserDto userDto){
        return userService.upadateUser(userDto);
    }
    @DeleteMapping("/deleteuser")
    public String deleteUser(@RequestBody UserDto userDto){
        return userService.deleteUser(userDto);
    }

}
