declare module com {
  export module squareup {
    export module picasso {
      export abstract class Action<T> extends java.lang.Object {
        public static class: java.lang.Class<com.squareup.picasso.Action<any>>;
      }
      export module Action {
        export class RequestWeakReference<M> extends java.lang.ref.WeakReference<any> {
          public static class: java.lang.Class<com.squareup.picasso.Action.RequestWeakReference<any>>;
        }
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class AssetRequestHandler extends com.squareup.picasso.RequestHandler {
        public static class: java.lang.Class<com.squareup.picasso.AssetRequestHandler>;
        public static ANDROID_ASSET: string;
        public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
        public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class BitmapHunter {
        public static class: java.lang.Class<com.squareup.picasso.BitmapHunter>;
        public run(): void;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class BuildConfig {
        public static class: java.lang.Class<com.squareup.picasso.BuildConfig>;
        public static DEBUG: boolean;
        public static LIBRARY_PACKAGE_NAME: string;
        public static BUILD_TYPE: string;
        public static VERSION_CODE: number;
        public static VERSION_NAME: string;
        public constructor();
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class Cache {
        public static class: java.lang.Class<com.squareup.picasso.Cache>;
        /**
         * Constructs a new instance of the com.squareup.picasso.Cache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { get(param0: string): globalAndroid.graphics.Bitmap; set(param0: string, param1: globalAndroid.graphics.Bitmap): void; size(): number; maxSize(): number; clear(): void; clearKeyUri(param0: string): void; <clinit>(): void });
        public constructor();
        public static NONE: com.squareup.picasso.Cache;
        public get(param0: string): globalAndroid.graphics.Bitmap;
        public maxSize(): number;
        public set(param0: string, param1: globalAndroid.graphics.Bitmap): void;
        public clear(): void;
        public clearKeyUri(param0: string): void;
        public size(): number;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class Callback {
        public static class: java.lang.Class<com.squareup.picasso.Callback>;
        /**
         * Constructs a new instance of the com.squareup.picasso.Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onSuccess(): void; onError(param0: java.lang.Exception): void });
        public constructor();
        public onError(param0: java.lang.Exception): void;
        public onSuccess(): void;
      }
      export module Callback {
        export class EmptyCallback extends com.squareup.picasso.Callback {
          public static class: java.lang.Class<com.squareup.picasso.Callback.EmptyCallback>;
          public constructor();
          public onSuccess(): void;
          public onError(param0: java.lang.Exception): void;
        }
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class ContactsPhotoRequestHandler extends com.squareup.picasso.RequestHandler {
        public static class: java.lang.Class<com.squareup.picasso.ContactsPhotoRequestHandler>;
        public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
        public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class ContentStreamRequestHandler extends com.squareup.picasso.RequestHandler {
        public static class: java.lang.Class<com.squareup.picasso.ContentStreamRequestHandler>;
        public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
        public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class DeferredRequestCreator {
        public static class: java.lang.Class<com.squareup.picasso.DeferredRequestCreator>;
        public onPreDraw(): boolean;
        public onViewAttachedToWindow(param0: globalAndroid.view.View): void;
        public onViewDetachedFromWindow(param0: globalAndroid.view.View): void;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class Dispatcher {
        public static class: java.lang.Class<com.squareup.picasso.Dispatcher>;
      }
      export module Dispatcher {
        export class DispatcherHandler {
          public static class: java.lang.Class<com.squareup.picasso.Dispatcher.DispatcherHandler>;
          public handleMessage(param0: globalAndroid.os.Message): void;
        }
        export class DispatcherThread {
          public static class: java.lang.Class<com.squareup.picasso.Dispatcher.DispatcherThread>;
        }
        export class NetworkBroadcastReceiver {
          public static class: java.lang.Class<com.squareup.picasso.Dispatcher.NetworkBroadcastReceiver>;
          public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
        }
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class Downloader {
        public static class: java.lang.Class<com.squareup.picasso.Downloader>;
        /**
         * Constructs a new instance of the com.squareup.picasso.Downloader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { load(param0: okhttp3.Request): okhttp3.Response; shutdown(): void });
        public constructor();
        public shutdown(): void;
        public load(param0: okhttp3.Request): okhttp3.Response;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class FetchAction extends com.squareup.picasso.Action<any> {
        public static class: java.lang.Class<com.squareup.picasso.FetchAction>;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class FileRequestHandler extends com.squareup.picasso.ContentStreamRequestHandler {
        public static class: java.lang.Class<com.squareup.picasso.FileRequestHandler>;
        public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
        public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class GetAction extends com.squareup.picasso.Action<java.lang.Void> {
        public static class: java.lang.Class<com.squareup.picasso.GetAction>;
        public error(param0: java.lang.Exception): void;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class ImageViewAction extends com.squareup.picasso.Action<globalAndroid.widget.ImageView> {
        public static class: java.lang.Class<com.squareup.picasso.ImageViewAction>;
        public error(param0: java.lang.Exception): void;
        public complete(param0: globalAndroid.graphics.Bitmap, param1: com.squareup.picasso.Picasso.LoadedFrom): void;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class LruCache extends com.squareup.picasso.Cache {
        public static class: java.lang.Class<com.squareup.picasso.LruCache>;
        public get(param0: string): globalAndroid.graphics.Bitmap;
        public evictionCount(): number;
        public maxSize(): number;
        public missCount(): number;
        public constructor(param0: globalAndroid.content.Context);
        public set(param0: string, param1: globalAndroid.graphics.Bitmap): void;
        public clear(): void;
        public constructor(param0: number);
        public putCount(): number;
        public hitCount(): number;
        public clearKeyUri(param0: string): void;
        public size(): number;
      }
      export module LruCache {
        export class BitmapAndSize {
          public static class: java.lang.Class<com.squareup.picasso.LruCache.BitmapAndSize>;
        }
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class MarkableInputStream {
        public static class: java.lang.Class<com.squareup.picasso.MarkableInputStream>;
        public reset(): void;
        public reset(param0: number): void;
        public markSupported(): boolean;
        public read(): number;
        public read(param0: androidNative.Array<number>): number;
        public skip(param0: number): number;
        public close(): void;
        public savePosition(param0: number): number;
        public available(): number;
        public allowMarksToExpire(param0: boolean): void;
        public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
        public mark(param0: number): void;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class MediaStoreRequestHandler extends com.squareup.picasso.ContentStreamRequestHandler {
        public static class: java.lang.Class<com.squareup.picasso.MediaStoreRequestHandler>;
        public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
        public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
      }
      export module MediaStoreRequestHandler {
        export class PicassoKind {
          public static class: java.lang.Class<com.squareup.picasso.MediaStoreRequestHandler.PicassoKind>;
          public static MICRO: com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
          public static MINI: com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
          public static FULL: com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
          public static valueOf(param0: string): com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
          public static values(): androidNative.Array<com.squareup.picasso.MediaStoreRequestHandler.PicassoKind>;
        }
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class MemoryPolicy {
        public static class: java.lang.Class<com.squareup.picasso.MemoryPolicy>;
        public static NO_CACHE: com.squareup.picasso.MemoryPolicy;
        public static NO_STORE: com.squareup.picasso.MemoryPolicy;
        public static valueOf(param0: string): com.squareup.picasso.MemoryPolicy;
        public static values(): androidNative.Array<com.squareup.picasso.MemoryPolicy>;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class NetworkPolicy {
        public static class: java.lang.Class<com.squareup.picasso.NetworkPolicy>;
        public static NO_CACHE: com.squareup.picasso.NetworkPolicy;
        public static NO_STORE: com.squareup.picasso.NetworkPolicy;
        public static OFFLINE: com.squareup.picasso.NetworkPolicy;
        public static values(): androidNative.Array<com.squareup.picasso.NetworkPolicy>;
        public static shouldReadFromDiskCache(param0: number): boolean;
        public static shouldWriteToDiskCache(param0: number): boolean;
        public static isOfflineOnly(param0: number): boolean;
        public static valueOf(param0: string): com.squareup.picasso.NetworkPolicy;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class NetworkRequestHandler extends com.squareup.picasso.RequestHandler {
        public static class: java.lang.Class<com.squareup.picasso.NetworkRequestHandler>;
        public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
        public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
      }
      export module NetworkRequestHandler {
        export class ContentLengthException {
          public static class: java.lang.Class<com.squareup.picasso.NetworkRequestHandler.ContentLengthException>;
        }
        export class ResponseException {
          public static class: java.lang.Class<com.squareup.picasso.NetworkRequestHandler.ResponseException>;
        }
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class OkHttp3Downloader extends com.squareup.picasso.Downloader {
        public static class: java.lang.Class<com.squareup.picasso.OkHttp3Downloader>;
        public constructor(param0: okhttp3.OkHttpClient);
        public shutdown(): void;
        public constructor(param0: java.io.File);
        public constructor(param0: globalAndroid.content.Context);
        public constructor(param0: globalAndroid.content.Context, param1: number);
        public constructor(param0: okhttp3.Call.Factory);
        public load(param0: okhttp3.Request): okhttp3.Response;
        public constructor(param0: java.io.File, param1: number);
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class Picasso {
        public static class: java.lang.Class<com.squareup.picasso.Picasso>;
        public cancelTag(param0: any): void;
        public static get(): com.squareup.picasso.Picasso;
        public load(param0: java.io.File): com.squareup.picasso.RequestCreator;
        public cancelRequest(param0: com.squareup.picasso.Target): void;
        public load(param0: number): com.squareup.picasso.RequestCreator;
        public resumeTag(param0: any): void;
        public getSnapshot(): com.squareup.picasso.StatsSnapshot;
        public cancelRequest(param0: globalAndroid.widget.RemoteViews, param1: number): void;
        public pauseTag(param0: any): void;
        public cancelRequest(param0: globalAndroid.widget.ImageView): void;
        public isLoggingEnabled(): boolean;
        public setLoggingEnabled(param0: boolean): void;
        public static setSingletonInstance(param0: com.squareup.picasso.Picasso): void;
        public shutdown(): void;
        public load(param0: globalAndroid.net.Uri): com.squareup.picasso.RequestCreator;
        public load(param0: string): com.squareup.picasso.RequestCreator;
        public invalidate(param0: java.io.File): void;
        public areIndicatorsEnabled(): boolean;
        public invalidate(param0: string): void;
        public setIndicatorsEnabled(param0: boolean): void;
        public invalidate(param0: globalAndroid.net.Uri): void;
      }
      export module Picasso {
        export class Builder {
          public static class: java.lang.Class<com.squareup.picasso.Picasso.Builder>;
          public constructor(param0: globalAndroid.content.Context);
          public listener(param0: com.squareup.picasso.Picasso.Listener): com.squareup.picasso.Picasso.Builder;
          public executor(param0: java.util.concurrent.ExecutorService): com.squareup.picasso.Picasso.Builder;
          public build(): com.squareup.picasso.Picasso;
          public requestTransformer(param0: com.squareup.picasso.Picasso.RequestTransformer): com.squareup.picasso.Picasso.Builder;
          public downloader(param0: com.squareup.picasso.Downloader): com.squareup.picasso.Picasso.Builder;
          public defaultBitmapConfig(param0: globalAndroid.graphics.Bitmap.Config): com.squareup.picasso.Picasso.Builder;
          public addRequestHandler(param0: com.squareup.picasso.RequestHandler): com.squareup.picasso.Picasso.Builder;
          public memoryCache(param0: com.squareup.picasso.Cache): com.squareup.picasso.Picasso.Builder;
          public loggingEnabled(param0: boolean): com.squareup.picasso.Picasso.Builder;
          public indicatorsEnabled(param0: boolean): com.squareup.picasso.Picasso.Builder;
        }
        export class CleanupThread {
          public static class: java.lang.Class<com.squareup.picasso.Picasso.CleanupThread>;
          public run(): void;
        }
        export class Listener {
          public static class: java.lang.Class<com.squareup.picasso.Picasso.Listener>;
          /**
           * Constructs a new instance of the com.squareup.picasso.Picasso$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onImageLoadFailed(param0: com.squareup.picasso.Picasso, param1: globalAndroid.net.Uri, param2: java.lang.Exception): void });
          public constructor();
          public onImageLoadFailed(param0: com.squareup.picasso.Picasso, param1: globalAndroid.net.Uri, param2: java.lang.Exception): void;
        }
        export class LoadedFrom {
          public static class: java.lang.Class<com.squareup.picasso.Picasso.LoadedFrom>;
          public static MEMORY: com.squareup.picasso.Picasso.LoadedFrom;
          public static DISK: com.squareup.picasso.Picasso.LoadedFrom;
          public static NETWORK: com.squareup.picasso.Picasso.LoadedFrom;
          public static values(): androidNative.Array<com.squareup.picasso.Picasso.LoadedFrom>;
          public static valueOf(param0: string): com.squareup.picasso.Picasso.LoadedFrom;
        }
        export class Priority {
          public static class: java.lang.Class<com.squareup.picasso.Picasso.Priority>;
          public static LOW: com.squareup.picasso.Picasso.Priority;
          public static NORMAL: com.squareup.picasso.Picasso.Priority;
          public static HIGH: com.squareup.picasso.Picasso.Priority;
          public static values(): androidNative.Array<com.squareup.picasso.Picasso.Priority>;
          public static valueOf(param0: string): com.squareup.picasso.Picasso.Priority;
        }
        export class RequestTransformer {
          public static class: java.lang.Class<com.squareup.picasso.Picasso.RequestTransformer>;
          /**
           * Constructs a new instance of the com.squareup.picasso.Picasso$RequestTransformer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { transformRequest(param0: com.squareup.picasso.Request): com.squareup.picasso.Request; <clinit>(): void });
          public constructor();
          public static IDENTITY: com.squareup.picasso.Picasso.RequestTransformer;
          public transformRequest(param0: com.squareup.picasso.Request): com.squareup.picasso.Request;
        }
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class PicassoDrawable {
        public static class: java.lang.Class<com.squareup.picasso.PicassoDrawable>;
        public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
        public draw(param0: globalAndroid.graphics.Canvas): void;
        public setAlpha(param0: number): void;
        public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class PicassoExecutorService {
        public static class: java.lang.Class<com.squareup.picasso.PicassoExecutorService>;
        public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
      }
      export module PicassoExecutorService {
        export class PicassoFutureTask extends java.util.concurrent.FutureTask<com.squareup.picasso.BitmapHunter> implements java.lang.Comparable<com.squareup.picasso.PicassoExecutorService.PicassoFutureTask> {
          public static class: java.lang.Class<com.squareup.picasso.PicassoExecutorService.PicassoFutureTask>;
          public compareTo(param0: com.squareup.picasso.PicassoExecutorService.PicassoFutureTask): number;
        }
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class PicassoProvider {
        public static class: java.lang.Class<com.squareup.picasso.PicassoProvider>;
        public getType(param0: globalAndroid.net.Uri): string;
        public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
        public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>): number;
        public delete(param0: globalAndroid.net.Uri, param1: string, param2: androidNative.Array<string>): number;
        public query(param0: globalAndroid.net.Uri, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string): globalAndroid.database.Cursor;
        public onCreate(): boolean;
        public constructor();
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export abstract class RemoteViewsAction extends com.squareup.picasso.Action<com.squareup.picasso.RemoteViewsAction.RemoteViewsTarget> {
        public static class: java.lang.Class<com.squareup.picasso.RemoteViewsAction>;
        public error(param0: java.lang.Exception): void;
      }
      export module RemoteViewsAction {
        export class AppWidgetAction extends com.squareup.picasso.RemoteViewsAction {
          public static class: java.lang.Class<com.squareup.picasso.RemoteViewsAction.AppWidgetAction>;
        }
        export class NotificationAction extends com.squareup.picasso.RemoteViewsAction {
          public static class: java.lang.Class<com.squareup.picasso.RemoteViewsAction.NotificationAction>;
        }
        export class RemoteViewsTarget {
          public static class: java.lang.Class<com.squareup.picasso.RemoteViewsAction.RemoteViewsTarget>;
          public equals(param0: any): boolean;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class Request {
        public static class: java.lang.Class<com.squareup.picasso.Request>;
        public uri: globalAndroid.net.Uri;
        public resourceId: number;
        public stableKey: string;
        public transformations: java.util.List<com.squareup.picasso.Transformation>;
        public targetWidth: number;
        public targetHeight: number;
        public centerCrop: boolean;
        public centerCropGravity: number;
        public centerInside: boolean;
        public onlyScaleDown: boolean;
        public rotationDegrees: number;
        public rotationPivotX: number;
        public rotationPivotY: number;
        public hasRotationPivot: boolean;
        public purgeable: boolean;
        public config: globalAndroid.graphics.Bitmap.Config;
        public priority: com.squareup.picasso.Picasso.Priority;
        public hasSize(): boolean;
        public toString(): string;
        public buildUpon(): com.squareup.picasso.Request.Builder;
      }
      export module Request {
        export class Builder {
          public static class: java.lang.Class<com.squareup.picasso.Request.Builder>;
          public setUri(param0: globalAndroid.net.Uri): com.squareup.picasso.Request.Builder;
          public centerCrop(param0: number): com.squareup.picasso.Request.Builder;
          public onlyScaleDown(): com.squareup.picasso.Request.Builder;
          public transform(param0: java.util.List<any>): com.squareup.picasso.Request.Builder;
          public resize(param0: number, param1: number): com.squareup.picasso.Request.Builder;
          public centerCrop(): com.squareup.picasso.Request.Builder;
          public build(): com.squareup.picasso.Request;
          public clearCenterCrop(): com.squareup.picasso.Request.Builder;
          public transform(param0: com.squareup.picasso.Transformation): com.squareup.picasso.Request.Builder;
          public centerInside(): com.squareup.picasso.Request.Builder;
          public constructor(param0: globalAndroid.net.Uri);
          public clearOnlyScaleDown(): com.squareup.picasso.Request.Builder;
          public purgeable(): com.squareup.picasso.Request.Builder;
          public priority(param0: com.squareup.picasso.Picasso.Priority): com.squareup.picasso.Request.Builder;
          public stableKey(param0: string): com.squareup.picasso.Request.Builder;
          public config(param0: globalAndroid.graphics.Bitmap.Config): com.squareup.picasso.Request.Builder;
          public clearRotation(): com.squareup.picasso.Request.Builder;
          public setResourceId(param0: number): com.squareup.picasso.Request.Builder;
          public clearCenterInside(): com.squareup.picasso.Request.Builder;
          public clearResize(): com.squareup.picasso.Request.Builder;
          public rotate(param0: number, param1: number, param2: number): com.squareup.picasso.Request.Builder;
          public constructor(param0: number);
          public rotate(param0: number): com.squareup.picasso.Request.Builder;
        }
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class RequestCreator {
        public static class: java.lang.Class<com.squareup.picasso.RequestCreator>;
        public placeholder(param0: number): com.squareup.picasso.RequestCreator;
        public fetch(param0: com.squareup.picasso.Callback): void;
        public error(param0: number): com.squareup.picasso.RequestCreator;
        public resize(param0: number, param1: number): com.squareup.picasso.RequestCreator;
        public stableKey(param0: string): com.squareup.picasso.RequestCreator;
        public noPlaceholder(): com.squareup.picasso.RequestCreator;
        public fit(): com.squareup.picasso.RequestCreator;
        public priority(param0: com.squareup.picasso.Picasso.Priority): com.squareup.picasso.RequestCreator;
        public into(param0: globalAndroid.widget.ImageView, param1: com.squareup.picasso.Callback): void;
        public tag(param0: any): com.squareup.picasso.RequestCreator;
        public networkPolicy(param0: com.squareup.picasso.NetworkPolicy, param1: androidNative.Array<com.squareup.picasso.NetworkPolicy>): com.squareup.picasso.RequestCreator;
        public purgeable(): com.squareup.picasso.RequestCreator;
        public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: androidNative.Array<number>, param3: com.squareup.picasso.Callback): void;
        public into(param0: globalAndroid.widget.ImageView): void;
        public config(param0: globalAndroid.graphics.Bitmap.Config): com.squareup.picasso.RequestCreator;
        public get(): globalAndroid.graphics.Bitmap;
        public fetch(): void;
        public rotate(param0: number, param1: number, param2: number): com.squareup.picasso.RequestCreator;
        public error(param0: globalAndroid.graphics.drawable.Drawable): com.squareup.picasso.RequestCreator;
        public memoryPolicy(param0: com.squareup.picasso.MemoryPolicy, param1: androidNative.Array<com.squareup.picasso.MemoryPolicy>): com.squareup.picasso.RequestCreator;
        public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: androidNative.Array<number>): void;
        public centerCrop(param0: number): com.squareup.picasso.RequestCreator;
        public centerCrop(): com.squareup.picasso.RequestCreator;
        public noFade(): com.squareup.picasso.RequestCreator;
        public transform(param0: com.squareup.picasso.Transformation): com.squareup.picasso.RequestCreator;
        public onlyScaleDown(): com.squareup.picasso.RequestCreator;
        public placeholder(param0: globalAndroid.graphics.drawable.Drawable): com.squareup.picasso.RequestCreator;
        public into(param0: com.squareup.picasso.Target): void;
        public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: number, param3: globalAndroid.app.Notification, param4: string): void;
        public rotate(param0: number): com.squareup.picasso.RequestCreator;
        public centerInside(): com.squareup.picasso.RequestCreator;
        public transform(param0: java.util.List<any>): com.squareup.picasso.RequestCreator;
        public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: number, param3: globalAndroid.app.Notification, param4: string, param5: com.squareup.picasso.Callback): void;
        public resizeDimen(param0: number, param1: number): com.squareup.picasso.RequestCreator;
        public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: number, param3: globalAndroid.app.Notification): void;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export abstract class RequestHandler {
        public static class: java.lang.Class<com.squareup.picasso.RequestHandler>;
        public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
        public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
        public constructor();
      }
      export module RequestHandler {
        export class Result {
          public static class: java.lang.Class<com.squareup.picasso.RequestHandler.Result>;
          public constructor(param0: okio.Source, param1: com.squareup.picasso.Picasso.LoadedFrom);
          public getSource(): okio.Source;
          public getLoadedFrom(): com.squareup.picasso.Picasso.LoadedFrom;
          public getBitmap(): globalAndroid.graphics.Bitmap;
          public constructor(param0: globalAndroid.graphics.Bitmap, param1: com.squareup.picasso.Picasso.LoadedFrom);
        }
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class ResourceRequestHandler extends com.squareup.picasso.RequestHandler {
        public static class: java.lang.Class<com.squareup.picasso.ResourceRequestHandler>;
        public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
        public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class Stats {
        public static class: java.lang.Class<com.squareup.picasso.Stats>;
      }
      export module Stats {
        export class StatsHandler {
          public static class: java.lang.Class<com.squareup.picasso.Stats.StatsHandler>;
          public handleMessage(param0: globalAndroid.os.Message): void;
        }
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class StatsSnapshot {
        public static class: java.lang.Class<com.squareup.picasso.StatsSnapshot>;
        public maxSize: number;
        public size: number;
        public cacheHits: number;
        public cacheMisses: number;
        public totalDownloadSize: number;
        public totalOriginalBitmapSize: number;
        public totalTransformedBitmapSize: number;
        public averageDownloadSize: number;
        public averageOriginalBitmapSize: number;
        public averageTransformedBitmapSize: number;
        public downloadCount: number;
        public originalBitmapCount: number;
        public transformedBitmapCount: number;
        public timeStamp: number;
        public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number);
        public dump(): void;
        public dump(param0: java.io.PrintWriter): void;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class Target {
        public static class: java.lang.Class<com.squareup.picasso.Target>;
        /**
         * Constructs a new instance of the com.squareup.picasso.Target interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onBitmapLoaded(param0: globalAndroid.graphics.Bitmap, param1: com.squareup.picasso.Picasso.LoadedFrom): void; onBitmapFailed(param0: java.lang.Exception, param1: globalAndroid.graphics.drawable.Drawable): void; onPrepareLoad(param0: globalAndroid.graphics.drawable.Drawable): void });
        public constructor();
        public onBitmapFailed(param0: java.lang.Exception, param1: globalAndroid.graphics.drawable.Drawable): void;
        public onBitmapLoaded(param0: globalAndroid.graphics.Bitmap, param1: com.squareup.picasso.Picasso.LoadedFrom): void;
        public onPrepareLoad(param0: globalAndroid.graphics.drawable.Drawable): void;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class TargetAction extends com.squareup.picasso.Action<com.squareup.picasso.Target> {
        public static class: java.lang.Class<com.squareup.picasso.TargetAction>;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class Transformation {
        public static class: java.lang.Class<com.squareup.picasso.Transformation>;
        /**
         * Constructs a new instance of the com.squareup.picasso.Transformation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap; key(): string });
        public constructor();
        public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
        public key(): string;
      }
    }
  }
}

declare module com {
  export module squareup {
    export module picasso {
      export class Utils {
        public static class: java.lang.Class<com.squareup.picasso.Utils>;
      }
      export module Utils {
        export class PicassoThread {
          public static class: java.lang.Class<com.squareup.picasso.Utils.PicassoThread>;
          public run(): void;
        }
        export class PicassoThreadFactory {
          public static class: java.lang.Class<com.squareup.picasso.Utils.PicassoThreadFactory>;
          public newThread(param0: java.lang.Runnable): java.lang.Thread;
        }
      }
    }
  }
}

//Generics information:
//com.squareup.picasso.Action:1
//com.squareup.picasso.Action.RequestWeakReference:1
