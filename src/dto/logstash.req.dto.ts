export class LogstashReqDto {
  alb_received_bytes: string;
  alb_target_group_arn: string;
  elb_client_port: number;
  forward: string;
  alb_target_processing_time: number;
  initTime: string;
  alb_client_ip: string;
  alb_response_processing_time: number;
  port: string;
  alb_useragent: string;
  device: string;
  api: string;
  trace_id: string;
  os_major: string;
  os: string;
  alb_status_code: number;
  alb_sent_bytes: number;
  rawrequest: string;
  alb_sslcipher: string;
  alb_name: string;
  alb_target: string;
  alb_target_status_code: number;
  domain_name: string;
  alb_sslprotocol: string;
  session_name: string;
  build: string;
  timestamp: string;
  alb_request_type: string;
  method: string;
  name: string;
  alb_request_processing_time: number;
  os_minor: string;
  os_name: string;

  protobuf_data: string;
  encoding_protobuf_doc: any;
}
