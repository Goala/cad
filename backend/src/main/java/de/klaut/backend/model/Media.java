package de.klaut.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Media {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String description;

    private Type type;

    @Lob
    @JsonIgnore
    private byte[] file;

    public Media(MediaDto mediaDto) {
        description = mediaDto.getDescription();
        type = Type.valueOf(mediaDto.getType());
    }
}
