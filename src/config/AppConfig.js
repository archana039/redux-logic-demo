let data;
export const EnviornmentType = {
  DEV: "development",
  PROD: "production",
};

export const env = process.env.NODE_ENV || EnviornmentType.DEV;
data = {
  API_ENDPOINT:
    env === EnviornmentType.DEV
      ? "http://localhost:8081/"
      : "",

  API_VERSION: "api",
};

export const IMAGE_URL = 'http://localhost:8081/image/'
export const AppConfig = data;