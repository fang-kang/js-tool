export interface Cookie {
  get: (key: string) => string | undefined;
  set: (key: string, value: string, extdays?: number) => void;
  del: (key: string) => void;
}

/**
 * 快速操作cookie
 */
export const cookie: Cookie = {
  get(cname: string) {
    try {
      const name = `${cname}=`;
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        const c = ca[i].trim();
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
      }
      return '';
    } catch (error: any) {
      throw new Error(error);
    }
  },
  set(cname: string, value: string, extdays?: any) {
    try {
      const d = new Date();
      d.setTime(d.getTime() + extdays * 24 * 60 * 60 * 1000);
      const expires = `expires=${d.toUTCString()}`;
      document.cookie = `${cname}=${value}; ${expires}`;
    } catch (error: any) {
      throw new Error(error);
    }
  },
  del(this: any, name: string) {
    this.set(name, '', -1);
  },
};
