package de.klaut.backend.service;

import de.klaut.backend.model.Media;
import de.klaut.backend.repository.MediaRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MediaService {

    private MediaRepository mediaRepository;

    public MediaService(MediaRepository mediaRepository){

        this.mediaRepository = mediaRepository;
    }

    public Iterable<Media> findAll(int fromIndex, int toIndex) {
        return mediaRepository.findAll();
    }

    public Optional<Media> findById(String id) {
        return mediaRepository.findById(id);
    }

    public String save(Media media) {
        return mediaRepository.save(media).getId();
    }
}
