import "dotenv/config";
const { env } = process;

interface Config {
  PORT?: Number | String;
  SECRET_KEY?: string;
  ConnectionString?: string;
}

const config: Config = {
  PORT: env.PORT,
  SECRET_KEY: env.SECRET_KEY,
  ConnectionString: env.ConnectionString,
};
export default config