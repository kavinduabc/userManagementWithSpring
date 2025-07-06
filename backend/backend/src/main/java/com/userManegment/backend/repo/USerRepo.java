package com.userManegment.backend.repo;

import com.userManegment.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

//get the all features in jpa repository
public interface USerRepo extends JpaRepository<User,Integer> {


}
