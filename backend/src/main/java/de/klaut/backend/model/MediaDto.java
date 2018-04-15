package de.klaut.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MediaDto {

    private String description;
    private String type;
    private String fileEnding;
    private String base64;
    private String fileUrl;

}
