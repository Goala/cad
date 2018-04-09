package de.klaut.backend.controller;

import de.klaut.backend.model.Media;
import de.klaut.backend.model.MediaDto;
import de.klaut.backend.service.MediaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
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
    public ResponseEntity<Iterable<Media>> findAll(@PathParam("from") int fromIndex, @PathParam("to") int toIndex) {
        return ResponseEntity.ok(mediaService.findAll(fromIndex, toIndex));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Media> findById(@PathVariable String id) {
        Optional<Media> mediaOptional = mediaService.findById(id);
        return mediaOptional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<String> saveFile(@RequestBody MediaDto mediaDto) {
        try {
            Media mediaToSave = new Media(mediaDto);
            final String id = mediaService.save(mediaToSave);
            return ResponseEntity.ok(id);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
