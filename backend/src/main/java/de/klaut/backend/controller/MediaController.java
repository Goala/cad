package de.klaut.backend.controller;

import de.klaut.backend.model.Media;
import de.klaut.backend.service.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/media")
public class MediaController {

    @Autowired
    private MediaService mediaService;

    @GetMapping
    public ResponseEntity<List<Media>> findAll() {
        return ResponseEntity.ok(mediaService.findAll());
    }

}
