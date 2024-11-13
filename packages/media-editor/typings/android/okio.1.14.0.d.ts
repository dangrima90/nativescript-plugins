declare module okio {
  export class AsyncTimeout extends okio.Timeout {
    public static class: java.lang.Class<okio.AsyncTimeout>;
    public constructor();
    public enter(): void;
    public sink(param0: okio.Sink): okio.Sink;
    public timedOut(): void;
    public newTimeoutException(param0: java.io.IOException): java.io.IOException;
    public source(param0: okio.Source): okio.Source;
    public exit(): boolean;
  }
  export module AsyncTimeout {
    export class Watchdog {
      public static class: java.lang.Class<okio.AsyncTimeout.Watchdog>;
      public run(): void;
    }
  }
}

declare module okio {
  export class Base64 {
    public static class: java.lang.Class<okio.Base64>;
    public static decode(param0: string): androidNative.Array<number>;
    public static encodeUrl(param0: androidNative.Array<number>): string;
    public static encode(param0: androidNative.Array<number>): string;
  }
}

declare module okio {
  export class Buffer implements okio.BufferedSource, okio.BufferedSink {
    public static class: java.lang.Class<okio.Buffer>;
    public readIntLe(): number;
    public writeUtf8(param0: string): okio.Buffer;
    public writeDecimalLong(param0: number): okio.Buffer;
    public readFrom(param0: java.io.InputStream, param1: number): okio.Buffer;
    public writeUtf8(param0: string, param1: number, param2: number): okio.Buffer;
    public readUtf8(param0: number): string;
    public copyTo(param0: java.io.OutputStream): okio.Buffer;
    public writeUtf8CodePoint(param0: number): okio.BufferedSink;
    public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
    public indexOf(param0: number): number;
    public readByte(): number;
    public emitCompleteSegments(): okio.BufferedSink;
    public readLong(): number;
    public read(param0: okio.Buffer, param1: number): number;
    public writeIntLe(param0: number): okio.BufferedSink;
    public write(param0: androidNative.Array<number>, param1: number, param2: number): okio.Buffer;
    public copyTo(param0: okio.Buffer, param1: number, param2: number): okio.Buffer;
    public indexOfElement(param0: okio.ByteString): number;
    public write(param0: java.nio.ByteBuffer): number;
    public readAll(param0: okio.Sink): number;
    public sha1(): okio.ByteString;
    public write(param0: okio.ByteString): okio.BufferedSink;
    public select(param0: okio.Options): number;
    public readFrom(param0: java.io.InputStream): okio.Buffer;
    public writeTo(param0: java.io.OutputStream): okio.Buffer;
    public outputStream(): java.io.OutputStream;
    public clear(): void;
    public require(param0: number): void;
    public request(param0: number): boolean;
    public indexOf(param0: okio.ByteString, param1: number): number;
    public readString(param0: java.nio.charset.Charset): string;
    public writeLongLe(param0: number): okio.Buffer;
    public writeLong(param0: number): okio.BufferedSink;
    public writeString(param0: string, param1: java.nio.charset.Charset): okio.Buffer;
    public writeByte(param0: number): okio.BufferedSink;
    public readUtf8LineStrict(): string;
    public writeUtf8CodePoint(param0: number): okio.Buffer;
    public writeInt(param0: number): okio.BufferedSink;
    public hmacSha512(param0: okio.ByteString): okio.ByteString;
    public readByteArray(param0: number): androidNative.Array<number>;
    public sha512(): okio.ByteString;
    public writeShort(param0: number): okio.BufferedSink;
    public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
    public skip(param0: number): void;
    public getByte(param0: number): number;
    public readInt(): number;
    public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.Buffer;
    public write(param0: androidNative.Array<number>): okio.BufferedSink;
    public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
    public copyTo(param0: java.io.OutputStream, param1: number, param2: number): okio.Buffer;
    public writeTo(param0: java.io.OutputStream, param1: number): okio.Buffer;
    public writeAll(param0: okio.Source): number;
    public timeout(): okio.Timeout;
    public equals(param0: any): boolean;
    public close(): void;
    public writeDecimalLong(param0: number): okio.BufferedSink;
    public inputStream(): java.io.InputStream;
    public readUtf8LineStrict(param0: number): string;
    public write(param0: okio.ByteString): okio.Buffer;
    public readByteArray(): androidNative.Array<number>;
    public writeHexadecimalUnsignedLong(param0: number): okio.Buffer;
    public writeShortLe(param0: number): okio.BufferedSink;
    public writeUtf8(param0: string): okio.BufferedSink;
    public readUtf8CodePoint(): number;
    public read(param0: androidNative.Array<number>): number;
    public writeShortLe(param0: number): okio.Buffer;
    public readAndWriteUnsafe(): okio.Buffer.UnsafeCursor;
    public snapshot(param0: number): okio.ByteString;
    public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
    public readHexadecimalUnsignedLong(): number;
    public emit(): okio.BufferedSink;
    public writeInt(param0: number): okio.Buffer;
    public constructor();
    public readUnsafe(param0: okio.Buffer.UnsafeCursor): okio.Buffer.UnsafeCursor;
    public readUtf8(): string;
    public write(param0: okio.Buffer, param1: number): void;
    public readByteString(param0: number): okio.ByteString;
    public writeShort(param0: number): okio.Buffer;
    public readUnsafe(): okio.Buffer.UnsafeCursor;
    public completeSegmentByteCount(): number;
    public toString(): string;
    public md5(): okio.ByteString;
    public flush(): void;
    public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
    public writeLongLe(param0: number): okio.BufferedSink;
    public readAndWriteUnsafe(param0: okio.Buffer.UnsafeCursor): okio.Buffer.UnsafeCursor;
    public readShort(): number;
    public write(param0: androidNative.Array<number>): okio.Buffer;
    public readShortLe(): number;
    public readUtf8Line(): string;
    public readFully(param0: androidNative.Array<number>): void;
    public readByteString(): okio.ByteString;
    public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
    public writeIntLe(param0: number): okio.Buffer;
    public hmacSha1(param0: okio.ByteString): okio.ByteString;
    public size(): number;
    public write(param0: androidNative.Array<number>, param1: number, param2: number): okio.BufferedSink;
    public hashCode(): number;
    public indexOf(param0: number, param1: number, param2: number): number;
    public readString(param0: number, param1: java.nio.charset.Charset): string;
    public readLongLe(): number;
    public readFully(param0: okio.Buffer, param1: number): void;
    public snapshot(): okio.ByteString;
    public read(param0: java.nio.ByteBuffer): number;
    public clone(): okio.Buffer;
    public emitCompleteSegments(): okio.Buffer;
    public readDecimalLong(): number;
    public sha256(): okio.ByteString;
    public writeByte(param0: number): okio.Buffer;
    public rangeEquals(param0: number, param1: okio.ByteString): boolean;
    public isOpen(): boolean;
    public writeLong(param0: number): okio.Buffer;
    public indexOfElement(param0: okio.ByteString, param1: number): number;
    public exhausted(): boolean;
    public write(param0: okio.Source, param1: number): okio.BufferedSink;
    public buffer(): okio.Buffer;
    public hmacSha256(param0: okio.ByteString): okio.ByteString;
    public indexOf(param0: number, param1: number): number;
    public indexOf(param0: okio.ByteString): number;
  }
  export module Buffer {
    export class UnsafeCursor {
      public static class: java.lang.Class<okio.Buffer.UnsafeCursor>;
      public buffer: okio.Buffer;
      public readWrite: boolean;
      public offset: number;
      public data: androidNative.Array<number>;
      public start: number;
      public end: number;
      public next(): number;
      public seek(param0: number): number;
      public resizeBuffer(param0: number): number;
      public constructor();
      public expandBuffer(param0: number): number;
      public close(): void;
    }
  }
}

declare module okio {
  export class BufferedSink extends okio.Sink {
    public static class: java.lang.Class<okio.BufferedSink>;
    /**
     * Constructs a new instance of the okio.BufferedSink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
     */
    public constructor(implementation: {
      buffer(): okio.Buffer;
      write(param0: okio.ByteString): okio.BufferedSink;
      write(param0: androidNative.Array<number>): okio.BufferedSink;
      write(param0: androidNative.Array<number>, param1: number, param2: number): okio.BufferedSink;
      writeAll(param0: okio.Source): number;
      write(param0: okio.Source, param1: number): okio.BufferedSink;
      writeUtf8(param0: string): okio.BufferedSink;
      writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
      writeUtf8CodePoint(param0: number): okio.BufferedSink;
      writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
      writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
      writeByte(param0: number): okio.BufferedSink;
      writeShort(param0: number): okio.BufferedSink;
      writeShortLe(param0: number): okio.BufferedSink;
      writeInt(param0: number): okio.BufferedSink;
      writeIntLe(param0: number): okio.BufferedSink;
      writeLong(param0: number): okio.BufferedSink;
      writeLongLe(param0: number): okio.BufferedSink;
      writeDecimalLong(param0: number): okio.BufferedSink;
      writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
      flush(): void;
      emit(): okio.BufferedSink;
      emitCompleteSegments(): okio.BufferedSink;
      outputStream(): java.io.OutputStream;
      write(param0: okio.Buffer, param1: number): void;
      flush(): void;
      timeout(): okio.Timeout;
      close(): void;
    });
    public constructor();
    public writeDecimalLong(param0: number): okio.BufferedSink;
    public close(): void;
    public writeByte(param0: number): okio.BufferedSink;
    public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
    public writeShortLe(param0: number): okio.BufferedSink;
    public writeInt(param0: number): okio.BufferedSink;
    public writeUtf8CodePoint(param0: number): okio.BufferedSink;
    public writeUtf8(param0: string): okio.BufferedSink;
    public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
    public writeShort(param0: number): okio.BufferedSink;
    public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
    public write(param0: androidNative.Array<number>, param1: number, param2: number): okio.BufferedSink;
    public emitCompleteSegments(): okio.BufferedSink;
    public emit(): okio.BufferedSink;
    public writeIntLe(param0: number): okio.BufferedSink;
    public write(param0: okio.Buffer, param1: number): void;
    public flush(): void;
    public write(param0: okio.ByteString): okio.BufferedSink;
    public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
    public writeLongLe(param0: number): okio.BufferedSink;
    public write(param0: okio.Source, param1: number): okio.BufferedSink;
    public buffer(): okio.Buffer;
    public write(param0: androidNative.Array<number>): okio.BufferedSink;
    public outputStream(): java.io.OutputStream;
    public writeAll(param0: okio.Source): number;
    public writeLong(param0: number): okio.BufferedSink;
    public timeout(): okio.Timeout;
  }
}

declare module okio {
  export class BufferedSource extends okio.Source {
    public static class: java.lang.Class<okio.BufferedSource>;
    /**
     * Constructs a new instance of the okio.BufferedSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
     */
    public constructor(implementation: {
      buffer(): okio.Buffer;
      exhausted(): boolean;
      require(param0: number): void;
      request(param0: number): boolean;
      readByte(): number;
      readShort(): number;
      readShortLe(): number;
      readInt(): number;
      readIntLe(): number;
      readLong(): number;
      readLongLe(): number;
      readDecimalLong(): number;
      readHexadecimalUnsignedLong(): number;
      skip(param0: number): void;
      readByteString(): okio.ByteString;
      readByteString(param0: number): okio.ByteString;
      select(param0: okio.Options): number;
      readByteArray(): androidNative.Array<number>;
      readByteArray(param0: number): androidNative.Array<number>;
      read(param0: androidNative.Array<number>): number;
      readFully(param0: androidNative.Array<number>): void;
      read(param0: androidNative.Array<number>, param1: number, param2: number): number;
      readFully(param0: okio.Buffer, param1: number): void;
      readAll(param0: okio.Sink): number;
      readUtf8(): string;
      readUtf8(param0: number): string;
      readUtf8Line(): string;
      readUtf8LineStrict(): string;
      readUtf8LineStrict(param0: number): string;
      readUtf8CodePoint(): number;
      readString(param0: java.nio.charset.Charset): string;
      readString(param0: number, param1: java.nio.charset.Charset): string;
      indexOf(param0: number): number;
      indexOf(param0: number, param1: number): number;
      indexOf(param0: number, param1: number, param2: number): number;
      indexOf(param0: okio.ByteString): number;
      indexOf(param0: okio.ByteString, param1: number): number;
      indexOfElement(param0: okio.ByteString): number;
      indexOfElement(param0: okio.ByteString, param1: number): number;
      rangeEquals(param0: number, param1: okio.ByteString): boolean;
      rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
      inputStream(): java.io.InputStream;
      read(param0: okio.Buffer, param1: number): number;
      timeout(): okio.Timeout;
      close(): void;
    });
    public constructor();
    public readFully(param0: androidNative.Array<number>): void;
    public close(): void;
    public inputStream(): java.io.InputStream;
    public readIntLe(): number;
    public readByteString(): okio.ByteString;
    public readUtf8LineStrict(): string;
    public readUtf8LineStrict(param0: number): string;
    public readByteArray(): androidNative.Array<number>;
    public readUtf8(param0: number): string;
    public readByteArray(param0: number): androidNative.Array<number>;
    public read(param0: androidNative.Array<number>): number;
    public readUtf8CodePoint(): number;
    public indexOf(param0: number): number;
    public readByte(): number;
    public readHexadecimalUnsignedLong(): number;
    public indexOf(param0: number, param1: number, param2: number): number;
    public readString(param0: number, param1: java.nio.charset.Charset): string;
    public readLongLe(): number;
    public readFully(param0: okio.Buffer, param1: number): void;
    public readLong(): number;
    public read(param0: okio.Buffer, param1: number): number;
    public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
    public readUtf8(): string;
    public readByteString(param0: number): okio.ByteString;
    public indexOfElement(param0: okio.ByteString): number;
    public skip(param0: number): void;
    public readDecimalLong(): number;
    public readAll(param0: okio.Sink): number;
    public readInt(): number;
    public rangeEquals(param0: number, param1: okio.ByteString): boolean;
    public indexOfElement(param0: okio.ByteString, param1: number): number;
    public select(param0: okio.Options): number;
    public exhausted(): boolean;
    public readShort(): number;
    public buffer(): okio.Buffer;
    public require(param0: number): void;
    public request(param0: number): boolean;
    public indexOf(param0: okio.ByteString, param1: number): number;
    public readString(param0: java.nio.charset.Charset): string;
    public readShortLe(): number;
    public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
    public indexOf(param0: number, param1: number): number;
    public readUtf8Line(): string;
    public indexOf(param0: okio.ByteString): number;
    public timeout(): okio.Timeout;
  }
}

declare module okio {
  export class ByteString extends java.lang.Object {
    public static class: java.lang.Class<okio.ByteString>;
    public static EMPTY: okio.ByteString;
    public base64(): string;
    public static encodeString(param0: string, param1: java.nio.charset.Charset): okio.ByteString;
    public substring(param0: number): okio.ByteString;
    public equals(param0: any): boolean;
    public rangeEquals(param0: number, param1: androidNative.Array<number>, param2: number, param3: number): boolean;
    public hmacSha512(param0: okio.ByteString): okio.ByteString;
    public base64Url(): string;
    public hmacSha1(param0: okio.ByteString): okio.ByteString;
    public static read(param0: java.io.InputStream, param1: number): okio.ByteString;
    public asByteBuffer(): java.nio.ByteBuffer;
    public sha512(): okio.ByteString;
    public size(): number;
    public hex(): string;
    public hashCode(): number;
    public toAsciiUppercase(): okio.ByteString;
    public static decodeBase64(param0: string): okio.ByteString;
    public lastIndexOf(param0: androidNative.Array<number>): number;
    public lastIndexOf(param0: okio.ByteString, param1: number): number;
    public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
    public static of(param0: androidNative.Array<number>, param1: number, param2: number): okio.ByteString;
    public lastIndexOf(param0: okio.ByteString): number;
    public static decodeHex(param0: string): okio.ByteString;
    public compareTo(param0: okio.ByteString): number;
    public toByteArray(): androidNative.Array<number>;
    public sha256(): okio.ByteString;
    public getByte(param0: number): number;
    public endsWith(param0: androidNative.Array<number>): boolean;
    public toString(): string;
    public indexOf(param0: androidNative.Array<number>): number;
    public static encodeUtf8(param0: string): okio.ByteString;
    public string(param0: java.nio.charset.Charset): string;
    public md5(): okio.ByteString;
    public startsWith(param0: okio.ByteString): boolean;
    public endsWith(param0: okio.ByteString): boolean;
    public lastIndexOf(param0: androidNative.Array<number>, param1: number): number;
    public toAsciiLowercase(): okio.ByteString;
    public static of(param0: java.nio.ByteBuffer): okio.ByteString;
    public sha1(): okio.ByteString;
    public write(param0: java.io.OutputStream): void;
    public indexOf(param0: androidNative.Array<number>, param1: number): number;
    public utf8(): string;
    public substring(param0: number, param1: number): okio.ByteString;
    public indexOf(param0: okio.ByteString, param1: number): number;
    public static of(param0: androidNative.Array<number>): okio.ByteString;
    public hmacSha256(param0: okio.ByteString): okio.ByteString;
    public startsWith(param0: androidNative.Array<number>): boolean;
    public indexOf(param0: okio.ByteString): number;
  }
}

declare module okio {
  export class DeflaterSink extends okio.Sink {
    public static class: java.lang.Class<okio.DeflaterSink>;
    public close(): void;
    public write(param0: okio.Buffer, param1: number): void;
    public constructor(param0: okio.Sink, param1: java.util.zip.Deflater);
    public toString(): string;
    public flush(): void;
    public timeout(): okio.Timeout;
  }
}

declare module okio {
  export abstract class ForwardingSink extends okio.Sink {
    public static class: java.lang.Class<okio.ForwardingSink>;
    public delegate(): okio.Sink;
    public close(): void;
    public constructor(param0: okio.Sink);
    public write(param0: okio.Buffer, param1: number): void;
    public toString(): string;
    public flush(): void;
    public timeout(): okio.Timeout;
  }
}

declare module okio {
  export abstract class ForwardingSource extends okio.Source {
    public static class: java.lang.Class<okio.ForwardingSource>;
    public close(): void;
    public constructor(param0: okio.Source);
    public delegate(): okio.Source;
    public toString(): string;
    public read(param0: okio.Buffer, param1: number): number;
    public timeout(): okio.Timeout;
  }
}

declare module okio {
  export class ForwardingTimeout extends okio.Timeout {
    public static class: java.lang.Class<okio.ForwardingTimeout>;
    public constructor();
    public throwIfReached(): void;
    public setDelegate(param0: okio.Timeout): okio.ForwardingTimeout;
    public clearDeadline(): okio.Timeout;
    public hasDeadline(): boolean;
    public delegate(): okio.Timeout;
    public timeout(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
    public timeoutNanos(): number;
    public deadlineNanoTime(): number;
    public deadlineNanoTime(param0: number): okio.Timeout;
    public constructor(param0: okio.Timeout);
    public clearTimeout(): okio.Timeout;
  }
}

declare module okio {
  export class GzipSink extends okio.Sink {
    public static class: java.lang.Class<okio.GzipSink>;
    public deflater(): java.util.zip.Deflater;
    public close(): void;
    public constructor(param0: okio.Sink);
    public write(param0: okio.Buffer, param1: number): void;
    public flush(): void;
    public timeout(): okio.Timeout;
  }
}

declare module okio {
  export class GzipSource extends okio.Source {
    public static class: java.lang.Class<okio.GzipSource>;
    public close(): void;
    public constructor(param0: okio.Source);
    public read(param0: okio.Buffer, param1: number): number;
    public timeout(): okio.Timeout;
  }
}

declare module okio {
  export class HashingSink extends okio.ForwardingSink {
    public static class: java.lang.Class<okio.HashingSink>;
    public close(): void;
    public static hmacSha256(param0: okio.Sink, param1: okio.ByteString): okio.HashingSink;
    public write(param0: okio.Buffer, param1: number): void;
    public static sha512(param0: okio.Sink): okio.HashingSink;
    public static hmacSha1(param0: okio.Sink, param1: okio.ByteString): okio.HashingSink;
    public static md5(param0: okio.Sink): okio.HashingSink;
    public static sha1(param0: okio.Sink): okio.HashingSink;
    public static hmacSha512(param0: okio.Sink, param1: okio.ByteString): okio.HashingSink;
    public hash(): okio.ByteString;
    public static sha256(param0: okio.Sink): okio.HashingSink;
    public flush(): void;
    public timeout(): okio.Timeout;
  }
}

declare module okio {
  export class HashingSource extends okio.ForwardingSource {
    public static class: java.lang.Class<okio.HashingSource>;
    public close(): void;
    public static hmacSha256(param0: okio.Source, param1: okio.ByteString): okio.HashingSource;
    public static sha1(param0: okio.Source): okio.HashingSource;
    public static md5(param0: okio.Source): okio.HashingSource;
    public static sha256(param0: okio.Source): okio.HashingSource;
    public static hmacSha1(param0: okio.Source, param1: okio.ByteString): okio.HashingSource;
    public hash(): okio.ByteString;
    public read(param0: okio.Buffer, param1: number): number;
    public timeout(): okio.Timeout;
  }
}

declare module okio {
  export class InflaterSource extends okio.Source {
    public static class: java.lang.Class<okio.InflaterSource>;
    public close(): void;
    public refill(): boolean;
    public constructor(param0: okio.Source, param1: java.util.zip.Inflater);
    public read(param0: okio.Buffer, param1: number): number;
    public timeout(): okio.Timeout;
  }
}

declare module okio {
  export class Okio {
    public static class: java.lang.Class<okio.Okio>;
    public static source(param0: java.nio.file.Path, param1: androidNative.Array<java.nio.file.OpenOption>): okio.Source;
    public static buffer(param0: okio.Source): okio.BufferedSource;
    public static source(param0: java.io.InputStream): okio.Source;
    public static appendingSink(param0: java.io.File): okio.Sink;
    public static sink(param0: java.io.OutputStream): okio.Sink;
    public static source(param0: java.io.File): okio.Source;
    public static sink(param0: java.io.File): okio.Sink;
    public static blackhole(): okio.Sink;
    public static source(param0: java.net.Socket): okio.Source;
    public static buffer(param0: okio.Sink): okio.BufferedSink;
    public static sink(param0: java.net.Socket): okio.Sink;
    public static sink(param0: java.nio.file.Path, param1: androidNative.Array<java.nio.file.OpenOption>): okio.Sink;
  }
}

declare module okio {
  export class Options extends java.util.AbstractList<okio.ByteString> implements java.util.RandomAccess {
    public static class: java.lang.Class<okio.Options>;
    public size(): number;
    public get(param0: number): okio.ByteString;
    public static of(param0: androidNative.Array<okio.ByteString>): okio.Options;
  }
}

declare module okio {
  export class Pipe {
    public static class: java.lang.Class<okio.Pipe>;
    public sink(): okio.Sink;
    public constructor(param0: number);
    public source(): okio.Source;
  }
  export module Pipe {
    export class PipeSink extends okio.Sink {
      public static class: java.lang.Class<okio.Pipe.PipeSink>;
      public write(param0: okio.Buffer, param1: number): void;
      public flush(): void;
      public timeout(): okio.Timeout;
      public close(): void;
    }
    export class PipeSource extends okio.Source {
      public static class: java.lang.Class<okio.Pipe.PipeSource>;
      public timeout(): okio.Timeout;
      public read(param0: okio.Buffer, param1: number): number;
      public close(): void;
    }
  }
}

declare module okio {
  export class RealBufferedSink extends okio.BufferedSink {
    public static class: java.lang.Class<okio.RealBufferedSink>;
    public sink: okio.Sink;
    public writeDecimalLong(param0: number): okio.BufferedSink;
    public close(): void;
    public writeByte(param0: number): okio.BufferedSink;
    public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
    public writeShortLe(param0: number): okio.BufferedSink;
    public writeInt(param0: number): okio.BufferedSink;
    public writeUtf8CodePoint(param0: number): okio.BufferedSink;
    public writeUtf8(param0: string): okio.BufferedSink;
    public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
    public writeShort(param0: number): okio.BufferedSink;
    public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
    public write(param0: androidNative.Array<number>, param1: number, param2: number): okio.BufferedSink;
    public emitCompleteSegments(): okio.BufferedSink;
    public emit(): okio.BufferedSink;
    public writeIntLe(param0: number): okio.BufferedSink;
    public write(param0: okio.Buffer, param1: number): void;
    public write(param0: java.nio.ByteBuffer): number;
    public toString(): string;
    public flush(): void;
    public isOpen(): boolean;
    public write(param0: okio.ByteString): okio.BufferedSink;
    public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
    public writeLongLe(param0: number): okio.BufferedSink;
    public write(param0: okio.Source, param1: number): okio.BufferedSink;
    public buffer(): okio.Buffer;
    public write(param0: androidNative.Array<number>): okio.BufferedSink;
    public outputStream(): java.io.OutputStream;
    public writeAll(param0: okio.Source): number;
    public writeLong(param0: number): okio.BufferedSink;
    public timeout(): okio.Timeout;
  }
}

declare module okio {
  export class RealBufferedSource extends okio.BufferedSource {
    public static class: java.lang.Class<okio.RealBufferedSource>;
    public source: okio.Source;
    public readFully(param0: androidNative.Array<number>): void;
    public close(): void;
    public inputStream(): java.io.InputStream;
    public readByteString(): okio.ByteString;
    public readIntLe(): number;
    public readUtf8LineStrict(): string;
    public readUtf8LineStrict(param0: number): string;
    public readByteArray(): androidNative.Array<number>;
    public readUtf8(param0: number): string;
    public readByteArray(param0: number): androidNative.Array<number>;
    public read(param0: androidNative.Array<number>): number;
    public readUtf8CodePoint(): number;
    public indexOf(param0: number): number;
    public readByte(): number;
    public readHexadecimalUnsignedLong(): number;
    public indexOf(param0: number, param1: number, param2: number): number;
    public readString(param0: number, param1: java.nio.charset.Charset): string;
    public readLongLe(): number;
    public readFully(param0: okio.Buffer, param1: number): void;
    public read(param0: okio.Buffer, param1: number): number;
    public readLong(): number;
    public read(param0: java.nio.ByteBuffer): number;
    public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
    public readUtf8(): string;
    public readByteString(param0: number): okio.ByteString;
    public indexOfElement(param0: okio.ByteString): number;
    public skip(param0: number): void;
    public readDecimalLong(): number;
    public toString(): string;
    public readAll(param0: okio.Sink): number;
    public readInt(): number;
    public rangeEquals(param0: number, param1: okio.ByteString): boolean;
    public isOpen(): boolean;
    public indexOfElement(param0: okio.ByteString, param1: number): number;
    public select(param0: okio.Options): number;
    public exhausted(): boolean;
    public readShort(): number;
    public buffer(): okio.Buffer;
    public require(param0: number): void;
    public request(param0: number): boolean;
    public indexOf(param0: okio.ByteString, param1: number): number;
    public readString(param0: java.nio.charset.Charset): string;
    public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
    public readShortLe(): number;
    public indexOf(param0: number, param1: number): number;
    public readUtf8Line(): string;
    public indexOf(param0: okio.ByteString): number;
    public timeout(): okio.Timeout;
  }
}

declare module okio {
  export class Segment {
    public static class: java.lang.Class<okio.Segment>;
    public push(param0: okio.Segment): okio.Segment;
    public writeTo(param0: okio.Segment, param1: number): void;
    public compact(): void;
    public pop(): okio.Segment;
    public split(param0: number): okio.Segment;
  }
}

declare module okio {
  export class SegmentPool {
    public static class: java.lang.Class<okio.SegmentPool>;
  }
}

declare module okio {
  export class SegmentedByteString extends okio.ByteString {
    public static class: java.lang.Class<okio.SegmentedByteString>;
    public base64(): string;
    public substring(param0: number): okio.ByteString;
    public equals(param0: any): boolean;
    public rangeEquals(param0: number, param1: androidNative.Array<number>, param2: number, param3: number): boolean;
    public base64Url(): string;
    public hmacSha1(param0: okio.ByteString): okio.ByteString;
    public asByteBuffer(): java.nio.ByteBuffer;
    public size(): number;
    public hex(): string;
    public hashCode(): number;
    public toAsciiUppercase(): okio.ByteString;
    public lastIndexOf(param0: androidNative.Array<number>): number;
    public lastIndexOf(param0: okio.ByteString, param1: number): number;
    public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
    public lastIndexOf(param0: okio.ByteString): number;
    public toByteArray(): androidNative.Array<number>;
    public sha256(): okio.ByteString;
    public getByte(param0: number): number;
    public toString(): string;
    public indexOf(param0: androidNative.Array<number>): number;
    public string(param0: java.nio.charset.Charset): string;
    public md5(): okio.ByteString;
    public lastIndexOf(param0: androidNative.Array<number>, param1: number): number;
    public toAsciiLowercase(): okio.ByteString;
    public sha1(): okio.ByteString;
    public write(param0: java.io.OutputStream): void;
    public indexOf(param0: androidNative.Array<number>, param1: number): number;
    public utf8(): string;
    public substring(param0: number, param1: number): okio.ByteString;
    public indexOf(param0: okio.ByteString, param1: number): number;
    public hmacSha256(param0: okio.ByteString): okio.ByteString;
    public indexOf(param0: okio.ByteString): number;
  }
}

declare module okio {
  export class Sink {
    public static class: java.lang.Class<okio.Sink>;
    /**
     * Constructs a new instance of the okio.Sink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
     */
    public constructor(implementation: { write(param0: okio.Buffer, param1: number): void; flush(): void; timeout(): okio.Timeout; close(): void });
    public constructor();
    public close(): void;
    public write(param0: okio.Buffer, param1: number): void;
    public flush(): void;
    public timeout(): okio.Timeout;
  }
}

declare module okio {
  export class Source {
    public static class: java.lang.Class<okio.Source>;
    /**
     * Constructs a new instance of the okio.Source interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
     */
    public constructor(implementation: { read(param0: okio.Buffer, param1: number): number; timeout(): okio.Timeout; close(): void });
    public constructor();
    public close(): void;
    public read(param0: okio.Buffer, param1: number): number;
    public timeout(): okio.Timeout;
  }
}

declare module okio {
  export class Timeout {
    public static class: java.lang.Class<okio.Timeout>;
    public static NONE: okio.Timeout;
    public constructor();
    public throwIfReached(): void;
    public deadline(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
    public clearDeadline(): okio.Timeout;
    public hasDeadline(): boolean;
    public timeout(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
    public timeoutNanos(): number;
    public waitUntilNotified(param0: any): void;
    public deadlineNanoTime(): number;
    public deadlineNanoTime(param0: number): okio.Timeout;
    public clearTimeout(): okio.Timeout;
  }
}

declare module okio {
  export class Utf8 {
    public static class: java.lang.Class<okio.Utf8>;
    public static size(param0: string, param1: number, param2: number): number;
    public static size(param0: string): number;
  }
}

declare module okio {
  export class Util {
    public static class: java.lang.Class<okio.Util>;
    public static UTF_8: java.nio.charset.Charset;
    public static reverseBytesShort(param0: number): number;
    public static reverseBytesLong(param0: number): number;
    public static arrayRangeEquals(param0: androidNative.Array<number>, param1: number, param2: androidNative.Array<number>, param3: number, param4: number): boolean;
    public static checkOffsetAndCount(param0: number, param1: number, param2: number): void;
    public static reverseBytesInt(param0: number): number;
    public static sneakyRethrow(param0: java.lang.Throwable): void;
  }
}

//Generics information:
