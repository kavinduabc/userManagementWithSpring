package com.userManegment.backend.service;

import com.userManegment.backend.dto.UserDto;
import com.userManegment.backend.model.User;
import com.userManegment.backend.repo.USerRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class UserService {

    @Autowired
    private USerRepo userRepo;

    @Autowired
    private ModelMapper modelMapper;

    public List<UserDto> getAllUsers() {
        List<User> userList = userRepo.findAll();
        return modelMapper.map(userList, new TypeToken<List<UserDto>>() {}.getType());
    }

   public UserDto saveUser(UserDto userDto){
        userRepo.save(modelMapper.map(userDto, User.class));
        return userDto;
   }
   public UserDto upadateUser(UserDto userDto){
        userRepo.save(modelMapper.map(userDto, User.class));
        return userDto;
   }
   public String deleteUser(UserDto userDto){
        userRepo.delete(modelMapper.map(userDto, User.class));
        return "user deleted";
   }
}
