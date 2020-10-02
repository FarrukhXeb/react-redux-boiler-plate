const storage = {
  set: (key, object) => {
    localStorage[key] = typeof object === 'string' ? object : JSON.stringify(object);
  },
  get: (key) => {
    if(!localStorage && !localStorage[key]) {
      return null;
    }
  
    return localStorage[key];
  
  },
  remove: (key) => {
    if(!localStorage) return null;
  
    if(localStorage[key]) {
      localStorage.removeItem(key);
    }
  }
};
  
const session = {
  set: (key, object) => {
    sessionStorage[key] = typeof object === 'string' ? object : JSON.stringify(object);
  },
  get: (key) => {
    if(!sessionStorage && !sessionStorage[key]) {
      return null;
    }
  
    return sessionStorage[key];
  
  },
  remove: (key) => {
    if(!sessionStorage) return null;
  
    if(sessionStorage[key]) {
      sessionStorage.removeItem(key);
    }
  }
};
  
export { storage, session };
  
