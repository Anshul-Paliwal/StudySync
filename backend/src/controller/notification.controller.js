// notifications.controller.ts
import * as NotificationService from "../utils/notificationService.js";
import { Request, Response } from "express";

export const getNotifications = async (req, res) => {
  const { userId } = req.params;
  const notifications = await NotificationService.getUserNotifications(userId);
  res.status(200).json(notifications);
};

export const markAsRead = async (req, res) => {
  const { id } = req.params;
  const updated = await NotificationService.markAsRead(id);
  res.status(200).json(updated);
};
