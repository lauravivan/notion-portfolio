interface ResponseOK {
  ok: boolean;
  res: T;
}

interface ResponseFail {
  ok: boolean;
  error: string;
}
