import { core } from './core.js';
import config from '../config.js';

(async () => {
  const app = await core();

  try {
    await app.listen(config.port, config.address);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
})();
