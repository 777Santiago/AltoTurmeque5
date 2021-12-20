package com.Turmeque.VentasOnline.RepositoryCrud;

import com.Turmeque.VentasOnline.Entity.Clothe;
import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface IClotheRepositoryCrud extends MongoRepository<Clothe,Integer>{

    @Query("{reference: ?0}")
    public Optional<Clothe> findByReference(String reference);
    
    Long deleteClotheByReference(String reference);
    
    @Query("{description: /?0/}")
    public List<Clothe> findByDescription(String description);
    
    public List<Clothe> findByPrice(double price);
}