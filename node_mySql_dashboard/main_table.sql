CREATE TABLE main_trg_dashboard(
	ID int not NULL primary key,
	admin varChar(255) not NULL,
	project varChar(255) not Null,
	vacancy varChar(255) not Null, /*this should've been unique*/
	hiring_status_count int,
	total_trained int,
	total_started_pract int,
	total_start_qual int,
	total_finished_qual int,
	total_qualified int,
	total_missed_qual int
);
