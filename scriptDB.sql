create database linafa_managerDB;
drop database linafa_managerDB;
use linafa_managerDB;
create table region(
id int auto_increment not null,
name nvarchar(50) not null,
constraint region_pk primary key(id)
);
 create table programa(
 id int not null auto_increment,
 name_programa varchar(50),
 number_phone varchar(11),
 address varchar(100),
 status boolean,
 constraint programa_fk primary key(id)
 );
 
 create table temporada(
 id int not null auto_increment,
id_programa int,
 token_subscripcion varchar(64),
fecha_inicio datetime,
fecha_fin datetime,
status boolean,
constraint temporada_pk primary key (id),
constraint temporada_programa_fk foreign key(id_programa) references programa(id)
 );
create table user_programa(
id int not null auto_increment,
user_name nvarchar(100) collate utf8_unicode_ci,
pass_login BLOB,
id_region int,
phone_number varchar(11),
id_programa int not null,
constraint user_programa_pk primary key(id,phone_number),
unique key user_programa_user(user_name),
constraint user_programa_region foreign key (id_region) references region(id),
constraint user_programa_programa_fk foreign key(id_programa) references programa(id) 
)ENGINE=InnoDB DEFAULT character set=utf8;

/*select * from login;
insert into login (user_name,pass_login) 
values ('admin', aes_encrypt('pass','patata'));*/
/*nuestra llave es  oFdcbiPqHw22kUl799aL el de pruebas es patata*/
create table division(
id int auto_increment not null,
name nvarchar(15),
id_region int,
constraint division_pk primary key(id),
constraint division_region_fk foreign key(id_region) references region(id)
);

create table jornada(
id int auto_increment not null,
id_division int not null,
id_temporada int not null,
jornada_date date not null,
jornada_time time not null,
place nvarchar(100),
constraint jornada_pk primary key(id),
constraint jornada_division_fk foreign key(id_division) references division(id),
constraint jornada_temprada_fk foreign key(id_temporada) references temporada(id)
);

/*create table first_division(
id int auto_increment not null,
jornada_date date not null,
jornada_time time not null,
place nvarchar(100),
local_team nvarchar(100),
local_goals int,
visitant_team nvarchar(100),
visitant_goals int,
constraint first_division_pk primary key(id)
);*/

create table equipos_por_jornada(
id_jornada int not null,
local_team int,
local_goals int not null,
visitant_team int,
visitant_goals int not null,
status_played boolean,
need_revision boolean,
published boolean,
constraint equipos_por_jornada_pk primary key(id_jornada,local_team,visitant_team),
constraint equipos_por_jornada_jornada_fk foreign key (id_jornada) references jornada(id),
constraint equipo_por_jornada_team_local_fk foreign key (local_team) references team(id),
constraint equipo_por_jornada_team_visitant_fk foreign key (visitant_team) references team(id)
);

create table team(
id int not null auto_increment,
name_team varchar(50),
id_division int,
id_region int,
id_group int, 
pj int,
pg int,
pe int,
pp int,
gf int,
gc int,
dif int,
pts int,
rend float,
constraint equipo_pk primary key (id),
constraint team_group_fk foreign key (id_group) references grupo(id)
);

create table grupo(
id int not null auto_increment,
name_group varchar(50) not null,
cantidad_equipos int not null,
id_division int,
constraint grupo_pk primary key (id),
constraint grupo_fk foreign key (id_division) references division(id)
);
  grant all privileges on *.* TO 'linafa_manager'@'%' identified by 'manager_Proyect.1' with grant option;
  flush privileges