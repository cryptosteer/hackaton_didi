import { jsonGet, jsonPatch, jsonPost } from '@ascenso/crca-utils';

export const getCall = (url, params = {}) => {
  const p = new Promise(resolve => {
    const ret = {
      success: false,
      error: false,
    };
    jsonGet(url, params)
      .then(response => {
        ret.success = response.data || response.records || response;
        return resolve(ret);
      })
      .catch(err => {
        // console.log(err);
        ret.error = err;
        return resolve(ret);
      });
  });
  return p;
};

export const postCall = (url, params = {}) => {
  const p = new Promise(resolve => {
    const ret = {
      success: false,
      error: false,
    };
    jsonPost(url, params)
      .then(response => {
        ret.success = response.data || response.records || response;
        return resolve(ret);
      })
      .catch(err => {
        ret.error = err;
        return resolve(ret);
      });
  });
  return p;
};

export const patchCall = (url, params = {}) => {
  const p = new Promise(resolve => {
    const ret = {
      success: false,
      error: false,
    };
    jsonPatch(url, params)
      .then(response => {
        ret.success = response.data || response.records || response;
        return resolve(ret);
      })
      .catch(err => {
        ret.error = err;
        return resolve(ret);
      });
  });
  return p;
};
