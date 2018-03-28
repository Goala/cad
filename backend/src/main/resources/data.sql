INSERT INTO media (description, file, type, id, file_ending) VALUES ('Test Image',
                                                        FILE_READ('src/main/resources/data/test1.jpg'), 2, 0, 'jpg');
INSERT INTO media (description, file, type, id, file_ending) VALUES ('Test Video',
                                                        FILE_READ('src/main/resources/data/test1.mp4'), 1, 1,'mp4');
INSERT INTO media (description, file, type, id, file_ending) VALUES ('Test Audio',
                                                        FILE_READ('src/main/resources/data/test1.mp3'), 0, 2, 'mp3');