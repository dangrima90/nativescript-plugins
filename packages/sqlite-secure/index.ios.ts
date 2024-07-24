import { path, Utils } from '@nativescript/core';
import { SqliteSecureCommon } from './common';
import { knownFolders } from '@nativescript/core';

enum ESQLITE3NS {
  SQLITE_OK = 0,
  SQLITE_ERROR = 1 /* Generic error */,
  SQLITE_INTERNAL = 2 /* Internal logic error in SQLite */,
  SQLITE_PERM = 3 /* Access permission denied */,
  SQLITE_ABORT = 4 /* Callback routine requested an abort */,
  SQLITE_BUSY = 5 /* The database file is locked */,
  SQLITE_LOCKED = 6 /* A table in the database is locked */,
  SQLITE_NOMEM = 7 /* A malloc() failed */,
  SQLITE_READONLY = 8 /* Attempt to write a readonly database */,
  SQLITE_INTERRUPT = 9 /* Operation terminated by sqlite3_interrupt()*/,
  SQLITE_IOERR = 10 /* Some kind of disk I/O error occurred */,
  SQLITE_CORRUPT = 11 /* The database disk image is malformed */,
  SQLITE_NOTFOUND = 12 /* Unknown opcode in sqlite3_file_control() */,
  SQLITE_FULL = 13 /* Insertion failed because database is full */,
  SQLITE_CANTOPEN = 14 /* Unable to open the database file */,
  SQLITE_PROTOCOL = 15 /* Database lock protocol error */,
  SQLITE_EMPTY = 16 /* Internal use only */,
  SQLITE_SCHEMA = 17 /* The database schema changed */,
  SQLITE_TOOBIG = 18 /* String or BLOB exceeds size limit */,
  SQLITE_CONSTRAINT = 19 /*, Abort due to constraint violation */,
  SQLITE_MISMATCH = 20 /* Data type mismatch */,
  SQLITE_MISUSE = 21 /* Library used incorrectly */,
  SQLITE_NOLFS = 22 /* Uses OS features not supported on host */,
  SQLITE_AUTH = 23 /* Authorization denied */,
  SQLITE_FORMAT = 24 /* Not used */,
  SQLITE_RANGE = 25 /* 2nd parameter to sqlite3_bind out of range */,
  SQLITE_NOTADB = 26 /* File opened that is not a database file */,
  SQLITE_NOTICE = 27 /* Notifications from sqlite3_log() */,
  SQLITE_WARNING = 28 /* Warnings from sqlite3_log() */,
  SQLITE_ROW = 100 /* sqlite3_step() has another row ready */,
  SQLITE_DONE = 101 /* sqlite3_step() has finished executing */,
}

enum ESQLITE_TYPE {
  SQLITE_INTEGER = 1,
  SQLITE_FLOAT = 2,
  SQLITE_BLOB = 4,
  SQLITE_NULL = 5,
  SQLITE_TEXT = 3,
  SQLITE3_TEXT = 3,
}
export class SqliteSecure extends SqliteSecureCommon {
  public sqlite: interop.Reference<any> = null;
  private filePath: string;
  private isDbOpen: boolean = false;
  public createDb(): interop.Pointer | interop.Reference<any> {
    try {
      this.filePath = path.join(knownFolders.documents().getFolder('db').path, this.dbname);
      this.sqlite = new interop.Reference();
      const db = sqlite3_open_v2(this.filePath, this.sqlite, 2 | 4, null);
      const sqliteController: Sqlite3Controller = Sqlite3Controller.new();
      if (db == ESQLITE3NS.SQLITE_OK) {
        const sqlite = sqliteController.cipherDbWithSqlitePassword(this.sqlite.value, this.password);

        this.sqlite.value = sqlite as interop.Reference<any>;

        this.isDbOpen = true;
      } else {
        this.isDbOpen = false;
      }

      if (this.version) {
        this.setVersion(this.version);
      }
      return this.sqlite;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  public deleteDb(dbname: string): boolean {
    try {
      this.filePath = path.join(knownFolders.documents().getFolder('db').path, dbname);
      const close = sqlite3_close_v2(interop.Pointer());
      const fileManager = NSFileManager.defaultManager;
      const remove = fileManager.removeItemAtPathError(this.filePath);
      if (close == ESQLITE3NS.SQLITE_OK && remove == true) {
        this.isDbOpen = false;
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  public openDb(): interop.Pointer | interop.Reference<any> {
    return this.createDb();
  }

  public isOpen(): boolean {
    return this.isDbOpen;
  }

  public setVersion(version: number) {
    const setVersionString = `PRAGMA user_version =${version};`;
    try {
      const setVersionStatement: interop.Reference<any> = new interop.Reference();
      const res = sqlite3_prepare_v2(this.sqlite.value, setVersionString, -1, setVersionStatement, null);
      if (res == ESQLITE3NS.SQLITE_OK) {
        const step = sqlite3_step(setVersionStatement.value);
        if (step == ESQLITE3NS.SQLITE_DONE) {
          sqlite3_finalize(setVersionStatement.value);
          return true;
        }
        return false;
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  }

  public getVersion(): number {
    try {
      let queryString = 'PRAGMA user_version;';
      const queryStatement: interop.Reference<any> = new interop.Reference();
      if (sqlite3_prepare_v2(this.sqlite.value, queryString, -1, queryStatement, null) == ESQLITE3NS.SQLITE_OK) {
        if (sqlite3_step(queryStatement.value) == ESQLITE3NS.SQLITE_ROW) {
          const version = sqlite3_column_int(queryStatement.value, 0);
          return version;
        }
        return 0;
      }
      return 0;
    } catch (error) {
      console.log(error);
    }
  }

  public async execute(query: string, args: any[]) {
    return new Promise(async (rs, rj) => {
      try {
        const statement: interop.Reference<any> = new interop.Reference();
        const prepare = sqlite3_prepare_v2(this.sqlite.value, query, -1, statement, null);
        if (prepare == ESQLITE3NS.SQLITE_OK) {
          if (args != undefined) {
            for (let i: number = 0; i < args.length; i++) {
              if (this.isString(args[i])) {
                const res_bind = sqlite3_bind_text(statement.value, i + 1, args[i], -1, null);
              }
              if (this.isInt(args[i])) {
                const res_bind = sqlite3_bind_int(statement.value, i + 1, parseInt(args[i]));
              }
              if (this.isFloat(args[i])) {
                const res_bind = sqlite3_bind_double(statement.value, i + 1, parseFloat(args[i]));
              }
              if (this.isBoolean(args[i])) {
                let value: number = 0;
                if (args[i] == true) {
                  value = 1;
                }
                const res_bind = sqlite3_bind_int(statement.value, i + 1, value);
              }
              if (this.isBlob(args[i])) {
                const res_bind = sqlite3_bind_blob(statement.value, 1, args[i], -1, null);
              }
            }
          }
          const res_query = sqlite3_step(statement.value);
          sqlite3_finalize(statement.value);
          if (res_query == ESQLITE3NS.SQLITE_DONE) {
            rs(res_query);
            return res_query;
          }
        }

        let error = sqlite3_errmsg(this.sqlite);
        sqlite3_finalize(statement.value);
        rj(NSString.stringWithCStringEncoding(error, 4));
        return NSString.stringWithCStringEncoding(error, 4);
      } catch (error) {
        console.error(error);
        rj(error);
        return error;
      }
    });
  }

  public async select(query: string, args: any[]): Promise<any[]> {
    const match = query.match(/FROM\s+([^\s;]+)/i);
    // const countRow:number=this.countRowsInTable(match[1]);
    const countRow: number = 3;
    return new Promise(async (resolve, reject) => {
      try {
        let results: { [key: string]: any }[] = [];
        const statement: interop.Reference<any> = new interop.Reference();
        if (sqlite3_prepare_v2(this.sqlite.value, query, -1, statement, null) == ESQLITE3NS.SQLITE_OK) {
          if (args != undefined) {
            for (let i: number = 0; i < args.length; i++) {
              if (this.isString(args[i])) {
                const res = sqlite3_bind_text(statement.value, i + 1, args[i], -1, null);
              }
              if (this.isInt(args[i])) {
                const res = sqlite3_bind_int(statement.value, i + 1, parseInt(args[i]));
              }
              if (this.isFloat(args[i])) {
                const res = sqlite3_bind_double(statement.value, i + 1, parseFloat(args[i]));
              }
              if (this.isBoolean(args[i])) {
                let value: number = 0;
                if (args[i] == true) {
                  value = 1;
                }
                const res = sqlite3_bind_int(statement.value, i + 1, value);
              }
              if (this.isBlob(args[i])) {
                const res = sqlite3_bind_blob(statement.value, 1, args[i], -1, null);
              }
            }
          }
          let stepResult = sqlite3_step(statement.value);
          // for(let j:number=0;j<countRow;j++){
          while (stepResult == ESQLITE3NS.SQLITE_ROW) {
            let row: { [key: string]: any } = {};
            const columnCount: number = sqlite3_column_count(statement.value);
            for (let i: number = 0; i < columnCount; i++) {
              const columnName: string = NSString.stringWithCString(sqlite3_column_name(statement.value, i));
              const columnType = sqlite3_column_type(statement, i);
              if (columnType == ESQLITE_TYPE.SQLITE_INTEGER) {
                const value: number = sqlite3_column_int(statement.value, i);
                row[columnName] = value;
              } else if (columnType == ESQLITE_TYPE.SQLITE_FLOAT) {
                const value1: number = sqlite3_column_double(statement.value, i);
                row[columnName] = value1;
              } else if (columnType == ESQLITE_TYPE.SQLITE_TEXT || columnType == ESQLITE_TYPE.SQLITE3_TEXT) {
                const value2: string = NSString.stringWithCString(sqlite3_column_text(statement.value, i));
                row[columnName] = value2;
              } else if (columnType == ESQLITE_TYPE.SQLITE_BLOB) {
                const value4 = sqlite3_column_blob(statement.value, i);
                const dataSize = sqlite3_column_bytes(statement.value, i);
                const data = NSData.dataWithBytesLength(value4, dataSize);
                row[columnName] = data;
              } else if (columnType == ESQLITE_TYPE.SQLITE_NULL) {
                // row[columnName] = null;
              }
            }
            results.push(row);
            stepResult = sqlite3_step(statement.value);
          }
          resolve(results);
          return;
        }

        let error = sqlite3_errmsg(this.sqlite);
        sqlite3_finalize(statement.value);
        if (error) {
          reject(NSString.stringWithCStringEncoding(error, 4));
          return NSString.stringWithCStringEncoding(error, 4);
        }
        resolve(results);
        return results;
      } catch (error) {
        console.error(error);
        reject(error);
        return error;
      }
    });
  }

  close(): boolean {
    if (sqlite3_close_v2(this.sqlite.value) == ESQLITE3NS.SQLITE_OK) {
      this.isDbOpen = false;
      return true;
    } else {
      let error = sqlite3_errmsg(this.sqlite);
      console.log(NSString.stringWithCString(error));
      return false;
    }
  }

  private countRowsInTable(tabla: string): number {
    let query = `SELECT COUNT(*) FROM ${tabla};`;
    var statement: interop.Reference<any> = new interop.Reference();
    var rowCount: number = 0;

    if (sqlite3_prepare_v2(this.sqlite.value, query, -1, statement, null) == ESQLITE3NS.SQLITE_OK) {
      if (sqlite3_step(statement.value) == ESQLITE3NS.SQLITE_ROW) {
        rowCount = sqlite3_column_int(statement, 0);
      }
    } else {
      const error = sqlite3_errmsg(this.sqlite.value);
    }

    sqlite3_finalize(statement);
    return rowCount;
  }

  private isInt(value: any): boolean {
    return Number.isInteger(value);
  }

  private isFloat(value: any): boolean {
    return typeof value === 'number' && !Number.isInteger(value);
  }

  private isString(value: any): boolean {
    return typeof value === 'string';
  }

  private isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }

  private isBlob(value: any): boolean {
    return value instanceof Blob;
  }
}
