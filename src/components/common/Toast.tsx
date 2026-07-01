import React, { useEffect } from 'react';
import clsx from 'clsx';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
  };

  return (
    <div
      className={clsx(
        'fixed bottom-4 right-4 rounded-lg px-4 py-3 text-white shadow-lg',
        colors[type]
      )}
    >
      {message}
    </div>
  );
};

export default Toast;
