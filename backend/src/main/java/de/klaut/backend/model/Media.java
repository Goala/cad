package de.klaut.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Base64;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Media {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String description;

    private Type type;

    private String fileEnding;

    @Lob
    @JsonIgnore
    private byte[] file;

    @Transient
    private String fileBase64;

    public Media(MediaDto mediaDto) {
        description = mediaDto.getDescription();
        type = Type.valueOf(mediaDto.getType());
        fileEnding = mediaDto.getFileEnding();
        String base64 = mediaDto.getBase64();
        if (base64 != null && !base64.isEmpty()) {
            file = base64.getBytes();
        }
    }

    public String getFileBase64() {
        if (file != null) {
            return Base64.getEncoder().encodeToString(file);
        }
        return "";
    }

    public long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public Type getType() {
        return type;
    }

    public byte[] getFile() {
        return file;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public void setFile(byte[] file) {
        this.file = file;
    }

    public String getFileEnding() {
        return fileEnding;
    }

    public void setFileEnding(String fileEnding) {
        this.fileEnding = fileEnding;
    }
}
