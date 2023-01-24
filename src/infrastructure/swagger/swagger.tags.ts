export const tags: SwaggerTag[] = [
  { name: 'Reservation', description: '예약 API' },
  { name: 'User', description: '사용자 API' },
  { name: 'Auth', description: '회원 API' },
  { name: 'Picture', description: '사진 업로드 API' },
];

type SwaggerTag = { name: string; description: string };
