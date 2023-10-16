package com.brocode.rishi.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Table(name = "flavour")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Flavour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID;
    private String name;
    private Integer stock;
    private double price;
    @Lob
    private String description;
    private List<String> images;
    @ManyToOne
    private User customer;
    
    public Integer getCustomerUserID() {
        if (customer != null) {
            return customer.getId();
        }
        return null; // Return null or handle as needed if the organizer is not set
    }
}