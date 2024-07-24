//
//  Sqlite3Controller.swift
//  Sqlite3Cipher
//
//  Created by Maria Castillo on 17/7/24.
//

import Foundation
import SQLCipher

@objcMembers
@objc(Sqlite3Controller)
public class Sqlite3Controller : NSObject {    
    public func cipherDb(sqlite:OpaquePointer?,password:String)-> OpaquePointer?{
        let keyResult = sqlite3_key(sqlite, password, Int32(password.count))
        if keyResult != SQLITE_OK {
            // If setting the key failed, print the error, close the database and return nil
            let errorMessage = String(cString: sqlite3_errmsg(sqlite))
            print("Failed to set encryption key: \(errorMessage)")
            sqlite3_close(sqlite)
            return nil
        }
        // Successfully opened and encrypted the database
        return sqlite
    }
    
//    public func create(dbName: String, password: String) -> OpaquePointer? {
//        if let dbPath = getDatabasePath(dbName: dbName) {
//            SQLITE_INTEGER
//            // Try to open the database
//            let openResult = sqlite3_open_v2(dbPath, &self.sqlite, SQLITE_OPEN_READWRITE | SQLITE_OPEN_CREATE, nil)
//            
//            if openResult != SQLITE_OK {
//                // If opening the database failed, print the error and return nil
//                let errorMessage = String(cString: sqlite3_errmsg(self.sqlite))
//                print("Failed to open database: \(errorMessage)")
//                return nil
//            }
//            
//            // Try to set the encryption key
//            let keyResult = sqlite3_key(self.sqlite, password, Int32(password.count))
//            if keyResult != SQLITE_OK {
//                // If setting the key failed, print the error, close the database and return nil
//                let errorMessage = String(cString: sqlite3_errmsg(self.sqlite))
//                print("Failed to set encryption key: \(errorMessage)")
//                sqlite3_close(self.sqlite)
//                return nil
//            }
//            // Successfully opened and encrypted the database
//            return self.sqlite
//        } else {
//            // If getting the database path failed, print an error and return nil
//            print("Failed to obtain database path")
//            return nil
//        }
//    }
//    
//    private func getDatabasePath(dbName:String) -> String? {
//        let fileManager = FileManager.default
//        do {
//            let documentDirectory = try fileManager.url(for: .documentDirectory, in: .userDomainMask, appropriateFor: nil, create: false)
//            let databaseURL = documentDirectory.appendingPathComponent(dbName)
//            return databaseURL.path
//        } catch {
//            print("Error obtaining database path: \(error)")
//            return nil
//        }
//    }
}
