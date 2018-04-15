package de.klaut.backend.service;

import de.klaut.backend.model.Media;
import de.klaut.backend.repository.MediaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MediaService {

    private MediaRepository mediaRepository;

    public MediaService(MediaRepository mediaRepository) {

        this.mediaRepository = mediaRepository;
    }

    public Page<Media> findAll(Pageable pageable) {
        return mediaRepository.findAll(pageable);
    }

    public Optional<Media> findById(String id) {
        return mediaRepository.findById(id);
    }

    public Media save(Media media) {
        return mediaRepository.save(media);
    }
}
