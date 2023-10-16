package com.brocode.rishi.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brocode.rishi.model.User;
public interface CustomerRepository extends JpaRepository<User, Integer> {

}
