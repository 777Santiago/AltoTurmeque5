package com.Turmeque.VentasOnline.RepositoryCrud;

import com.Turmeque.VentasOnline.Entity.DatabaseSequence;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface IDatabaseSequenceRepositoryCrud extends MongoRepository<DatabaseSequence,String>{
    
    @Query("{_id: ?0}")
    public DatabaseSequence findBySequenceName(String sequenceName);
}