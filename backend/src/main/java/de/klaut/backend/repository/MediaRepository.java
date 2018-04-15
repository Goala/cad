package de.klaut.backend.repository;

import de.klaut.backend.model.Media;
import org.socialsignin.spring.data.dynamodb.repository.DynamoDBPagingAndSortingRepository;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.socialsignin.spring.data.dynamodb.repository.EnableScanCount;

@EnableScan
@EnableScanCount
public interface MediaRepository extends DynamoDBPagingAndSortingRepository<Media, String> {
}
