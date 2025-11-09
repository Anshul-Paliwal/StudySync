// notifications.service.ts
import Notification from "../model/notification.model.js";

export const sendNotification = async (data: {
  userId: string;
  title: string;
  message: string;
  type?: string;
  link?: string;
}) => {
  const notification = new Notification(data);
  await notification.save();
  // (optional) emit real-time event via Socket.io
  return notification;
};

export const getUserNotifications = async (userId: string) => {
  return Notification.find({ userId }).sort({ createdAt: -1 });
};

export const markAsRead = async (notificationId: string) => {
  return Notification.findByIdAndUpdate(notificationId, { isRead: true });
};
