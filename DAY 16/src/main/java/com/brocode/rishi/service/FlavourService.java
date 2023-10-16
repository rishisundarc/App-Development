package com.brocode.rishi.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.brocode.rishi.model.Flavour;
import com.brocode.rishi.respository.FlavourRepository;
import java.util.List;
import java.util.Optional;
@Service
public class FlavourService {
    @Autowired
    private FlavourRepository flavourRepository;
    public Flavour createFlavour(Flavour flavour) {
        // Implement logic to create and save an Flavour
        return flavourRepository.save(flavour);
    }
    public Flavour getFlavourById(Integer FlavourId) {
        // Implement logic to retrieve an Flavour by ID
        Optional<Flavour> FlavourOptional = flavourRepository.findById(FlavourId);
        return FlavourOptional.orElse(null);
    }
    public List<Flavour> getAllFlavours() {
        // Implement logic to retrieve all Flavours
        return flavourRepository.findAll();
    }
    public Flavour updateFlavour(Flavour Flavour) {
        // Implement logic to update and save an Flavour
        return flavourRepository.save(Flavour);
    }
    public void deleteFlavour(Integer FlavourId) {
        // Implement logic to delete an Flavour by ID
        flavourRepository.deleteById(FlavourId);
    }
}
