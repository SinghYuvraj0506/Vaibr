const OTP_TEMPLATE = (OTP_CODE) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OTP Verification</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 50px auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #4CAF50;
      padding: 20px;
      text-align: center;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    .header h1 {
      color: #ffffff;
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
      text-align: center;
    }
    .content p {
      font-size: 18px;
      color: #333333;
      margin-bottom: 20px;
    }
    .otp {
      font-size: 32px;
      font-weight: bold;
      color: #4CAF50;
      margin-bottom: 20px;
    }
    .footer {
      background-color: #f4f4f4;
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: #888888;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>OTP Verification</h1>
    </div>

    <div class="content">
      <p>Dear User,</p>
      <p>Your One-Time Password (OTP) for verifying your account is:</p>
      <div class="otp">${OTP_CODE}</div>
      <p>Please enter this OTP in the verification screen to proceed. This OTP is valid for the next 10 minutes.</p>
      <p>If you did not request this, please ignore this email.</p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>Thank you for using our service!</p>
      <p>&copy; All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;
};


module.exports = {
  OTP_TEMPLATE
}