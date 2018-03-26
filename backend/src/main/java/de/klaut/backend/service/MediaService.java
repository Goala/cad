package de.klaut.backend.service;

import de.klaut.backend.model.Media;
import de.klaut.backend.repository.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MediaService {

    @Autowired
    private MediaRepository mediaRepository;

    public List<Media> findAll() {
        return mediaRepository.findAll();
    }
}
