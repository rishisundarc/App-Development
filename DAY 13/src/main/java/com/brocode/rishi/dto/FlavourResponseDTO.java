package com.brocode.rishi.dto;

import java.util.List;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FlavourResponseDTO {
    private Integer ID;
    private String name;
    private Integer stock;
    private double price;
    private String description;
    private List<String> images; // List of image URLs
    private UserDTO customer; // Modify this line to use UserDTO

}