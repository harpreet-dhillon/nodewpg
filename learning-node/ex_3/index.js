const Logger = require('logplease');
const logger = Logger.create('I am logger');

// Hello Node.js (use debug method)
logger.debug('Hello node.js');
// Node.js is great!! (use info method)
logger.info('Node.js is great!!');
// Warning, Warning, I think we have a Warning (use warn method)
logger.warn('Warning, Warning, I think we have a Warning');
// Mayday Mayday, we have an errro, repeat.. we have an error (use error method)
logger.error('Mayday Mayday, we have an errro, repeat.. we have an error');