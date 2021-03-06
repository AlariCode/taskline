import { Item } from './item';

export interface Storage {
  get(ids?: Array<number>): Promise<Array<Item>>;

  getArchive(ids?: Array<number>): Promise<Array<Item>>;

  set(data: Array<Item>): Promise<void>;

  setArchive(archive: Array<Item>): Promise<void>;
}
