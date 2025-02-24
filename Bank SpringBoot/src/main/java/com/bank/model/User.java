package com.bank.model;

import com.bank.exception.UserNotFoundException;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.function.Supplier;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class User{
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long idU;
  private String name;

  private String email;
  private String password;
  private String phone;
  private String profession;

  @OneToMany(mappedBy = "user" ,cascade = CascadeType.ALL)
  @JsonIgnore
  private List<Account> accounts;

  public User(Long idU, String name, String profession, String email, String password, String phone) {
    this.idU = idU;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.profession = profession;

  }

}
