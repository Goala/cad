package de.klaut.backend.controller;

import de.klaut.backend.model.Media;
import de.klaut.backend.model.MediaDto;
import de.klaut.backend.service.MediaService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("media")
public class MediaController {

    private MediaService mediaService;

    public MediaController(MediaService mediaService) {
        this.mediaService = mediaService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Page<Media>> findAll(Pageable pageable) {
        return ResponseEntity.ok(mediaService.findAll(pageable));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Media> findById(@PathVariable String id) {
        Optional<Media> mediaOptional = mediaService.findById(id);
        return mediaOptional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Media> saveFile(@RequestBody MediaDto mediaDto) {
        try {
            Media savedMedia = mediaService.save(mediaDto);
            return new ResponseEntity<>(savedMedia, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }
}
