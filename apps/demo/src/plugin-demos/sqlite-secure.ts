import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSqliteSecure } from '@demo/shared';
import { SqliteSecure } from '@wuilmerj24/sqlite-secure';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

const sqlite: SqliteSecure = new SqliteSecure('dbname.db', '', 100);
export function create() {
  sqlite.createDb();
}

export function open() {
  sqlite.openDb();
}

export function isopen() {
  alert(sqlite.isOpen());
}

export function deletedb() {
  alert(sqlite.deleteDb('dbname.db'));
}

export function changeVersion() {
  sqlite.setVersion(2000);
  alert(sqlite.getVersion());
}

export function createTable() {
  const query = `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,age INTEGER)`;
  sqlite.execute(query);
}

export async function innsertData() {
  const query = `INSERT INTO users (name,age) VALUES(?,?)`;
  const res = await sqlite.execute(query, ['JOSE', 225]);
  console.log('res insert ', res);
}

export async function selectData() {
  const query = `SELECT * FROM users`;
  // const query = `SELECT COUNT(*) FROM users`;
  const result = await sqlite.select(query);
  console.log(result);
}

export async function selectBy() {
  const query = `SELECT * FROM users WHERE id=?`;
  const result = await sqlite.select(query, [1]);
  console.log(result);
}

export async function deleteT() {
  const query = `DROP TABLE IF EXISTS users`;
  const result = await sqlite.execute(query);
  console.log(result);
}

export async function deleteD() {
  const query = `DELETE FROM users`;
  const result = await sqlite.execute(query);
  console.log(result);
}

export async function deleteDone() {
  const query = `DELETE FROM users WHERE id=?`;
  const result = await sqlite.execute(query, [1]);
  console.log(result);
}

export async function updateAll() {
  const query = `UPDATE users SET age =?`;
  const result = await sqlite.execute(query, [15]);
  console.log(result);
}

export async function update() {
  const query = `UPDATE users SET name =? WHERE id = ?`;
  const result = await sqlite.execute(query, ['wuilmer', 4]);
  console.log(result);
}

export async function close() {
  const result = sqlite.close();
  console.log(result);
}

export class DemoModel extends DemoSharedSqliteSecure {}
