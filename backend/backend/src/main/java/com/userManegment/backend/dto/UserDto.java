package com.userManegment.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data //support for data handling
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

    //data transer object
    private int id;
    private String name;
}
