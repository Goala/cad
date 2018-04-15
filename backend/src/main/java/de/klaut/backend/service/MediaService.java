package de.klaut.backend.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import de.klaut.backend.model.Media;
import de.klaut.backend.model.MediaDto;
import de.klaut.backend.repository.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Base64;
import java.util.Optional;
import java.util.UUID;

@Service
public class MediaService {

    @Value("${amazon.aws.bucketName}")
    private String bucketName;

    @Autowired
    private AmazonS3 amazonS3;

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

    public Media save(MediaDto mediaDto) {

        byte[] imageByteArray = Base64.getDecoder().decode(mediaDto.getBase64());

        InputStream fis = new ByteArrayInputStream(imageByteArray);
        Long contentLength = Long.valueOf(imageByteArray.length);

        ObjectMetadata metadata = new ObjectMetadata();

        metadata.setContentLength(contentLength);

        String fileName = UUID.randomUUID().toString().concat(".".concat(mediaDto.getFileEnding()));


        amazonS3.putObject(
                new PutObjectRequest(bucketName, fileName, fis, metadata)
                        .withCannedAcl(CannedAccessControlList.PublicRead));

        String fileUrl = String.valueOf(amazonS3.getUrl(
                bucketName, //The S3 Bucket To Upload To
                fileName));
        mediaDto.setFileUrl(fileUrl);
        return mediaRepository.save(new Media(mediaDto));
    }
}
