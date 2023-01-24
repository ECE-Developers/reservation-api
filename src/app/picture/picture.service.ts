import { Injectable } from '@nestjs/common';
import { createImageURL } from '../../libs/multer.options';

@Injectable()
export class PictureService {
  uploadFiles(files: File[]): string[] {
    const generatedFiles: string[] = [];

    for (const file of files) {
      generatedFiles.push(createImageURL(file));
    }

    return generatedFiles;
  }
}
