import { dirname } from 'path';
import { parse, loadSync } from 'protobufjs';

parse.defaults.keepCase = true;

const Message = loadSync([
  dirname(module.id) + '/../proto/common.proto',
  dirname(module.id) + '/../proto/api_k.proto',
]);

export default Message;
