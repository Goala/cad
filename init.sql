drop table IF EXISTS media ;

create sequence hibernate_sequence start with 1 increment by 1;

  create table media (
       id bigint not null,
        description varchar(255),
        file bytea,
        type integer,
        primary key (id)
    );
-- TODO: Try to add the images to the postgres db
INSERT INTO media (description, file, type, id) VALUES ('Test Image',
                                                        null, 2, 0);
INSERT INTO media (description, file, type, id) VALUES ('Test Video',
                                                        null, 1, 1);
INSERT INTO media (description, file, type, id) VALUES ('Test Audio',
                                                        null, 0, 2);
