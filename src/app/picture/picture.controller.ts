import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from '../../libs/multer.options';
import { PictureService } from './picture.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OkSuccess } from '../../libs/response/status-code/ok.success';

@Controller('picture')
@ApiTags('Picture')
export class PictureController {
  constructor(private readonly pictureService: PictureService) {}

  @UseInterceptors(FilesInterceptor('images', null, multerOptions))
  @Post()
  @ApiResponse({
    status: 200,
    description: '사진 업로드 성공',
    type: OkSuccess,
  })
  @ApiOperation({ summary: '사진 업로드' })
  uploadFiles(@UploadedFiles() files: File[]) {
    const uploadedFiles: string[] = this.pictureService.uploadFiles(files);

    return {
      status: 200,
      message: '파일 업로드를 성공하였습니다.',
      data: {
        files: uploadedFiles,
      },
    };
  }
}
