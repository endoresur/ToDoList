create table hibernate_sequence (
    next_val bigint
) engine=MyISAM;

insert into hibernate_sequence values ( 1 );
insert into hibernate_sequence values ( 1 );

create table user (
    id bigint not null auto_increment,
    password varchar(64) not null,
    username varchar(64) not null unique,
    primary key (id)
) engine=MyISAM;

create table todo (
    id bigint not null auto_increment,
    title varchar(64) not null,
    completed boolean not null,
    primary key (id)
) engine=MyISAM;