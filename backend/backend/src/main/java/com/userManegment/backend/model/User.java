package com.userManegment.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity  //provide by javax today work with jakarta
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {

    @Id
    private int id;
    private  String name;
}
