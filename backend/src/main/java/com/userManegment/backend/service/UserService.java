package com.userManegment.backend.service;

import com.userManegment.backend.repo.USerRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserService {
    //abstract to business logic
    @Autowired
    private USerRepo userRepo;
    //get data for controller through dto


}
