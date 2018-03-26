package de.klaut.backend;

import de.klaut.backend.repository.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

    @Autowired
    MediaRepository mediaRepository;

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }
}
