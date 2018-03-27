drop table IF EXISTS media ;

create sequence hibernate_sequence start with 1 increment by 1;

  create table media (
       id bigint not null,
        description varchar(255),
        file bytea,
        type integer,
        primary key (id)
    );

--INSERT INTO media (description, file, type, id) VALUES ('Test Image',
--                                                        pg_read_file('test1.jpg')::bytea, 2, 0);
--INSERT INTO media (description, file, type, id) VALUES ('Test Video',
--                                                        pg_read_file('./test1.mp4')::bytea, 1, 1);
--INSERT INTO media (description, file, type, id) VALUES ('Test Audio',
--                                                        pg_read_file('./test1.mp3')::bytea, 0, 2);
