export interface User {
  id: number;
  username: string;
  password: string;
  created_at: string;
  updated_at: string;
}

export interface Url {
  id: string;
  url: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface Visit {
  id: number;
  url_id: string;
  ip: string;
  created_at: string;
  updated_at: string;
}

declare module "knex/types/tables" {
  interface Tables {
    users: User;
    urls: Url;
    visits: Visit;
  }
}
