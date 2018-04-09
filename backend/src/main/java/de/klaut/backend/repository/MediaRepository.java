package de.klaut.backend.repository;

import de.klaut.backend.model.Media;
import org.socialsignin.spring.data.dynamodb.repository.DynamoDBPagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MediaRepository extends DynamoDBPagingAndSortingRepository<Media, String> {}
