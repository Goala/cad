package de.klaut.backend.service;

import de.klaut.backend.model.Media;
import de.klaut.backend.repository.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MediaService {

    @Autowired
    private MediaRepository mediaRepository;

    public List<Media> findAll() {
        return mediaRepository.findAll();
    }

    public Optional<Media> findById(Long id) {
        return mediaRepository.findById(id);
    }
}
