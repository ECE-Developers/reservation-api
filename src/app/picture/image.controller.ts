import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from '../../libs/multer.options';
import { ImageService } from './image.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OkSuccess } from '../../libs/response/status-code/ok.success';

@Controller('image')
@ApiTags('Image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @UseInterceptors(FilesInterceptor('images', null, multerOptions))
  @Post()
  @ApiResponse({
    status: 200,
    description: '사진 업로드 성공',
    type: OkSuccess,
  })
  @ApiOperation({ summary: '사진 업로드' })
  uploadFiles(@UploadedFiles() files: File[]) {
    const uploadedFiles: string[] = this.imageService.uploadFiles(files);

    return {
      status: 200,
      message: '파일 업로드를 성공하였습니다.',
      data: {
        files: uploadedFiles,
      },
    };
  }
}
