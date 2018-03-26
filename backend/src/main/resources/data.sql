INSERT INTO media (description, file, type, id) VALUES ('Test Image',
                                                        FILE_READ('classpath:data/test1.jpg'), 2, 0);
INSERT INTO media (description, file, type, id) VALUES ('Test Video',
                                                        FILE_READ('classpath:data/test1.mp4'), 1, 1);
INSERT INTO media (description, file, type, id) VALUES ('Test Audio',
                                                        FILE_READ('classpath:data/test1.mp3'), 0, 2);