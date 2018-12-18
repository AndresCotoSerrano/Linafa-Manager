create database linafa_managerDB;
use linafa_managerDB;
create table region(
id int auto_increment not null,
name nvarchar(50) not null,
constraint region_pk primary key(id)
);

create table login(
id int not null auto_increment,
user_name nvarchar(100),
pass_login BLOB,
constraint login_pk primary key(id)
);

insert into login (user_name,pass_login) 
values ('admin', aes_encrypt('pass','patata'));
/*nuestra llave es  oFdcbiPqHw22kUl799aL el de pruebas es patata*/

create table division(
id int auto_increment not null,
name nvarchar(15),
constraint division_pk primary key(id)
);

create table jornada(
id int auto_increment not null,
id_region int not null,
id_division int not null,
jornada_date date not null,
jornada_time time not null,
place nvarchar(100),
local_team nvarchar(100),
local_goals int,
visitant_team nvarchar(100),
visitant_goals int,
constraint jornada_pk primary key(id),
constraint jornada_region_fk foreign key(id_region) references region(id),
constraint jornada_division_fk foreign key(id_division) references division(id)
);
create table first_division(
id int auto_increment not null,
jornada_date date not null,
jornada_time time not null,
place nvarchar(100),
local_team nvarchar(100),
local_goals int,
visitant_team nvarchar(100),
visitant_goals int,
constraint first_division_pk primary key(id)
);
