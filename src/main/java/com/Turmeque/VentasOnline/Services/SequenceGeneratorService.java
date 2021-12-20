package com.Turmeque.VentasOnline.Services;

import com.Turmeque.VentasOnline.Repository.DatabaseSequenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SequenceGeneratorService {
    @Autowired
    private DatabaseSequenceRepository sequence;

    public int generateSequence(String seqName) {
        return sequence.generatorId(seqName);
    }
}