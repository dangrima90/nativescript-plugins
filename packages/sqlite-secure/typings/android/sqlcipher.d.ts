declare module net {
  export module zetetic {
    export module database {
      export class BuildConfig {
        public static class: java.lang.Class<net.zetetic.database.BuildConfig>;
        public static DEBUG: boolean;
        public static LIBRARY_PACKAGE_NAME: string;
        public static BUILD_TYPE: string;
        public constructor();
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export class DatabaseErrorHandler {
        public static class: java.lang.Class<net.zetetic.database.DatabaseErrorHandler>;
        /**
         * Constructs a new instance of the net.zetetic.database.DatabaseErrorHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onCorruption(param0: net.zetetic.database.sqlcipher.SQLiteDatabase): void });
        public constructor();
        public onCorruption(param0: net.zetetic.database.sqlcipher.SQLiteDatabase): void;
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export class DatabaseUtils {
        public static class: java.lang.Class<net.zetetic.database.DatabaseUtils>;
        public static STATEMENT_SELECT: number;
        public static STATEMENT_UPDATE: number;
        public static STATEMENT_ATTACH: number;
        public static STATEMENT_BEGIN: number;
        public static STATEMENT_COMMIT: number;
        public static STATEMENT_ABORT: number;
        public static STATEMENT_PRAGMA: number;
        public static STATEMENT_DDL: number;
        public static STATEMENT_UNPREPARED: number;
        public static STATEMENT_OTHER: number;
        public static dumpCurrentRow(param0: globalAndroid.database.Cursor): void;
        public static writeExceptionToParcel(param0: globalAndroid.os.Parcel, param1: java.lang.Exception): void;
        public static longForQuery(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: string, param2: androidNative.Array<string>): number;
        public static findRowIdColumnIndex(param0: androidNative.Array<string>): number;
        public constructor();
        public static queryNumEntries(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: string): number;
        public static appendValueToSql(param0: java.lang.StringBuilder, param1: any): void;
        public static dumpCurrentRow(param0: globalAndroid.database.Cursor, param1: java.io.PrintStream): void;
        public static stringForQuery(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: string, param2: androidNative.Array<string>): string;
        public static queryNumEntries(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: string, param2: string): number;
        public static concatenateWhere(param0: string, param1: string): string;
        public static getSqlStatementType(param0: string): number;
        public static dumpCursor(param0: globalAndroid.database.Cursor, param1: java.lang.StringBuilder): void;
        public static blobFileDescriptorForQuery(param0: net.zetetic.database.sqlcipher.SQLiteStatement, param1: androidNative.Array<string>): globalAndroid.os.ParcelFileDescriptor;
        public static dumpCursorToString(param0: globalAndroid.database.Cursor): string;
        public static sqlEscapeString(param0: string): string;
        public static cursorIntToContentValues(param0: globalAndroid.database.Cursor, param1: string, param2: globalAndroid.content.ContentValues): void;
        public static cursorLongToContentValues(param0: globalAndroid.database.Cursor, param1: string, param2: globalAndroid.content.ContentValues, param3: string): void;
        public static bindObjectToProgram(param0: net.zetetic.database.sqlcipher.SQLiteProgram, param1: number, param2: any): void;
        public static cursorStringToContentValuesIfPresent(param0: globalAndroid.database.Cursor, param1: globalAndroid.content.ContentValues, param2: string): void;
        public static cursorIntToContentValues(param0: globalAndroid.database.Cursor, param1: string, param2: globalAndroid.content.ContentValues, param3: string): void;
        public static cursorStringToContentValues(param0: globalAndroid.database.Cursor, param1: string, param2: globalAndroid.content.ContentValues, param3: string): void;
        public static stringForQuery(param0: net.zetetic.database.sqlcipher.SQLiteStatement, param1: androidNative.Array<string>): string;
        public static appendEscapedSQLString(param0: java.lang.StringBuilder, param1: string): void;
        public static cursorDoubleToCursorValues(param0: globalAndroid.database.Cursor, param1: string, param2: globalAndroid.content.ContentValues): void;
        public static cursorIntToContentValuesIfPresent(param0: globalAndroid.database.Cursor, param1: globalAndroid.content.ContentValues, param2: string): void;
        public static getTypeOfObject(param0: any): number;
        public static cursorDoubleToContentValuesIfPresent(param0: globalAndroid.database.Cursor, param1: globalAndroid.content.ContentValues, param2: string): void;
        public static cursorRowToContentValues(param0: globalAndroid.database.Cursor, param1: globalAndroid.content.ContentValues): void;
        public static dumpCurrentRowToString(param0: globalAndroid.database.Cursor): string;
        public static cursorShortToContentValuesIfPresent(param0: globalAndroid.database.Cursor, param1: globalAndroid.content.ContentValues, param2: string): void;
        public static queryNumEntries(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: string, param2: string, param3: androidNative.Array<string>): number;
        public static dumpCursor(param0: globalAndroid.database.Cursor): void;
        public static cursorLongToContentValuesIfPresent(param0: globalAndroid.database.Cursor, param1: globalAndroid.content.ContentValues, param2: string): void;
        public static cursorStringToInsertHelper(param0: globalAndroid.database.Cursor, param1: string, param2: net.zetetic.database.DatabaseUtils.InsertHelper, param3: number): void;
        public static cursorLongToContentValues(param0: globalAndroid.database.Cursor, param1: string, param2: globalAndroid.content.ContentValues): void;
        public static longForQuery(param0: net.zetetic.database.sqlcipher.SQLiteStatement, param1: androidNative.Array<string>): number;
        public static cursorStringToContentValues(param0: globalAndroid.database.Cursor, param1: string, param2: globalAndroid.content.ContentValues): void;
        public static createDbFromSqlStatements(param0: globalAndroid.content.Context, param1: string, param2: number, param3: string): void;
        public static blobFileDescriptorForQuery(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: string, param2: androidNative.Array<string>): globalAndroid.os.ParcelFileDescriptor;
        public static cursorDoubleToContentValues(param0: globalAndroid.database.Cursor, param1: string, param2: globalAndroid.content.ContentValues, param3: string): void;
        public static appendSelectionArgs(param0: androidNative.Array<string>, param1: androidNative.Array<string>): androidNative.Array<string>;
        public static getHexCollationKey(param0: string): string;
        public static dumpCursor(param0: globalAndroid.database.Cursor, param1: java.io.PrintStream): void;
        public static cursorFillWindow(param0: globalAndroid.database.Cursor, param1: number, param2: globalAndroid.database.CursorWindow): void;
        public static queryIsEmpty(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: string): boolean;
        public static cursorFloatToContentValuesIfPresent(param0: globalAndroid.database.Cursor, param1: globalAndroid.content.ContentValues, param2: string): void;
        public static cursorPickFillWindowStartPosition(param0: number, param1: number): number;
        public static getCollationKey(param0: string): string;
        public static dumpCurrentRow(param0: globalAndroid.database.Cursor, param1: java.lang.StringBuilder): void;
      }
      export module DatabaseUtils {
        export class InsertHelper {
          public static class: java.lang.Class<net.zetetic.database.DatabaseUtils.InsertHelper>;
          public static TABLE_INFO_PRAGMA_COLUMNNAME_INDEX: number;
          public static TABLE_INFO_PRAGMA_DEFAULT_INDEX: number;
          public execute(): number;
          public bindNull(param0: number): void;
          public bind(param0: number, param1: androidNative.Array<number>): void;
          public prepareForReplace(): void;
          public replace(param0: globalAndroid.content.ContentValues): number;
          public bind(param0: number, param1: string): void;
          public constructor(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: string);
          public bind(param0: number, param1: boolean): void;
          public getColumnIndex(param0: string): number;
          public close(): void;
          public bind(param0: number, param1: number): void;
          public prepareForInsert(): void;
          public insert(param0: globalAndroid.content.ContentValues): number;
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export class DefaultDatabaseErrorHandler extends net.zetetic.database.DatabaseErrorHandler {
        public static class: java.lang.Class<net.zetetic.database.DefaultDatabaseErrorHandler>;
        public onCorruption(param0: net.zetetic.database.sqlcipher.SQLiteDatabase): void;
        public constructor();
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class CloseGuard {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.CloseGuard>;
          public open(param0: string): void;
          public static getReporter(): net.zetetic.database.sqlcipher.CloseGuard.Reporter;
          public warnIfOpen(): void;
          public close(): void;
          public static get(): net.zetetic.database.sqlcipher.CloseGuard;
          public static setEnabled(param0: boolean): void;
          public static setReporter(param0: net.zetetic.database.sqlcipher.CloseGuard.Reporter): void;
        }
        export module CloseGuard {
          export class DefaultReporter extends net.zetetic.database.sqlcipher.CloseGuard.Reporter {
            public static class: java.lang.Class<net.zetetic.database.sqlcipher.CloseGuard.DefaultReporter>;
            public report(param0: string, param1: java.lang.Throwable): void;
          }
          export class Reporter {
            public static class: java.lang.Class<net.zetetic.database.sqlcipher.CloseGuard.Reporter>;
            /**
             * Constructs a new instance of the net.zetetic.database.sqlcipher.CloseGuard$Reporter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { report(param0: string, param1: java.lang.Throwable): void });
            public constructor();
            public report(param0: string, param1: java.lang.Throwable): void;
          }
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class DatabaseObjectNotClosedException {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.DatabaseObjectNotClosedException>;
          public constructor();
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export abstract class SQLiteClosable {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteClosable>;
          public acquireReference(): void;
          /** @deprecated */
          public releaseReferenceFromContainer(): void;
          public constructor();
          public releaseReference(): void;
          public close(): void;
          public onAllReferencesReleased(): void;
          /** @deprecated */
          public onAllReferencesReleasedFromContainer(): void;
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class SQLiteConnection {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteConnection>;
          public dump(param0: globalAndroid.util.Printer, param1: boolean): void;
          public isPrimaryConnection(): boolean;
          public executeForLastInsertedRowId(param0: string, param1: androidNative.Array<any>, param2: globalAndroid.os.CancellationSignal): number;
          public static hasCodec(): boolean;
          public executeRaw(param0: string, param1: androidNative.Array<any>, param2: globalAndroid.os.CancellationSignal): void;
          public finalize(): void;
          public prepare(param0: string, param1: net.zetetic.database.sqlcipher.SQLiteStatementInfo): void;
          public executeForChangedRowCount(param0: string, param1: androidNative.Array<any>, param2: globalAndroid.os.CancellationSignal): number;
          public execute(param0: string, param1: androidNative.Array<any>, param2: globalAndroid.os.CancellationSignal): void;
          public executeForBlobFileDescriptor(param0: string, param1: androidNative.Array<any>, param2: globalAndroid.os.CancellationSignal): globalAndroid.os.ParcelFileDescriptor;
          public toString(): string;
          public getConnectionId(): number;
          public executeForString(param0: string, param1: androidNative.Array<any>, param2: globalAndroid.os.CancellationSignal): string;
          public executeForCursorWindow(param0: string, param1: androidNative.Array<any>, param2: globalAndroid.database.CursorWindow, param3: number, param4: number, param5: boolean, param6: globalAndroid.os.CancellationSignal): number;
          public onCancel(): void;
          public enableLocalizedCollators(): void;
          public executeForLong(param0: string, param1: androidNative.Array<any>, param2: globalAndroid.os.CancellationSignal): number;
        }
        export module SQLiteConnection {
          export class Operation {
            public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteConnection.Operation>;
            public mStartWallTime: number;
            public mStartTime: number;
            public mEndTime: number;
            public mKind: string;
            public mSql: string;
            public mBindArgs: java.util.ArrayList<any>;
            public mFinished: boolean;
            public mException: java.lang.Exception;
            public mCookie: number;
            public describe(param0: java.lang.StringBuilder, param1: boolean): void;
          }
          export class OperationLog {
            public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteConnection.OperationLog>;
            public beginOperation(param0: string, param1: string, param2: androidNative.Array<any>): number;
            public endOperation(param0: number): void;
            public dump(param0: globalAndroid.util.Printer, param1: boolean): void;
            public logOperation(param0: number, param1: string): void;
            public describeCurrentOperation(): string;
            public failOperation(param0: number, param1: java.lang.Exception): void;
            public endOperationDeferLog(param0: number): boolean;
          }
          export class PreparedStatement {
            public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteConnection.PreparedStatement>;
            public mPoolNext: net.zetetic.database.sqlcipher.SQLiteConnection.PreparedStatement;
            public mSql: string;
            public mStatementPtr: number;
            public mNumParameters: number;
            public mType: number;
            public mReadOnly: boolean;
            public mInCache: boolean;
            public mInUse: boolean;
          }
          export class PreparedStatementCache extends globalAndroid.util.LruCache<string, net.zetetic.database.sqlcipher.SQLiteConnection.PreparedStatement> {
            public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteConnection.PreparedStatementCache>;
            public dump(param0: globalAndroid.util.Printer): void;
            public entryRemoved(param0: boolean, param1: string, param2: net.zetetic.database.sqlcipher.SQLiteConnection.PreparedStatement, param3: net.zetetic.database.sqlcipher.SQLiteConnection.PreparedStatement): void;
            public constructor(param0: net.zetetic.database.sqlcipher.SQLiteConnection, param1: number);
          }
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class SQLiteConnectionPool {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteConnectionPool>;
          public static CONNECTION_FLAG_READ_ONLY: number;
          public static CONNECTION_FLAG_PRIMARY_CONNECTION_AFFINITY: number;
          public static CONNECTION_FLAG_INTERACTIVE: number;
          public dump(param0: globalAndroid.util.Printer, param1: boolean): void;
          public toString(): string;
          public static open(param0: net.zetetic.database.sqlcipher.SQLiteDatabaseConfiguration): net.zetetic.database.sqlcipher.SQLiteConnectionPool;
          public releaseConnection(param0: net.zetetic.database.sqlcipher.SQLiteConnection): void;
          public finalize(): void;
          public close(): void;
          public reconfigure(param0: net.zetetic.database.sqlcipher.SQLiteDatabaseConfiguration): void;
          public acquireConnection(param0: string, param1: number, param2: globalAndroid.os.CancellationSignal): net.zetetic.database.sqlcipher.SQLiteConnection;
          public shouldYieldConnection(param0: net.zetetic.database.sqlcipher.SQLiteConnection, param1: number): boolean;
          public collectDbStats(param0: java.util.ArrayList<net.zetetic.database.sqlcipher.SQLiteDebug.DbStats>): void;
          public enableLocalizedCollators(): void;
        }
        export module SQLiteConnectionPool {
          export class AcquiredConnectionStatus {
            public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteConnectionPool.AcquiredConnectionStatus>;
            public static NORMAL: net.zetetic.database.sqlcipher.SQLiteConnectionPool.AcquiredConnectionStatus;
            public static RECONFIGURE: net.zetetic.database.sqlcipher.SQLiteConnectionPool.AcquiredConnectionStatus;
            public static DISCARD: net.zetetic.database.sqlcipher.SQLiteConnectionPool.AcquiredConnectionStatus;
            public static valueOf(param0: string): net.zetetic.database.sqlcipher.SQLiteConnectionPool.AcquiredConnectionStatus;
            public static values(): androidNative.Array<net.zetetic.database.sqlcipher.SQLiteConnectionPool.AcquiredConnectionStatus>;
          }
          export class ConnectionWaiter {
            public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteConnectionPool.ConnectionWaiter>;
            public mNext: net.zetetic.database.sqlcipher.SQLiteConnectionPool.ConnectionWaiter;
            public mThread: java.lang.Thread;
            public mStartTime: number;
            public mPriority: number;
            public mWantPrimaryConnection: boolean;
            public mSql: string;
            public mConnectionFlags: number;
            public mAssignedConnection: net.zetetic.database.sqlcipher.SQLiteConnection;
            public mException: java.lang.RuntimeException;
            public mNonce: number;
          }
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class SQLiteCursor {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteCursor>;
          public static PREFERRED_CURSOR_WINDOW_SIZE: number;
          public static resetCursorWindowSize(): void;
          public getCount(): number;
          /** @deprecated */
          public constructor(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: net.zetetic.database.sqlcipher.SQLiteCursorDriver, param2: string, param3: net.zetetic.database.sqlcipher.SQLiteQuery);
          public requery(): boolean;
          public finalize(): void;
          public deactivate(): void;
          public setSelectionArguments(param0: androidNative.Array<string>): void;
          public setWindow(param0: globalAndroid.database.CursorWindow): void;
          public onMove(param0: number, param1: number): boolean;
          public constructor(param0: net.zetetic.database.sqlcipher.SQLiteCursorDriver, param1: string, param2: net.zetetic.database.sqlcipher.SQLiteQuery);
          public getColumnIndex(param0: string): number;
          public getColumnNames(): androidNative.Array<string>;
          public close(): void;
          public static setCursorWindowSize(param0: number): void;
          public getDatabase(): net.zetetic.database.sqlcipher.SQLiteDatabase;
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class SQLiteCursorDriver {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteCursorDriver>;
          /**
           * Constructs a new instance of the net.zetetic.database.sqlcipher.SQLiteCursorDriver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { query(param0: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param1: androidNative.Array<string>): globalAndroid.database.Cursor; cursorDeactivated(): void; cursorRequeried(param0: globalAndroid.database.Cursor): void; cursorClosed(): void; setBindArguments(param0: androidNative.Array<string>): void });
          public constructor();
          public cursorClosed(): void;
          public setBindArguments(param0: androidNative.Array<string>): void;
          public query(param0: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param1: androidNative.Array<string>): globalAndroid.database.Cursor;
          public cursorDeactivated(): void;
          public cursorRequeried(param0: globalAndroid.database.Cursor): void;
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class SQLiteCustomFunction {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteCustomFunction>;
          public name: string;
          public numArgs: number;
          public callback: net.zetetic.database.sqlcipher.SQLiteDatabase.CustomFunction;
          public constructor(param0: string, param1: number, param2: net.zetetic.database.sqlcipher.SQLiteDatabase.CustomFunction);
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class SQLiteDatabase extends net.zetetic.database.sqlcipher.SQLiteClosable {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteDatabase>;
          public static CONFLICT_ROLLBACK: number;
          public static CONFLICT_ABORT: number;
          public static CONFLICT_FAIL: number;
          public static CONFLICT_IGNORE: number;
          public static CONFLICT_REPLACE: number;
          public static CONFLICT_NONE: number;
          public static SQLITE_MAX_LIKE_PATTERN_LENGTH: number;
          public static OPEN_READWRITE: number;
          public static OPEN_READONLY: number;
          public static NO_LOCALIZED_COLLATORS: number;
          public static CREATE_IF_NECESSARY: number;
          public static ENABLE_WRITE_AHEAD_LOGGING: number;
          public static MAX_SQL_CACHE_SIZE: number;
          public rawQuery(param0: string, param1: androidNative.Array<string>): globalAndroid.database.Cursor;
          public beginTransactionWithListenerNonExclusive(param0: net.zetetic.database.sqlcipher.SQLiteTransactionListener): void;
          public static hasCodec(): boolean;
          public finalize(): void;
          public query(param0: androidx.sqlite.db.SupportSQLiteQuery): globalAndroid.database.Cursor;
          public rawExecSQL(param0: string, param1: androidNative.Array<any>): void;
          public static create(param0: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory): net.zetetic.database.sqlcipher.SQLiteDatabase;
          public insertOrThrow(param0: string, param1: string, param2: globalAndroid.content.ContentValues): number;
          public beginTransactionNonExclusive(): void;
          public static openOrCreateDatabase(param0: string, param1: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory): net.zetetic.database.sqlcipher.SQLiteDatabase;
          public isDatabaseIntegrityOk(): boolean;
          public replaceOrThrow(param0: string, param1: string, param2: globalAndroid.content.ContentValues): number;
          public changePassword(param0: string): void;
          public query(param0: string, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string, param5: string, param6: string, param7: string): globalAndroid.database.Cursor;
          public insert(param0: string, param1: string, param2: globalAndroid.content.ContentValues): number;
          public beginTransactionWithListener(param0: globalAndroid.database.sqlite.SQLiteTransactionListener): void;
          /** @deprecated */
          public markTableSyncable(param0: string, param1: string): void;
          public getVersion(): number;
          public rawQuery(param0: string, param1: androidNative.Array<any>): globalAndroid.database.Cursor;
          public setVersion(param0: number): void;
          public insert(param0: string, param1: number, param2: globalAndroid.content.ContentValues): number;
          public changePassword(param0: androidNative.Array<number>): void;
          public static openOrCreateDatabase(param0: string, param1: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param2: net.zetetic.database.DatabaseErrorHandler): net.zetetic.database.sqlcipher.SQLiteDatabase;
          public setMaximumSize(param0: number): number;
          /** @deprecated */
          public isDbLockedByOtherThreads(): boolean;
          public isDbLockedByCurrentThread(): boolean;
          public setForeignKeyConstraintsEnabled(param0: boolean): void;
          public endTransaction(): void;
          public isOpen(): boolean;
          public static openDatabase(param0: string, param1: string, param2: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param3: number, param4: net.zetetic.database.sqlcipher.SQLiteDatabaseHook): net.zetetic.database.sqlcipher.SQLiteDatabase;
          public static openOrCreateDatabase(param0: java.io.File, param1: string, param2: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param3: net.zetetic.database.DatabaseErrorHandler): net.zetetic.database.sqlcipher.SQLiteDatabase;
          public needUpgrade(param0: number): boolean;
          public setPageSize(param0: number): void;
          public beginTransactionWithListenerNonExclusive(param0: globalAndroid.database.sqlite.SQLiteTransactionListener): void;
          public static openDatabase(param0: string, param1: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param2: number, param3: net.zetetic.database.DatabaseErrorHandler): net.zetetic.database.sqlcipher.SQLiteDatabase;
          public static openDatabase(param0: string, param1: string, param2: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param3: number, param4: net.zetetic.database.DatabaseErrorHandler, param5: net.zetetic.database.sqlcipher.SQLiteDatabaseHook): net.zetetic.database.sqlcipher.SQLiteDatabase;
          public query(param0: string): globalAndroid.database.Cursor;
          public rawQuery(param0: string, param1: androidNative.Array<string>, param2: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
          public replace(param0: string, param1: string, param2: globalAndroid.content.ContentValues): number;
          public updateWithOnConflict(param0: string, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>, param4: number): number;
          public delete(param0: string, param1: string, param2: androidNative.Array<string>): number;
          public execSQL(param0: string): void;
          public query(param0: string, param1: androidNative.Array<any>): globalAndroid.database.Cursor;
          public static deleteDatabase(param0: java.io.File): boolean;
          public update(param0: string, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>): number;
          public static openDatabase(param0: string, param1: androidNative.Array<number>, param2: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param3: number, param4: net.zetetic.database.sqlcipher.SQLiteDatabaseHook): net.zetetic.database.sqlcipher.SQLiteDatabase;
          public addCustomFunction(param0: string, param1: number, param2: net.zetetic.database.sqlcipher.SQLiteDatabase.CustomFunction): void;
          public static openOrCreateDatabase(param0: string, param1: string, param2: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param3: net.zetetic.database.DatabaseErrorHandler, param4: net.zetetic.database.sqlcipher.SQLiteDatabaseHook): net.zetetic.database.sqlcipher.SQLiteDatabase;
          public static openOrCreateDatabase(param0: java.io.File, param1: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory): net.zetetic.database.sqlcipher.SQLiteDatabase;
          public isInMemoryDatabase(): boolean;
          public onAllReferencesReleased(): void;
          public query(param0: boolean, param1: string, param2: androidNative.Array<string>, param3: string, param4: androidNative.Array<string>, param5: string, param6: string, param7: string, param8: string, param9: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
          public setTransactionSuccessful(): void;
          /** @deprecated */
          public setLockingEnabled(param0: boolean): void;
          public rawQueryWithFactory(param0: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param1: string, param2: androidNative.Array<string>, param3: string): globalAndroid.database.Cursor;
          public static openDatabase(param0: string, param1: androidNative.Array<number>, param2: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param3: number, param4: net.zetetic.database.DatabaseErrorHandler, param5: net.zetetic.database.sqlcipher.SQLiteDatabaseHook): net.zetetic.database.sqlcipher.SQLiteDatabase;
          public static findEditTable(param0: string): string;
          public beginTransactionWithListener(param0: net.zetetic.database.sqlcipher.SQLiteTransactionListener): void;
          public query(param0: boolean, param1: string, param2: androidNative.Array<string>, param3: string, param4: androidNative.Array<string>, param5: string, param6: string, param7: string, param8: string): globalAndroid.database.Cursor;
          public static openOrCreateDatabase(param0: java.io.File, param1: string, param2: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param3: net.zetetic.database.DatabaseErrorHandler, param4: net.zetetic.database.sqlcipher.SQLiteDatabaseHook): net.zetetic.database.sqlcipher.SQLiteDatabase;
          public static openOrCreateDatabase(param0: java.io.File, param1: androidNative.Array<number>, param2: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param3: net.zetetic.database.DatabaseErrorHandler): net.zetetic.database.sqlcipher.SQLiteDatabase;
          public static openDatabase(param0: string, param1: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param2: number): net.zetetic.database.sqlcipher.SQLiteDatabase;
          public static openOrCreateDatabase(param0: java.io.File, param1: androidNative.Array<number>, param2: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param3: net.zetetic.database.DatabaseErrorHandler, param4: net.zetetic.database.sqlcipher.SQLiteDatabaseHook): net.zetetic.database.sqlcipher.SQLiteDatabase;
          public setMaxSqlCacheSize(param0: number): void;
          public queryWithFactory(param0: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param1: boolean, param2: string, param3: androidNative.Array<string>, param4: string, param5: androidNative.Array<string>, param6: string, param7: string, param8: string, param9: string): globalAndroid.database.Cursor;
          public compileStatement(param0: string): net.zetetic.database.sqlcipher.SQLiteStatement;
          public execSQL(param0: string, param1: androidNative.Array<any>): void;
          public static releaseMemory(): number;
          public getAttachedDbs(): java.util.List<globalAndroid.util.Pair<string, string>>;
          public getPageSize(): number;
          public query(param0: string, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string, param5: string, param6: string): globalAndroid.database.Cursor;
          public isReadOnly(): boolean;
          public static openOrCreateDatabase(param0: string, param1: string, param2: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param3: net.zetetic.database.DatabaseErrorHandler): net.zetetic.database.sqlcipher.SQLiteDatabase;
          public inTransaction(): boolean;
          /** @deprecated */
          public yieldIfContended(): boolean;
          public yieldIfContendedSafely(param0: number): boolean;
          public isWriteAheadLoggingEnabled(): boolean;
          /** @deprecated */
          public markTableSyncable(param0: string, param1: string, param2: string): void;
          public toString(): string;
          public disableWriteAheadLogging(): void;
          public reopenReadWrite(): void;
          public static openOrCreateDatabase(param0: string, param1: androidNative.Array<number>, param2: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param3: net.zetetic.database.DatabaseErrorHandler): net.zetetic.database.sqlcipher.SQLiteDatabase;
          public insertWithOnConflict(param0: string, param1: string, param2: globalAndroid.content.ContentValues, param3: number): number;
          public enableWriteAheadLogging(): boolean;
          public getMaximumSize(): number;
          public beginTransaction(): void;
          public update(param0: string, param1: number, param2: globalAndroid.content.ContentValues, param3: string, param4: androidNative.Array<any>): number;
          public query(param0: androidx.sqlite.db.SupportSQLiteQuery, param1: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
          public setLocale(param0: java.util.Locale): void;
          public getPath(): string;
          public yieldIfContendedSafely(): boolean;
          public validateSql(param0: string, param1: globalAndroid.os.CancellationSignal): void;
          public static openOrCreateDatabase(param0: string, param1: androidNative.Array<number>, param2: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param3: net.zetetic.database.DatabaseErrorHandler, param4: net.zetetic.database.sqlcipher.SQLiteDatabaseHook): net.zetetic.database.sqlcipher.SQLiteDatabase;
          public rawQueryWithFactory(param0: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param1: string, param2: androidNative.Array<string>, param3: string, param4: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
          /** @deprecated */
          public getSyncedTables(): java.util.Map<string, string>;
          public enableLocalizedCollators(): void;
          public delete(param0: string, param1: string, param2: androidNative.Array<any>): number;
          public queryWithFactory(param0: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param1: boolean, param2: string, param3: androidNative.Array<string>, param4: string, param5: androidNative.Array<string>, param6: string, param7: string, param8: string, param9: string, param10: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
        }
        export module SQLiteDatabase {
          export class CursorFactory {
            public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory>;
            /**
             * Constructs a new instance of the net.zetetic.database.sqlcipher.SQLiteDatabase$CursorFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { newCursor(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: net.zetetic.database.sqlcipher.SQLiteCursorDriver, param2: string, param3: net.zetetic.database.sqlcipher.SQLiteQuery): globalAndroid.database.Cursor });
            public constructor();
            public newCursor(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: net.zetetic.database.sqlcipher.SQLiteCursorDriver, param2: string, param3: net.zetetic.database.sqlcipher.SQLiteQuery): globalAndroid.database.Cursor;
          }
          export class CustomFunction {
            public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteDatabase.CustomFunction>;
            /**
             * Constructs a new instance of the net.zetetic.database.sqlcipher.SQLiteDatabase$CustomFunction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { callback(param0: androidNative.Array<string>): void });
            public constructor();
            public callback(param0: androidNative.Array<string>): void;
          }
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class SQLiteDatabaseConfiguration {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteDatabaseConfiguration>;
          public static MEMORY_DB_PATH: string;
          public path: string;
          public label: string;
          public openFlags: number;
          public maxSqlCacheSize: number;
          public locale: java.util.Locale;
          public foreignKeyConstraintsEnabled: boolean;
          public password: androidNative.Array<number>;
          public databaseHook: net.zetetic.database.sqlcipher.SQLiteDatabaseHook;
          public customFunctions: java.util.ArrayList<net.zetetic.database.sqlcipher.SQLiteCustomFunction>;
          public constructor(param0: string, param1: number, param2: androidNative.Array<number>, param3: net.zetetic.database.sqlcipher.SQLiteDatabaseHook);
          public constructor(param0: string, param1: number);
          public constructor(param0: net.zetetic.database.sqlcipher.SQLiteDatabaseConfiguration);
          public isInMemoryDb(): boolean;
          public updateParametersFrom(param0: net.zetetic.database.sqlcipher.SQLiteDatabaseConfiguration): void;
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class SQLiteDatabaseHook {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteDatabaseHook>;
          /**
           * Constructs a new instance of the net.zetetic.database.sqlcipher.SQLiteDatabaseHook interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { preKey(param0: net.zetetic.database.sqlcipher.SQLiteConnection): void; postKey(param0: net.zetetic.database.sqlcipher.SQLiteConnection): void });
          public constructor();
          public preKey(param0: net.zetetic.database.sqlcipher.SQLiteConnection): void;
          public postKey(param0: net.zetetic.database.sqlcipher.SQLiteConnection): void;
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class SQLiteDebug {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteDebug>;
          public static DEBUG_SQL_LOG: boolean;
          public static DEBUG_SQL_STATEMENTS: boolean;
          public static DEBUG_SQL_TIME: boolean;
          public static DEBUG_LOG_SLOW_QUERIES: boolean;
          public static dump(param0: globalAndroid.util.Printer, param1: androidNative.Array<string>): void;
          public static shouldLogSlowQuery(param0: number): boolean;
          public static getDatabaseInfo(): net.zetetic.database.sqlcipher.SQLiteDebug.PagerStats;
        }
        export module SQLiteDebug {
          export class DbStats {
            public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteDebug.DbStats>;
            public dbName: string;
            public pageSize: number;
            public dbSize: number;
            public lookaside: number;
            public cache: string;
            public constructor(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
          }
          export class PagerStats {
            public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteDebug.PagerStats>;
            public memoryUsed: number;
            public pageCacheOverflow: number;
            public largestMemAlloc: number;
            public dbStats: java.util.ArrayList<net.zetetic.database.sqlcipher.SQLiteDebug.DbStats>;
            public constructor();
          }
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class SQLiteDirectCursorDriver extends net.zetetic.database.sqlcipher.SQLiteCursorDriver {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteDirectCursorDriver>;
          public toString(): string;
          public constructor(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: string, param2: string, param3: globalAndroid.os.CancellationSignal);
          public cursorClosed(): void;
          public setBindArguments(param0: androidNative.Array<string>): void;
          public query(param0: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param1: androidNative.Array<string>): globalAndroid.database.Cursor;
          public cursorDeactivated(): void;
          public cursorRequeried(param0: globalAndroid.database.Cursor): void;
          public query(param0: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param1: androidNative.Array<any>): globalAndroid.database.Cursor;
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class SQLiteGlobal {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteGlobal>;
          public static getJournalSizeLimit(): number;
          public static getDefaultJournalMode(): string;
          public static releaseMemory(): number;
          public static getDefaultSyncMode(): string;
          public static getWALConnectionPoolSize(): number;
          public static getWALSyncMode(): string;
          public static getWALAutoCheckpoint(): number;
          public static getDefaultPageSize(): number;
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export abstract class SQLiteOpenHelper {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteOpenHelper>;
          public getWritableDatabase(): net.zetetic.database.sqlcipher.SQLiteDatabase;
          public constructor(param0: globalAndroid.content.Context, param1: string, param2: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param3: number, param4: number, param5: net.zetetic.database.DatabaseErrorHandler);
          public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param4: number, param5: number, param6: net.zetetic.database.DatabaseErrorHandler, param7: net.zetetic.database.sqlcipher.SQLiteDatabaseHook, param8: boolean);
          public getReadableDatabase(): net.zetetic.database.sqlcipher.SQLiteDatabase;
          public constructor(param0: globalAndroid.content.Context, param1: string, param2: androidNative.Array<number>, param3: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param4: number, param5: number, param6: net.zetetic.database.DatabaseErrorHandler, param7: net.zetetic.database.sqlcipher.SQLiteDatabaseHook, param8: boolean);
          public onConfigure(param0: net.zetetic.database.sqlcipher.SQLiteDatabase): void;
          public onOpen(param0: net.zetetic.database.sqlcipher.SQLiteDatabase): void;
          public constructor(param0: globalAndroid.content.Context, param1: string, param2: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param3: number, param4: net.zetetic.database.DatabaseErrorHandler);
          public close(): void;
          public getDatabaseName(): string;
          public constructor(param0: globalAndroid.content.Context, param1: string, param2: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory, param3: number);
          public onBeforeDelete(param0: net.zetetic.database.sqlcipher.SQLiteDatabase): void;
          public onDowngrade(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: number, param2: number): void;
          public setWriteAheadLoggingEnabled(param0: boolean): void;
          public onCreate(param0: net.zetetic.database.sqlcipher.SQLiteDatabase): void;
          public onUpgrade(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: number, param2: number): void;
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export abstract class SQLiteProgram extends net.zetetic.database.sqlcipher.SQLiteClosable {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteProgram>;
          public onCorruption(): void;
          public bindNull(param0: number): void;
          /** @deprecated */
          public getUniqueId(): number;
          public bindLong(param0: number, param1: number): void;
          public getSession(): net.zetetic.database.sqlcipher.SQLiteSession;
          public getConnectionFlags(): number;
          public bindAllArgsAsStrings(param0: androidNative.Array<string>): void;
          public bindAllArgs(param0: androidNative.Array<any>): void;
          public onAllReferencesReleased(): void;
          public bindDouble(param0: number, param1: number): void;
          public bindBlob(param0: number, param1: androidNative.Array<number>): void;
          public bindString(param0: number, param1: string): void;
          public clearBindings(): void;
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class SQLiteQuery extends net.zetetic.database.sqlcipher.SQLiteProgram {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteQuery>;
          public toString(): string;
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class SQLiteQueryBuilder {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteQueryBuilder>;
          public getTables(): string;
          public static buildQueryString(param0: boolean, param1: string, param2: androidNative.Array<string>, param3: string, param4: string, param5: string, param6: string, param7: string): string;
          public appendWhereEscapeString(param0: string): void;
          public buildQuery(param0: androidNative.Array<string>, param1: string, param2: string, param3: string, param4: string, param5: string): string;
          public setDistinct(param0: boolean): void;
          public setTables(param0: string): void;
          public query(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string, param5: string, param6: string, param7: string, param8: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
          public query(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string, param5: string, param6: string): globalAndroid.database.Cursor;
          public query(param0: net.zetetic.database.sqlcipher.SQLiteDatabase, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string, param5: string, param6: string, param7: string): globalAndroid.database.Cursor;
          /** @deprecated */
          public buildUnionSubQuery(param0: string, param1: androidNative.Array<string>, param2: java.util.Set<string>, param3: number, param4: string, param5: string, param6: androidNative.Array<string>, param7: string, param8: string): string;
          public buildUnionQuery(param0: androidNative.Array<string>, param1: string, param2: string): string;
          public static appendColumns(param0: java.lang.StringBuilder, param1: androidNative.Array<string>): void;
          public setProjectionMap(param0: java.util.Map<string, string>): void;
          public setCursorFactory(param0: net.zetetic.database.sqlcipher.SQLiteDatabase.CursorFactory): void;
          public constructor();
          public appendWhere(param0: string): void;
          /** @deprecated */
          public buildQuery(param0: androidNative.Array<string>, param1: string, param2: androidNative.Array<string>, param3: string, param4: string, param5: string, param6: string): string;
          public setStrict(param0: boolean): void;
          public buildUnionSubQuery(param0: string, param1: androidNative.Array<string>, param2: java.util.Set<string>, param3: number, param4: string, param5: string, param6: string, param7: string): string;
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class SQLiteSession {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteSession>;
          public static TRANSACTION_MODE_DEFERRED: number;
          public static TRANSACTION_MODE_IMMEDIATE: number;
          public static TRANSACTION_MODE_EXCLUSIVE: number;
          public prepare(param0: string, param1: number, param2: globalAndroid.os.CancellationSignal, param3: net.zetetic.database.sqlcipher.SQLiteStatementInfo): void;
          public executeForBlobFileDescriptor(param0: string, param1: androidNative.Array<any>, param2: number, param3: globalAndroid.os.CancellationSignal): globalAndroid.os.ParcelFileDescriptor;
          public executeForString(param0: string, param1: androidNative.Array<any>, param2: number, param3: globalAndroid.os.CancellationSignal): string;
          public hasConnection(): boolean;
          public executeForLong(param0: string, param1: androidNative.Array<any>, param2: number, param3: globalAndroid.os.CancellationSignal): number;
          public constructor(param0: net.zetetic.database.sqlcipher.SQLiteConnectionPool);
          public beginTransaction(param0: number, param1: net.zetetic.database.sqlcipher.SQLiteTransactionListener, param2: number, param3: globalAndroid.os.CancellationSignal): void;
          public hasNestedTransaction(): boolean;
          public executeForLastInsertedRowId(param0: string, param1: androidNative.Array<any>, param2: number, param3: globalAndroid.os.CancellationSignal): number;
          public endTransaction(param0: globalAndroid.os.CancellationSignal): void;
          public executeRaw(param0: string, param1: androidNative.Array<any>, param2: number, param3: globalAndroid.os.CancellationSignal): void;
          public execute(param0: string, param1: androidNative.Array<any>, param2: number, param3: globalAndroid.os.CancellationSignal): void;
          public yieldTransaction(param0: number, param1: boolean, param2: globalAndroid.os.CancellationSignal): boolean;
          public executeForCursorWindow(param0: string, param1: androidNative.Array<any>, param2: globalAndroid.database.CursorWindow, param3: number, param4: number, param5: boolean, param6: number, param7: globalAndroid.os.CancellationSignal): number;
          public hasTransaction(): boolean;
          public setTransactionSuccessful(): void;
          public executeForChangedRowCount(param0: string, param1: androidNative.Array<any>, param2: number, param3: globalAndroid.os.CancellationSignal): number;
        }
        export module SQLiteSession {
          export class Transaction {
            public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteSession.Transaction>;
            public mParent: net.zetetic.database.sqlcipher.SQLiteSession.Transaction;
            public mMode: number;
            public mListener: net.zetetic.database.sqlcipher.SQLiteTransactionListener;
            public mMarkedSuccessful: boolean;
            public mChildFailed: boolean;
          }
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class SQLiteStatement extends net.zetetic.database.sqlcipher.SQLiteProgram {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteStatement>;
          public toString(): string;
          public executeInsert(): number;
          public execute(): void;
          public simpleQueryForString(): string;
          public executeRaw(): void;
          public simpleQueryForLong(): number;
          public simpleQueryForBlobFileDescriptor(): globalAndroid.os.ParcelFileDescriptor;
          public executeUpdateDelete(): number;
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class SQLiteStatementInfo {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteStatementInfo>;
          public numParameters: number;
          public columnNames: androidNative.Array<string>;
          public readOnly: boolean;
          public constructor();
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class SQLiteTransactionListener {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SQLiteTransactionListener>;
          /**
           * Constructs a new instance of the net.zetetic.database.sqlcipher.SQLiteTransactionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onBegin(): void; onCommit(): void; onRollback(): void });
          public constructor();
          public onRollback(): void;
          public onBegin(): void;
          public onCommit(): void;
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class SupportHelper {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SupportHelper>;
          public constructor(param0: androidx.sqlite.db.SupportSQLiteOpenHelper.Configuration, param1: androidNative.Array<number>, param2: net.zetetic.database.sqlcipher.SQLiteDatabaseHook, param3: boolean);
          public close(): void;
          public getDatabaseName(): string;
          public constructor(param0: androidx.sqlite.db.SupportSQLiteOpenHelper.Configuration, param1: androidNative.Array<number>, param2: net.zetetic.database.sqlcipher.SQLiteDatabaseHook, param3: boolean, param4: number);
          public getReadableDatabase(): androidx.sqlite.db.SupportSQLiteDatabase;
          public setWriteAheadLoggingEnabled(param0: boolean): void;
          public getWritableDatabase(): androidx.sqlite.db.SupportSQLiteDatabase;
        }
      }
    }
  }
}

declare module net {
  export module zetetic {
    export module database {
      export module sqlcipher {
        export class SupportOpenHelperFactory {
          public static class: java.lang.Class<net.zetetic.database.sqlcipher.SupportOpenHelperFactory>;
          public constructor(param0: androidNative.Array<number>, param1: net.zetetic.database.sqlcipher.SQLiteDatabaseHook, param2: boolean, param3: number);
          public create(param0: androidx.sqlite.db.SupportSQLiteOpenHelper.Configuration): androidx.sqlite.db.SupportSQLiteOpenHelper;
          public constructor(param0: androidNative.Array<number>);
          public constructor(param0: androidNative.Array<number>, param1: net.zetetic.database.sqlcipher.SQLiteDatabaseHook, param2: boolean);
        }
      }
    }
  }
}

//Generics information:
