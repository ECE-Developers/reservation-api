import { HttpException, HttpStatus } from '@nestjs/common';
import { diskStorage, memoryStorage } from 'multer';
import { existsSync, mkdirSync } from 'fs';
import { extname } from 'path';

export const multerOptions = {
  fileFilter: (request, file, callback) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
      callback(null, true);
    } else {
      callback(
        new HttpException(
          { message: 1, error: '지원하지 않는 이미지 형식입니다.' },
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
  },

  storage: diskStorage({
    destination: (request, file, callback) => {
      const uploadPath = 'uploads';
      if (!existsSync(uploadPath)) {
        mkdirSync(uploadPath);
      }
      callback(null, uploadPath);
    },
    filename: (request, file, callback) => {
      callback(null, `${Date.now()}${extname(file.originalname)}`);
    },
  }),

  limits: {
    fieldNameSize: 200,
    filedSize: 1024 * 1024,
    fields: 2,
    fileSize: 16777216,
    files: 10,
  },
};

export const multerDiskDestinationOutOptions = {
  fileFilter: (request, file, callback) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
      callback(null, true);
    } else {
      callback(
        new HttpException(
          {
            message: 1,
            error: '지원하지 않는 이미지 형식입니다.',
          },
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
  },

  storage: diskStorage({
    filename: (request, file, callback) => {
      callback(null, `${Date.now()}${extname(file.originalname)}`);
    },
  }),

  limits: {
    fieldNameSize: 200,
    filedSize: 1024 * 1024,
    fields: 2,
    fileSize: 16777216,
    files: 10,
  },
};

export const multerMemoryOptions = {
  fileFilter: (request, file, callback) => {
    console.log('multerMemoryOptions: fileFilter');
    if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
      callback(null, true);
    } else {
      callback(
        new HttpException(
          {
            message: 1,
            error: '지원하지 않는 이미지 형식입니다.',
          },
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
  },

  storage: memoryStorage(),
  limits: {
    fieldNameSize: 200,
    filedSize: 1024 * 1024,
    fields: 2,
    fileSize: 16777216,
    files: 10,
  },
};

export const createImageURL = (file): string => {
  const serverAddress = 'localhost:3000';

  return `${serverAddress}/public/${file.filename}`;
};
