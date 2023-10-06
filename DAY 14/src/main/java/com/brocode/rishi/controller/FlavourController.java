package com.brocode.rishi.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.brocode.rishi.dto.FlavourRequestDTO;
import com.brocode.rishi.dto.FlavourResponseDTO;
import com.brocode.rishi.dto.UserDTO;
import com.brocode.rishi.model.Flavour;
import com.brocode.rishi.model.User;
import com.brocode.rishi.respository.FlavourRepository;
import com.brocode.rishi.respository.UserRepository;
import com.brocode.rishi.service.FlavourService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/events")
public class FlavourController {

    @Autowired
    private FlavourService flavourService;
   @Autowired
    private UserRepository userRepository;

    @PostMapping("/post")
    public ResponseEntity<FlavourResponseDTO> createEvent(@RequestBody FlavourRequestDTO flavourRequestDTO) {
		User organizer = userRepository.findById(flavourRequestDTO.getCustomer().getId()).orElse(null);
        Flavour event = new Flavour();
        event.setName(flavourRequestDTO.getName());
        event.setPrice(flavourRequestDTO.getPrice());
        event.setCustomer(organizer);
        // Set other relevant fields

        // Call the service layer to create the event
        Flavour createdEvent = flavourService.createFlavour(event);

        // Map the created event entity to the response DTO within the controller method
        FlavourResponseDTO responseDTO = new FlavourResponseDTO();
        responseDTO.setID(createdEvent.getID());
        responseDTO.setName(createdEvent.getName());
        responseDTO.setPrice(createdEvent.getPrice());
        responseDTO.setDescription(createdEvent.getDescription());
        responseDTO.setCustomer(mapUserToUserDTO(createdEvent.getCustomer()));
        // Set other relevant fields

        return ResponseEntity.ok(responseDTO);
    }

    @GetMapping("/get/{eventID}")
    public ResponseEntity<FlavourResponseDTO> getEvent(@PathVariable Integer eventID) {
        // Call the service layer to retrieve the event by ID
        Flavour event = flavourService.getFlavourById(eventID);

        // Map the event entity to the response DTO within the controller method
        FlavourResponseDTO responseDTO = new FlavourResponseDTO();
        responseDTO.setID(event.getID());
        responseDTO.setName(event.getName());
        responseDTO.setPrice(event.getPrice());
        responseDTO.setDescription(event.getDescription());
        responseDTO.setCustomer(mapUserToUserDTO(event.getCustomer()));
        // Set other relevant fields

        return ResponseEntity.ok(responseDTO);
    }

    @GetMapping("/get")
    public ResponseEntity<List<FlavourResponseDTO>> getAllEvents() {
        // Call the service layer to retrieve all events
        List<Flavour> events = flavourService.getAllFlavours();

        // Map the list of event entities to a list of response DTOs within the controller method
        List<FlavourResponseDTO> responseDTOs = events.stream()
                .map(event -> {
                    FlavourResponseDTO responseDTO = new FlavourResponseDTO();
                    responseDTO.setID(event.getID());
                    responseDTO.setName(event.getName());
                    responseDTO.setPrice(event.getPrice());
                    responseDTO.setDescription(event.getDescription());
                    responseDTO.setCustomer(mapUserToUserDTO(event.getCustomer()));
                    // Set other relevant fields
                    return responseDTO;
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok(responseDTOs);
    }

    @PutMapping("/put/{eventID}")
    public ResponseEntity<FlavourResponseDTO> updateEvent(@PathVariable Integer eventID, @RequestBody FlavourRequestDTO eventRequestDTO) {
        // Call the service layer to update the event by ID
        Flavour existingEvent = flavourService.getFlavourById(eventID);

        // Update the existing event entity with the data from the DTO
        existingEvent.setName(eventRequestDTO.getName());
        existingEvent.setPrice(eventRequestDTO.getPrice());
        // Update other relevant fields

        // Call the service layer to save the updated event
        Flavour updatedEvent = flavourService.updateFlavour(existingEvent);

        // Map the updated event entity to the response DTO within the controller method
        FlavourResponseDTO responseDTO = new FlavourResponseDTO();
        responseDTO.setID(updatedEvent.getID());
        responseDTO.setName(updatedEvent.getName());
        responseDTO.setPrice(updatedEvent.getPrice());
        responseDTO.setDescription(updatedEvent.getDescription());
        responseDTO.setCustomer(mapUserToUserDTO(updatedEvent.getCustomer()));
        // Set other relevant fields

        return ResponseEntity.ok(responseDTO);
    }

    @DeleteMapping("/del/{eventID}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Integer eventID) {
        // Call the service layer to delete the event by ID
        flavourService.deleteFlavour(eventID);

        return ResponseEntity.noContent().build();
    }

    private UserDTO mapUserToUserDTO(User user) {
        if (user == null) {
            return null; // Handle this case as needed
        }

        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setfirstname(user.getFirstname());
        userDTO.setType(user.getRole());
        // Map other user properties as needed
        return userDTO;
    }

}
