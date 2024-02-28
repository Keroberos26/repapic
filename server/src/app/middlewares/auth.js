import jwt from 'jsonwebtoken';
import { createError } from '../../utils/error.js';
import asyncHandler from 'express-async-handler';

export const verifyToken = asyncHandler(async (req, res, next) => {
  const token = req.header('Authorization')?.startsWith('Bearer') && req.header('Authorization').split(' ')[1];

  if (!token) {
    throw createError(401, 'Vui lòng đăng nhập để thực hiện hành động!');
  }

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) throw createError(403, 'Token không hợp lệ!');
    req.user = user;
    next();
  });
});

export const verifyUser = asyncHandler(async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      throw createError(403, 'Bạn không được phân quyền thực thi!');
    }
  });
});

export const verifyAdmin = asyncHandler(async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      throw createError(403, 'Bạn không được phân quyền thực thi!');
    }
  });
});
