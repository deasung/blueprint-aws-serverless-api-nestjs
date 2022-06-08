export class ApiResDto {
  //api 성공유무 true/false
  private success: boolean;

  //서버 응답 코드
  private code: number;

  //서버 응답 메시지
  private message: string | object;

  //서버 응답 데이터
  private data: string | object;

  constructor(
    success: boolean,
    code: number,
    message: string | object,
    data: string | object,
  ) {
    this.success = success;
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
