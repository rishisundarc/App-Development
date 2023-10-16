package com.brocode.rishi.respository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brocode.rishi.model.User;

public interface UserRepository extends JpaRepository<User,Integer>{
Optional<User> findByUsername(String email);
}
