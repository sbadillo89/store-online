type UserAttr = {
  requestData: {
    email: string;
    password: string;
  };
  responseData: {
    userId: string;
    userName: string;
    email: string;
    token: string;
    expireDate: string;
    isAdmin: boolean;
  };
  status: number;
  message: string;
};

export type { UserAttr };
