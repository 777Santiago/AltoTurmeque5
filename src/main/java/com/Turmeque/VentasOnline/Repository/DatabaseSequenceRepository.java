package com.Turmeque.VentasOnline.Repository;

import com.Turmeque.VentasOnline.Entity.DatabaseSequence;
import com.Turmeque.VentasOnline.RepositoryCrud.IDatabaseSequenceRepositoryCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class DatabaseSequenceRepository {

    @Autowired
    private IDatabaseSequenceRepositoryCrud sequenceRepo;

    public int generatorId(String sequenceName) {

        DatabaseSequence sequence = new DatabaseSequence();
        sequence = sequenceRepo.findBySequenceName(sequenceName);
        int idSequence = sequence.getSequence();
        idSequence += 1;
        sequence.setSequence(idSequence);
        sequenceRepo.save(sequence);
        return idSequence;
    }
}