import { Button, Result, notification } from 'antd';
import type { ExceptionStatusType } from 'antd/lib/result';
import React from 'react';
import { history } from 'umi';

const ErrorMessage: React.FC<{ status: ExceptionStatusType; message: string }> = ({
  status,
  message,
}) => {
  switch (status) {
    case 403:
    case 404:
      return (
        <Result
          status={status}
          subTitle={message}
          extra={
            <Button type="primary" onClick={() => history.push('/')}>
              返回首页
            </Button>
          }
        />
      );
    default:
      notification.error({
        message: `${status}`,
        description: message,
      });
      return null;
  }
};

export default ErrorMessage;
