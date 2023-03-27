import { Response } from 'express';

export function resErr(res: Response, error: Error | string, status = 400) {
  if (error instanceof Error)
    return res.status(status).json({
      message: error.message,
    });
  return res.status(status).json({
    message: error,
  });
}

export function resSuccess(res: Response, data: unknown, status = 200) {
  return res.status(status).json(data);
}
