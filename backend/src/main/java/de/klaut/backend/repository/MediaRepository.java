package de.klaut.backend.repository;

import de.klaut.backend.model.Media;
import org.socialsignin.spring.data.dynamodb.repository.DynamoDBCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MediaRepository extends DynamoDBCrudRepository<Media, String> {


}
