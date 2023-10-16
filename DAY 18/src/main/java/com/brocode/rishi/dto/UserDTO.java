package com.brocode.rishi.dto;

import com.brocode.rishi.model.enumerated.Role;

public class UserDTO {
    private Integer Id;
    private String firstname;
    private String lastname;
    public UserDTO() {
    }
    public UserDTO(Integer Id, String firstname, String lastname) {
        this.Id = Id;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    public Integer getId() {
        return Id;
    }
    public void setId(Integer Id) {
        this.Id = Id;
    }

    public String getfirstname() {
        return firstname;
    }

    public void setfirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getlastname() {
        return lastname;
    }

    public void setlastname(String lastname) {
        this.lastname = lastname;
    }
    public void setType(Role role) {
    }

    // Add getters and setters for other relevant fields
}

