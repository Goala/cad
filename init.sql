drop table IF EXISTS media ;

create sequence hibernate_sequence start with 1 increment by 1;

create table media (
       id bigint not null,
        description varchar(255),
        file bytea,
        file_ending varchar(255),
        type integer,
        primary key (id)
    );