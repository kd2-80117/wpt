DROP DATABASE IF EXISTS kdac;

create database kdac;
use kdac;

DROP TABLE IF EXISTS Emp;

create table Emp(No int primary key,
				 Name varchar(50),
				 Address varchar(50)
                );
                
insert into Emp values(1, 'Mahesh', 'Nagar');
insert into Emp values(2, 'Nilesh', 'Panji');
insert into Emp values(3, 'Rohan', 'Nagpur');
insert into Emp values(4, 'Sameer', 'Mumbai');
insert into Emp values(5, 'Amit', 'Pune');

select * from Emp;


