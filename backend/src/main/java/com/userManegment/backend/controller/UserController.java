package com.userManegment.backend.controller;

import org.springframework.web.bind.annotation.*;

// user for create rest controller
@RestController
@CrossOrigin
@RequestMapping(value = "api/v1/" )
public class UserController {

    @GetMapping("/getUser")
    public String getUser(){
        return "Call users";
    }

    @PostMapping("/addUser")
    public String addUser(){

        return "add user";
    }

}
