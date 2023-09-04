CREATE TABLE `timetrackingtool`.`worklogs` (
  `idworklogs` INT NOT NULL,
  `subject` VARCHAR(45) NULL,
  `time` INT NULL,
  `company` VARCHAR(45) NULL,
  `date` DATETIME NULL,
  PRIMARY KEY (`idworklogs`));

CREATE TABLE `timetrackingtool`.`summary` (
  `idsummary` INT NOT NULL,
  `date` DATETIME NULL,
  `worktime` INT NULL,
  `time_done` INT NULL,
  `time_todo` INT NULL,
  PRIMARY KEY (`idsummary`));