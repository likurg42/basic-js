const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!Array.isArray(domains) && domains.length === 0) {
    return {};
  }

  let dnsStats = {};

  domains.forEach((domain) => {
    domain = domain.split('.');
    let part = '';
    for (let i = domain.length - 1; i >= 0; i -= 1) {
      part = `${part}.${domain[i]}`;
      dnsStats[`${part}`] = dnsStats[`${part}`] ? dnsStats[`${part}`] + 1 : 1;
    }
  });
  return dnsStats;
}

module.exports = {
  getDNSStats,
};
