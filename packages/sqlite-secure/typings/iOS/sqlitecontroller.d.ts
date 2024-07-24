declare class Sqlite3Controller extends NSObject {
  static alloc(): Sqlite3Controller; // inherited from NSObject

  static new(): Sqlite3Controller; // inherited from NSObject

  sqlite: interop.Pointer | interop.Reference<any>;

  cipherDbWithSqlitePassword(sqlite: interop.Pointer | interop.Reference<any>, password: string): interop.Pointer | interop.Reference<any>;
}
