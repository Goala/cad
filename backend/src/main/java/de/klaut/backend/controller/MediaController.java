package de.klaut.backend.controller;

import de.klaut.backend.model.Media;
import de.klaut.backend.model.MediaDto;
import de.klaut.backend.service.MediaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("media")
public class MediaController {

    private MediaService mediaService;

    public MediaController(MediaService mediaService) {
        this.mediaService = mediaService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Media>> findAll() {
        return ResponseEntity.ok(mediaService.findAll());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Media> findById(@PathVariable Long id) {
        Optional<Media> mediaOptional = mediaService.findById(id);
        return mediaOptional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Long> saveFile(@RequestBody MediaDto mediaDto) {
        try {
            Media mediaToSave = new Media(mediaDto);
            final Long id = mediaService.save(mediaToSave);
            return ResponseEntity.ok(id);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

}
