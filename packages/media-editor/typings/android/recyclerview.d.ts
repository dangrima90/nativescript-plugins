declare module androidx {
  export module recyclerview {
    export module widget {
      export class AdapterHelper extends androidx.recyclerview.widget.OpReorderer.Callback {
        public static class: java.lang.Class<androidx.recyclerview.widget.AdapterHelper>;
        public applyPendingUpdatesToPosition(param0: number): number;
        public recycleUpdateOp(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
        public obtainUpdateOp(param0: number, param1: number, param2: number, param3: any): androidx.recyclerview.widget.AdapterHelper.UpdateOp;
      }
      export module AdapterHelper {
        export class Callback {
          public static class: java.lang.Class<androidx.recyclerview.widget.AdapterHelper.Callback>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.AdapterHelper$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { findViewHolder(param0: number): androidx.recyclerview.widget.RecyclerView.ViewHolder; offsetPositionsForRemovingInvisible(param0: number, param1: number): void; offsetPositionsForRemovingLaidOutOrNewView(param0: number, param1: number): void; markViewHoldersUpdated(param0: number, param1: number, param2: any): void; onDispatchFirstPass(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void; onDispatchSecondPass(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void; offsetPositionsForAdd(param0: number, param1: number): void; offsetPositionsForMove(param0: number, param1: number): void });
          public constructor();
          public offsetPositionsForAdd(param0: number, param1: number): void;
          public offsetPositionsForRemovingLaidOutOrNewView(param0: number, param1: number): void;
          public offsetPositionsForRemovingInvisible(param0: number, param1: number): void;
          public offsetPositionsForMove(param0: number, param1: number): void;
          public markViewHoldersUpdated(param0: number, param1: number, param2: any): void;
          public findViewHolder(param0: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
          public onDispatchSecondPass(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
          public onDispatchFirstPass(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
        }
        export class UpdateOp {
          public static class: java.lang.Class<androidx.recyclerview.widget.AdapterHelper.UpdateOp>;
          public equals(param0: any): boolean;
          public toString(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class AdapterListUpdateCallback extends androidx.recyclerview.widget.ListUpdateCallback {
        public static class: java.lang.Class<androidx.recyclerview.widget.AdapterListUpdateCallback>;
        public onInserted(param0: number, param1: number): void;
        public constructor(param0: androidx.recyclerview.widget.RecyclerView.Adapter<any>);
        public onChanged(param0: number, param1: number, param2: any): void;
        public onMoved(param0: number, param1: number): void;
        public onRemoved(param0: number, param1: number): void;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class AsyncDifferConfig<T> extends java.lang.Object {
        public static class: java.lang.Class<androidx.recyclerview.widget.AsyncDifferConfig<any>>;
        public getDiffCallback(): androidx.recyclerview.widget.DiffUtil.ItemCallback<T>;
        public getBackgroundThreadExecutor(): java.util.concurrent.Executor;
        public getMainThreadExecutor(): java.util.concurrent.Executor;
      }
      export module AsyncDifferConfig {
        export class Builder<T> extends java.lang.Object {
          public static class: java.lang.Class<androidx.recyclerview.widget.AsyncDifferConfig.Builder<any>>;
          public setMainThreadExecutor(param0: java.util.concurrent.Executor): androidx.recyclerview.widget.AsyncDifferConfig.Builder<T>;
          public build(): androidx.recyclerview.widget.AsyncDifferConfig<T>;
          public setBackgroundThreadExecutor(param0: java.util.concurrent.Executor): androidx.recyclerview.widget.AsyncDifferConfig.Builder<T>;
          public constructor(param0: androidx.recyclerview.widget.DiffUtil.ItemCallback<T>);
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class AsyncListDiffer<T> extends java.lang.Object {
        public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListDiffer<any>>;
        public submitList(param0: java.util.List<T>): void;
        public removeListListener(param0: androidx.recyclerview.widget.AsyncListDiffer.ListListener<T>): void;
        public getCurrentList(): java.util.List<T>;
        public constructor(param0: androidx.recyclerview.widget.RecyclerView.Adapter<any>, param1: androidx.recyclerview.widget.DiffUtil.ItemCallback<T>);
        public constructor(param0: androidx.recyclerview.widget.ListUpdateCallback, param1: androidx.recyclerview.widget.AsyncDifferConfig<T>);
        public submitList(param0: java.util.List<T>, param1: java.lang.Runnable): void;
        public addListListener(param0: androidx.recyclerview.widget.AsyncListDiffer.ListListener<T>): void;
      }
      export module AsyncListDiffer {
        export class ListListener<T> extends java.lang.Object {
          public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListDiffer.ListListener<any>>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.AsyncListDiffer$ListListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onCurrentListChanged(param0: java.util.List<T>, param1: java.util.List<T>): void });
          public constructor();
          public onCurrentListChanged(param0: java.util.List<T>, param1: java.util.List<T>): void;
        }
        export class MainThreadExecutor {
          public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListDiffer.MainThreadExecutor>;
          public execute(param0: java.lang.Runnable): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class AsyncListUtil<T> extends java.lang.Object {
        public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListUtil<any>>;
        public onRangeChanged(): void;
        public refresh(): void;
        public getItem(param0: number): T;
        public constructor(param0: java.lang.Class<T>, param1: number, param2: androidx.recyclerview.widget.AsyncListUtil.DataCallback<T>, param3: androidx.recyclerview.widget.AsyncListUtil.ViewCallback);
        public getItemCount(): number;
      }
      export module AsyncListUtil {
        export abstract class DataCallback<T> extends java.lang.Object {
          public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListUtil.DataCallback<any>>;
          public refreshData(): number;
          public getMaxCachedTiles(): number;
          public constructor();
          public fillData(param0: androidNative.Array<T>, param1: number, param2: number): void;
          public recycleData(param0: androidNative.Array<T>, param1: number): void;
        }
        export abstract class ViewCallback {
          public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListUtil.ViewCallback>;
          public static HINT_SCROLL_NONE: number;
          public static HINT_SCROLL_DESC: number;
          public static HINT_SCROLL_ASC: number;
          public constructor();
          public onItemLoaded(param0: number): void;
          public extendRangeInto(param0: androidNative.Array<number>, param1: androidNative.Array<number>, param2: number): void;
          public getItemRangeInto(param0: androidNative.Array<number>): void;
          public onDataRefresh(): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class BatchingListUpdateCallback extends androidx.recyclerview.widget.ListUpdateCallback {
        public static class: java.lang.Class<androidx.recyclerview.widget.BatchingListUpdateCallback>;
        public constructor(param0: androidx.recyclerview.widget.ListUpdateCallback);
        public onInserted(param0: number, param1: number): void;
        public onChanged(param0: number, param1: number, param2: any): void;
        public onMoved(param0: number, param1: number): void;
        public dispatchLastEvent(): void;
        public onRemoved(param0: number, param1: number): void;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ChildHelper {
        public static class: java.lang.Class<androidx.recyclerview.widget.ChildHelper>;
        public toString(): string;
      }
      export module ChildHelper {
        export class Bucket {
          public static class: java.lang.Class<androidx.recyclerview.widget.ChildHelper.Bucket>;
          public toString(): string;
        }
        export class Callback {
          public static class: java.lang.Class<androidx.recyclerview.widget.ChildHelper.Callback>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.ChildHelper$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getChildCount(): number; addView(param0: globalAndroid.view.View, param1: number): void; indexOfChild(param0: globalAndroid.view.View): number; removeViewAt(param0: number): void; getChildAt(param0: number): globalAndroid.view.View; removeAllViews(): void; getChildViewHolder(param0: globalAndroid.view.View): androidx.recyclerview.widget.RecyclerView.ViewHolder; attachViewToParent(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void; detachViewFromParent(param0: number): void; onEnteredHiddenState(param0: globalAndroid.view.View): void; onLeftHiddenState(param0: globalAndroid.view.View): void });
          public constructor();
          public removeViewAt(param0: number): void;
          public removeAllViews(): void;
          public getChildCount(): number;
          public getChildAt(param0: number): globalAndroid.view.View;
          public getChildViewHolder(param0: globalAndroid.view.View): androidx.recyclerview.widget.RecyclerView.ViewHolder;
          public detachViewFromParent(param0: number): void;
          public addView(param0: globalAndroid.view.View, param1: number): void;
          public attachViewToParent(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
          public indexOfChild(param0: globalAndroid.view.View): number;
          public onEnteredHiddenState(param0: globalAndroid.view.View): void;
          public onLeftHiddenState(param0: globalAndroid.view.View): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ConcatAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
        public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapter>;
        public onBindViewHolder(param0: any, param1: number): void;
        public onViewAttachedToWindow(param0: any): void;
        public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
        public onFailedToRecycleView(param0: any): boolean;
        public onViewRecycled(param0: any): void;
        public findRelativeAdapterPositionIn(param0: androidx.recyclerview.widget.RecyclerView.Adapter<any>, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: number): number;
        public constructor();
        public getItemCount(): number;
        public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): any;
        public addAdapter(param0: number, param1: androidx.recyclerview.widget.RecyclerView.Adapter<any>): boolean;
        public getItemViewType(param0: number): number;
        public onViewRecycled(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public onAttachedToRecyclerView(param0: androidx.recyclerview.widget.RecyclerView): void;
        public setHasStableIds(param0: boolean): void;
        public onDetachedFromRecyclerView(param0: androidx.recyclerview.widget.RecyclerView): void;
        public onViewDetachedFromWindow(param0: any): void;
        public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
        public setStateRestorationPolicy(param0: androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy): void;
        public onFailedToRecycleView(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
        public addAdapter(param0: androidx.recyclerview.widget.RecyclerView.Adapter<any>): boolean;
        public onBindViewHolder(param0: any, param1: number, param2: java.util.List<any>): void;
        public constructor(param0: androidx.recyclerview.widget.ConcatAdapter.Config, param1: java.util.List<any>);
        public constructor(param0: androidx.recyclerview.widget.ConcatAdapter.Config, param1: androidNative.Array<androidx.recyclerview.widget.RecyclerView.Adapter<any>>);
        public constructor(param0: androidNative.Array<androidx.recyclerview.widget.RecyclerView.Adapter<any>>);
        public onViewAttachedToWindow(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public removeAdapter(param0: androidx.recyclerview.widget.RecyclerView.Adapter<any>): boolean;
        public onViewDetachedFromWindow(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public getItemId(param0: number): number;
        public constructor(param0: java.util.List<any>);
        public getWrappedAdapterAndPosition(param0: number): globalAndroid.util.Pair<androidx.recyclerview.widget.RecyclerView.Adapter<any>, java.lang.Integer>;
        public getAdapters(): java.util.List<any>;
      }
      export module ConcatAdapter {
        export class Config {
          public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapter.Config>;
          public isolateViewTypes: boolean;
          public stableIdMode: androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode;
          public static DEFAULT: androidx.recyclerview.widget.ConcatAdapter.Config;
        }
        export module Config {
          export class Builder {
            public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapter.Config.Builder>;
            public constructor();
            public setIsolateViewTypes(param0: boolean): androidx.recyclerview.widget.ConcatAdapter.Config.Builder;
            public setStableIdMode(param0: androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode): androidx.recyclerview.widget.ConcatAdapter.Config.Builder;
            public build(): androidx.recyclerview.widget.ConcatAdapter.Config;
          }
          export class StableIdMode {
            public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode>;
            public static NO_STABLE_IDS: androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode;
            public static ISOLATED_STABLE_IDS: androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode;
            public static SHARED_STABLE_IDS: androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode;
            public static values(): androidNative.Array<androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode>;
            public static valueOf(param0: string): androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ConcatAdapterController extends androidx.recyclerview.widget.NestedAdapterWrapper.Callback {
        public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapterController>;
        public onDetachedFromRecyclerView(param0: androidx.recyclerview.widget.RecyclerView): void;
        public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
        public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
        public getBoundAdapter(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): androidx.recyclerview.widget.RecyclerView.Adapter<any>;
        public onFailedToRecycleView(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
        public onItemRangeChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number, param3: any): void;
        public onItemRangeMoved(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
        public onStateRestorationPolicyChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
        public getTotalCount(): number;
        public getLocalAdapterPosition(param0: androidx.recyclerview.widget.RecyclerView.Adapter<any>, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: number): number;
        public onItemRangeChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
        public onViewAttachedToWindow(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public hasStableIds(): boolean;
        public onViewDetachedFromWindow(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public onChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
        public getItemId(param0: number): number;
        public getItemViewType(param0: number): number;
        public onViewRecycled(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public getCopyOfAdapters(): java.util.List<androidx.recyclerview.widget.RecyclerView.Adapter<any>>;
        public canRestoreState(): boolean;
        public onItemRangeRemoved(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
        public getWrappedAdapterAndPosition(param0: number): globalAndroid.util.Pair<androidx.recyclerview.widget.RecyclerView.Adapter<any>, java.lang.Integer>;
        public onItemRangeInserted(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
        public onAttachedToRecyclerView(param0: androidx.recyclerview.widget.RecyclerView): void;
      }
      export module ConcatAdapterController {
        export class WrapperAndLocalPosition {
          public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapterController.WrapperAndLocalPosition>;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class DefaultItemAnimator extends androidx.recyclerview.widget.SimpleItemAnimator {
        public static class: java.lang.Class<androidx.recyclerview.widget.DefaultItemAnimator>;
        public runPendingAnimations(): void;
        public animateAdd(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
        public endAnimations(): void;
        public canReuseUpdatedViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
        public animateRemove(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
        public canReuseUpdatedViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: java.util.List<any>): boolean;
        public constructor();
        public isRunning(param0: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemAnimatorFinishedListener): boolean;
        public animateChange(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param3: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
        public animateChange(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: number, param3: number, param4: number, param5: number): boolean;
        public isRunning(): boolean;
        public animateMove(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number, param2: number, param3: number, param4: number): boolean;
        public endAnimation(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
      }
      export module DefaultItemAnimator {
        export class ChangeInfo {
          public static class: java.lang.Class<androidx.recyclerview.widget.DefaultItemAnimator.ChangeInfo>;
          public oldHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder;
          public newHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder;
          public fromX: number;
          public fromY: number;
          public toX: number;
          public toY: number;
          public toString(): string;
        }
        export class MoveInfo {
          public static class: java.lang.Class<androidx.recyclerview.widget.DefaultItemAnimator.MoveInfo>;
          public holder: androidx.recyclerview.widget.RecyclerView.ViewHolder;
          public fromX: number;
          public fromY: number;
          public toX: number;
          public toY: number;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class DiffUtil {
        public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil>;
        public static calculateDiff(param0: androidx.recyclerview.widget.DiffUtil.Callback): androidx.recyclerview.widget.DiffUtil.DiffResult;
        public static calculateDiff(param0: androidx.recyclerview.widget.DiffUtil.Callback, param1: boolean): androidx.recyclerview.widget.DiffUtil.DiffResult;
      }
      export module DiffUtil {
        export abstract class Callback {
          public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.Callback>;
          public getNewListSize(): number;
          public getChangePayload(param0: number, param1: number): any;
          public areContentsTheSame(param0: number, param1: number): boolean;
          public constructor();
          public getOldListSize(): number;
          public areItemsTheSame(param0: number, param1: number): boolean;
        }
        export class CenteredArray {
          public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.CenteredArray>;
          public fill(param0: number): void;
        }
        export class Diagonal {
          public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.Diagonal>;
          public x: number;
          public y: number;
          public size: number;
        }
        export class DiffResult {
          public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.DiffResult>;
          public static NO_POSITION: number;
          public dispatchUpdatesTo(param0: androidx.recyclerview.widget.RecyclerView.Adapter<any>): void;
          public convertNewPositionToOld(param0: number): number;
          public convertOldPositionToNew(param0: number): number;
          public dispatchUpdatesTo(param0: androidx.recyclerview.widget.ListUpdateCallback): void;
        }
        export abstract class ItemCallback<T> extends java.lang.Object {
          public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.ItemCallback<any>>;
          public getChangePayload(param0: T, param1: T): any;
          public areItemsTheSame(param0: T, param1: T): boolean;
          public constructor();
          public areContentsTheSame(param0: T, param1: T): boolean;
        }
        export class PostponedUpdate {
          public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.PostponedUpdate>;
        }
        export class Range {
          public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.Range>;
          public constructor(param0: number, param1: number, param2: number, param3: number);
          public constructor();
        }
        export class Snake {
          public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.Snake>;
          public startX: number;
          public startY: number;
          public endX: number;
          public endY: number;
          public reverse: boolean;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class DividerItemDecoration extends androidx.recyclerview.widget.RecyclerView.ItemDecoration {
        public static class: java.lang.Class<androidx.recyclerview.widget.DividerItemDecoration>;
        public static HORIZONTAL: number;
        public static VERTICAL: number;
        /** @deprecated */
        public onDraw(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView): void;
        /** @deprecated */
        public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: number, param2: androidx.recyclerview.widget.RecyclerView): void;
        public setOrientation(param0: number): void;
        public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
        public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: globalAndroid.view.View, param2: androidx.recyclerview.widget.RecyclerView, param3: androidx.recyclerview.widget.RecyclerView.State): void;
        public constructor(param0: globalAndroid.content.Context, param1: number);
        public getDrawable(): globalAndroid.graphics.drawable.Drawable;
        public onDraw(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: androidx.recyclerview.widget.RecyclerView.State): void;
        public constructor();
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class FastScroller extends androidx.recyclerview.widget.RecyclerView.ItemDecoration implements androidx.recyclerview.widget.RecyclerView.OnItemTouchListener {
        public static class: java.lang.Class<androidx.recyclerview.widget.FastScroller>;
        /** @deprecated */
        public onDrawOver(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView): void;
        public attachToRecyclerView(param0: androidx.recyclerview.widget.RecyclerView): void;
        public isDragging(): boolean;
        public onDrawOver(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: androidx.recyclerview.widget.RecyclerView.State): void;
        public onRequestDisallowInterceptTouchEvent(param0: boolean): void;
        public onInterceptTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): boolean;
        public onTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): void;
        public show(): void;
      }
      export module FastScroller {
        export class AnimatorListener {
          public static class: java.lang.Class<androidx.recyclerview.widget.FastScroller.AnimatorListener>;
          public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
          public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
        }
        export class AnimatorUpdater {
          public static class: java.lang.Class<androidx.recyclerview.widget.FastScroller.AnimatorUpdater>;
          public onAnimationUpdate(param0: globalAndroid.animation.ValueAnimator): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class GapWorker {
        public static class: java.lang.Class<androidx.recyclerview.widget.GapWorker>;
        public run(): void;
        public remove(param0: androidx.recyclerview.widget.RecyclerView): void;
        public add(param0: androidx.recyclerview.widget.RecyclerView): void;
      }
      export module GapWorker {
        export class LayoutPrefetchRegistryImpl extends androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry {
          public static class: java.lang.Class<androidx.recyclerview.widget.GapWorker.LayoutPrefetchRegistryImpl>;
          public addPosition(param0: number, param1: number): void;
        }
        export class Task {
          public static class: java.lang.Class<androidx.recyclerview.widget.GapWorker.Task>;
          public immediate: boolean;
          public viewVelocity: number;
          public distanceToItem: number;
          public view: androidx.recyclerview.widget.RecyclerView;
          public position: number;
          public clear(): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class GridLayoutManager extends androidx.recyclerview.widget.LinearLayoutManager {
        public static class: java.lang.Class<androidx.recyclerview.widget.GridLayoutManager>;
        public static DEFAULT_SPAN_COUNT: number;
        public computeVerticalScrollRange(param0: androidx.recyclerview.widget.RecyclerView.State): number;
        public computeHorizontalScrollOffset(param0: androidx.recyclerview.widget.RecyclerView.State): number;
        public setUsingSpansToEstimateScrollbarDimensions(param0: boolean): void;
        public getSpanSizeLookup(): androidx.recyclerview.widget.GridLayoutManager.SpanSizeLookup;
        public setMeasuredDimension(param0: number, param1: number): void;
        public getSpanCount(): number;
        public computeHorizontalScrollRange(param0: androidx.recyclerview.widget.RecyclerView.State): number;
        public computeVerticalScrollOffset(param0: androidx.recyclerview.widget.RecyclerView.State): number;
        public onItemsChanged(param0: androidx.recyclerview.widget.RecyclerView): void;
        public scrollVerticallyBy(param0: number, param1: androidx.recyclerview.widget.RecyclerView.Recycler, param2: androidx.recyclerview.widget.RecyclerView.State): number;
        public onInitializeAccessibilityNodeInfo(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State, param2: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
        public constructor();
        public getColumnCountForAccessibility(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State): number;
        public onItemsUpdated(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number, param3: any): void;
        public constructor(param0: globalAndroid.content.Context);
        public onInitializeAccessibilityNodeInfoForItem(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State, param2: globalAndroid.view.View, param3: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
        public generateDefaultLayoutParams(): androidx.recyclerview.widget.RecyclerView.LayoutParams;
        public constructor(param0: globalAndroid.content.Context, param1: number);
        public onItemsRemoved(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): void;
        public onItemsAdded(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): void;
        public constructor(param0: globalAndroid.content.Context, param1: number, param2: boolean);
        public checkLayoutParams(param0: androidx.recyclerview.widget.RecyclerView.LayoutParams): boolean;
        public supportsPredictiveItemAnimations(): boolean;
        public setMeasuredDimension(param0: globalAndroid.graphics.Rect, param1: number, param2: number): void;
        public onFocusSearchFailed(param0: globalAndroid.view.View, param1: number, param2: androidx.recyclerview.widget.RecyclerView.Recycler, param3: androidx.recyclerview.widget.RecyclerView.State): globalAndroid.view.View;
        public onItemsUpdated(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): void;
        public scrollHorizontallyBy(param0: number, param1: androidx.recyclerview.widget.RecyclerView.Recycler, param2: androidx.recyclerview.widget.RecyclerView.State): number;
        public isUsingSpansToEstimateScrollbarDimensions(): boolean;
        public setStackFromEnd(param0: boolean): void;
        public setSpanCount(param0: number): void;
        public computeScrollVectorForPosition(param0: number): globalAndroid.graphics.PointF;
        public setSpanSizeLookup(param0: androidx.recyclerview.widget.GridLayoutManager.SpanSizeLookup): void;
        public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): androidx.recyclerview.widget.RecyclerView.LayoutParams;
        public generateLayoutParams(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.recyclerview.widget.RecyclerView.LayoutParams;
        public onLayoutCompleted(param0: androidx.recyclerview.widget.RecyclerView.State): void;
        public getRowCountForAccessibility(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State): number;
        public prepareForDrop(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number, param3: number): void;
        public constructor(param0: globalAndroid.content.Context, param1: number, param2: number, param3: boolean);
        public onLayoutChildren(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State): void;
        public onItemsMoved(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number, param3: number): void;
      }
      export module GridLayoutManager {
        export class DefaultSpanSizeLookup extends androidx.recyclerview.widget.GridLayoutManager.SpanSizeLookup {
          public static class: java.lang.Class<androidx.recyclerview.widget.GridLayoutManager.DefaultSpanSizeLookup>;
          public constructor();
          public getSpanSize(param0: number): number;
          public getSpanIndex(param0: number, param1: number): number;
        }
        export class LayoutParams extends androidx.recyclerview.widget.RecyclerView.LayoutParams {
          public static class: java.lang.Class<androidx.recyclerview.widget.GridLayoutManager.LayoutParams>;
          public static INVALID_SPAN_ID: number;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public constructor(param0: androidx.recyclerview.widget.RecyclerView.LayoutParams);
          public getSpanSize(): number;
          public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
          public getSpanIndex(): number;
          public constructor(param0: globalAndroid.view.ViewGroup.MarginLayoutParams);
          public constructor(param0: number, param1: number);
        }
        export abstract class SpanSizeLookup {
          public static class: java.lang.Class<androidx.recyclerview.widget.GridLayoutManager.SpanSizeLookup>;
          public setSpanGroupIndexCacheEnabled(param0: boolean): void;
          public isSpanGroupIndexCacheEnabled(): boolean;
          public constructor();
          public getSpanSize(param0: number): number;
          public isSpanIndexCacheEnabled(): boolean;
          public getSpanGroupIndex(param0: number, param1: number): number;
          public setSpanIndexCacheEnabled(param0: boolean): void;
          public getSpanIndex(param0: number, param1: number): number;
          public invalidateSpanGroupIndexCache(): void;
          public invalidateSpanIndexCache(): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ItemTouchHelper extends androidx.recyclerview.widget.RecyclerView.ItemDecoration implements androidx.recyclerview.widget.RecyclerView.OnChildAttachStateChangeListener {
        public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper>;
        public static UP: number;
        public static DOWN: number;
        public static LEFT: number;
        public static RIGHT: number;
        public static START: number;
        public static END: number;
        public static ACTION_STATE_IDLE: number;
        public static ACTION_STATE_SWIPE: number;
        public static ACTION_STATE_DRAG: number;
        public static ANIMATION_TYPE_SWIPE_SUCCESS: number;
        public static ANIMATION_TYPE_SWIPE_CANCEL: number;
        public static ANIMATION_TYPE_DRAG: number;
        /** @deprecated */
        public onDrawOver(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView): void;
        /** @deprecated */
        public onDraw(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView): void;
        public onChildViewDetachedFromWindow(param0: globalAndroid.view.View): void;
        public onDrawOver(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: androidx.recyclerview.widget.RecyclerView.State): void;
        public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: globalAndroid.view.View, param2: androidx.recyclerview.widget.RecyclerView, param3: androidx.recyclerview.widget.RecyclerView.State): void;
        public onDraw(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: androidx.recyclerview.widget.RecyclerView.State): void;
        public constructor();
        /** @deprecated */
        public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: number, param2: androidx.recyclerview.widget.RecyclerView): void;
        public startSwipe(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public attachToRecyclerView(param0: androidx.recyclerview.widget.RecyclerView): void;
        public startDrag(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public onChildViewAttachedToWindow(param0: globalAndroid.view.View): void;
        public constructor(param0: androidx.recyclerview.widget.ItemTouchHelper.Callback);
      }
      export module ItemTouchHelper {
        export abstract class Callback {
          public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper.Callback>;
          public static DEFAULT_DRAG_ANIMATION_DURATION: number;
          public static DEFAULT_SWIPE_ANIMATION_DURATION: number;
          public static getDefaultUIUtil(): androidx.recyclerview.widget.ItemTouchUIUtil;
          public getMovementFlags(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
          public chooseDropTarget(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: java.util.List<androidx.recyclerview.widget.RecyclerView.ViewHolder>, param2: number, param3: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
          public isLongPressDragEnabled(): boolean;
          public static convertToRelativeDirection(param0: number, param1: number): number;
          public interpolateOutOfBoundsScroll(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number, param3: number, param4: number): number;
          public getMoveThreshold(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
          public static makeFlag(param0: number, param1: number): number;
          public getAnimationDuration(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number, param3: number): number;
          public canDropOver(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
          public isItemViewSwipeEnabled(): boolean;
          public constructor();
          public getSwipeThreshold(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
          public static makeMovementFlags(param0: number, param1: number): number;
          public onChildDrawOver(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: androidx.recyclerview.widget.RecyclerView.ViewHolder, param3: number, param4: number, param5: number, param6: boolean): void;
          public onChildDraw(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: androidx.recyclerview.widget.RecyclerView.ViewHolder, param3: number, param4: number, param5: number, param6: boolean): void;
          public convertToAbsoluteDirection(param0: number, param1: number): number;
          public onMoved(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: number, param3: androidx.recyclerview.widget.RecyclerView.ViewHolder, param4: number, param5: number, param6: number): void;
          public getSwipeVelocityThreshold(param0: number): number;
          public onMove(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
          public getSwipeEscapeVelocity(param0: number): number;
          public clearView(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
          public onSwiped(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
          public getBoundingBoxMargin(): number;
          public onSelectedChanged(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
        }
        export class ItemTouchHelperGestureListener {
          public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper.ItemTouchHelperGestureListener>;
          public onDown(param0: globalAndroid.view.MotionEvent): boolean;
          public onLongPress(param0: globalAndroid.view.MotionEvent): void;
        }
        export class RecoverAnimation {
          public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper.RecoverAnimation>;
          public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
          public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
          public update(): void;
          public cancel(): void;
          public setDuration(param0: number): void;
          public onAnimationStart(param0: globalAndroid.animation.Animator): void;
          public start(): void;
          public onAnimationRepeat(param0: globalAndroid.animation.Animator): void;
          public setFraction(param0: number): void;
        }
        export abstract class SimpleCallback extends androidx.recyclerview.widget.ItemTouchHelper.Callback {
          public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper.SimpleCallback>;
          public getDragDirs(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
          public getMovementFlags(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
          public constructor();
          public getSwipeDirs(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
          public setDefaultDragDirs(param0: number): void;
          public setDefaultSwipeDirs(param0: number): void;
          public constructor(param0: number, param1: number);
        }
        export class ViewDropHandler {
          public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper.ViewDropHandler>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.ItemTouchHelper$ViewDropHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { prepareForDrop(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number, param3: number): void });
          public constructor();
          public prepareForDrop(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number, param3: number): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ItemTouchUIUtil {
        public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchUIUtil>;
        /**
         * Constructs a new instance of the androidx.recyclerview.widget.ItemTouchUIUtil interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onDraw(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: globalAndroid.view.View, param3: number, param4: number, param5: number, param6: boolean): void; onDrawOver(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: globalAndroid.view.View, param3: number, param4: number, param5: number, param6: boolean): void; clearView(param0: globalAndroid.view.View): void; onSelected(param0: globalAndroid.view.View): void });
        public constructor();
        public onSelected(param0: globalAndroid.view.View): void;
        public onDraw(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: globalAndroid.view.View, param3: number, param4: number, param5: number, param6: boolean): void;
        public clearView(param0: globalAndroid.view.View): void;
        public onDrawOver(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: globalAndroid.view.View, param3: number, param4: number, param5: number, param6: boolean): void;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ItemTouchUIUtilImpl extends androidx.recyclerview.widget.ItemTouchUIUtil {
        public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchUIUtilImpl>;
        public onSelected(param0: globalAndroid.view.View): void;
        public onDraw(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: globalAndroid.view.View, param3: number, param4: number, param5: number, param6: boolean): void;
        public clearView(param0: globalAndroid.view.View): void;
        public onDrawOver(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: globalAndroid.view.View, param3: number, param4: number, param5: number, param6: boolean): void;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class LayoutState {
        public static class: java.lang.Class<androidx.recyclerview.widget.LayoutState>;
        public toString(): string;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class LinearLayoutManager extends androidx.recyclerview.widget.RecyclerView.LayoutManager implements androidx.recyclerview.widget.ItemTouchHelper.ViewDropHandler, androidx.recyclerview.widget.RecyclerView.SmoothScroller.ScrollVectorProvider {
        public static class: java.lang.Class<androidx.recyclerview.widget.LinearLayoutManager>;
        public static HORIZONTAL: number;
        public static VERTICAL: number;
        public static INVALID_OFFSET: number;
        public getReverseLayout(): boolean;
        public computeHorizontalScrollOffset(param0: androidx.recyclerview.widget.RecyclerView.State): number;
        public computeVerticalScrollRange(param0: androidx.recyclerview.widget.RecyclerView.State): number;
        public computeVerticalScrollOffset(param0: androidx.recyclerview.widget.RecyclerView.State): number;
        public smoothScrollToPosition(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.State, param2: number): void;
        public constructor();
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
        public computeHorizontalScrollExtent(param0: androidx.recyclerview.widget.RecyclerView.State): number;
        public isSmoothScrollbarEnabled(): boolean;
        /** @deprecated */
        public onDetachedFromWindow(param0: androidx.recyclerview.widget.RecyclerView): void;
        public canScrollHorizontally(): boolean;
        public isAutoMeasureEnabled(): boolean;
        public generateDefaultLayoutParams(): androidx.recyclerview.widget.RecyclerView.LayoutParams;
        public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
        public computeVerticalScrollExtent(param0: androidx.recyclerview.widget.RecyclerView.State): number;
        public findViewByPosition(param0: number): globalAndroid.view.View;
        public canScrollVertically(): boolean;
        public constructor(param0: globalAndroid.content.Context, param1: number, param2: boolean);
        public setInitialPrefetchItemCount(param0: number): void;
        public scrollToPositionWithOffset(param0: number, param1: number): void;
        public computeScrollVectorForPosition(param0: number): globalAndroid.graphics.PointF;
        public collectAdjacentPrefetchPositions(param0: number, param1: number, param2: androidx.recyclerview.widget.RecyclerView.State, param3: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
        public computeHorizontalScrollRange(param0: androidx.recyclerview.widget.RecyclerView.State): number;
        public onInitializeAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
        public scrollVerticallyBy(param0: number, param1: androidx.recyclerview.widget.RecyclerView.Recycler, param2: androidx.recyclerview.widget.RecyclerView.State): number;
        public findLastCompletelyVisibleItemPosition(): number;
        public getStackFromEnd(): boolean;
        public getOrientation(): number;
        public findLastVisibleItemPosition(): number;
        public constructor(param0: globalAndroid.content.Context);
        public setRecycleChildrenOnDetach(param0: boolean): void;
        public setReverseLayout(param0: boolean): void;
        public collectInitialPrefetchPositions(param0: number, param1: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
        /** @deprecated */
        public getExtraLayoutSpace(param0: androidx.recyclerview.widget.RecyclerView.State): number;
        public getInitialPrefetchItemCount(): number;
        public setSmoothScrollbarEnabled(param0: boolean): void;
        public onSaveInstanceState(): globalAndroid.os.Parcelable;
        public setOrientation(param0: number): void;
        public supportsPredictiveItemAnimations(): boolean;
        public onFocusSearchFailed(param0: globalAndroid.view.View, param1: number, param2: androidx.recyclerview.widget.RecyclerView.Recycler, param3: androidx.recyclerview.widget.RecyclerView.State): globalAndroid.view.View;
        public onInitializeAccessibilityEvent(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State, param2: globalAndroid.view.accessibility.AccessibilityEvent): void;
        public scrollHorizontallyBy(param0: number, param1: androidx.recyclerview.widget.RecyclerView.Recycler, param2: androidx.recyclerview.widget.RecyclerView.State): number;
        public findFirstVisibleItemPosition(): number;
        public setStackFromEnd(param0: boolean): void;
        public scrollToPosition(param0: number): void;
        public getRecycleChildrenOnDetach(): boolean;
        public findFirstCompletelyVisibleItemPosition(): number;
        public assertNotInLayoutOrScroll(param0: string): void;
        public onDetachedFromWindow(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.Recycler): void;
        public onLayoutCompleted(param0: androidx.recyclerview.widget.RecyclerView.State): void;
        public isLayoutRTL(): boolean;
        public prepareForDrop(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number, param3: number): void;
        public calculateExtraLayoutSpace(param0: androidx.recyclerview.widget.RecyclerView.State, param1: androidNative.Array<number>): void;
        public onLayoutChildren(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State): void;
      }
      export module LinearLayoutManager {
        export class AnchorInfo {
          public static class: java.lang.Class<androidx.recyclerview.widget.LinearLayoutManager.AnchorInfo>;
          public toString(): string;
          public assignFromView(param0: globalAndroid.view.View, param1: number): void;
          public assignFromViewAndKeepVisibleRect(param0: globalAndroid.view.View, param1: number): void;
        }
        export class LayoutChunkResult {
          public static class: java.lang.Class<androidx.recyclerview.widget.LinearLayoutManager.LayoutChunkResult>;
          public mConsumed: number;
          public mFinished: boolean;
          public mIgnoreConsumed: boolean;
          public mFocusable: boolean;
          public constructor();
        }
        export class LayoutState {
          public static class: java.lang.Class<androidx.recyclerview.widget.LinearLayoutManager.LayoutState>;
          public assignPositionFromScrapList(param0: globalAndroid.view.View): void;
          public nextViewInLimitedList(param0: globalAndroid.view.View): globalAndroid.view.View;
          public assignPositionFromScrapList(): void;
        }
        export class SavedState {
          public static class: java.lang.Class<androidx.recyclerview.widget.LinearLayoutManager.SavedState>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.recyclerview.widget.LinearLayoutManager.SavedState>;
          public constructor();
          public constructor(param0: androidx.recyclerview.widget.LinearLayoutManager.SavedState);
          public describeContents(): number;
          public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class LinearSmoothScroller extends androidx.recyclerview.widget.RecyclerView.SmoothScroller {
        public static class: java.lang.Class<androidx.recyclerview.widget.LinearSmoothScroller>;
        public static SNAP_TO_START: number;
        public static SNAP_TO_END: number;
        public static SNAP_TO_ANY: number;
        public mLinearInterpolator: globalAndroid.view.animation.LinearInterpolator;
        public mDecelerateInterpolator: globalAndroid.view.animation.DecelerateInterpolator;
        public mTargetVector: globalAndroid.graphics.PointF;
        public mInterimTargetDx: number;
        public mInterimTargetDy: number;
        public getHorizontalSnapPreference(): number;
        public calculateTimeForScrolling(param0: number): number;
        public calculateDtToFit(param0: number, param1: number, param2: number, param3: number, param4: number): number;
        public getVerticalSnapPreference(): number;
        public calculateDxToMakeVisible(param0: globalAndroid.view.View, param1: number): number;
        public calculateSpeedPerPixel(param0: globalAndroid.util.DisplayMetrics): number;
        public constructor();
        public onStart(): void;
        public constructor(param0: globalAndroid.content.Context);
        public onTargetFound(param0: globalAndroid.view.View, param1: androidx.recyclerview.widget.RecyclerView.State, param2: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
        public calculateTimeForDeceleration(param0: number): number;
        public updateActionForInterimTarget(param0: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
        public onStop(): void;
        public calculateDyToMakeVisible(param0: globalAndroid.view.View, param1: number): number;
        public onSeekTargetStep(param0: number, param1: number, param2: androidx.recyclerview.widget.RecyclerView.State, param3: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class LinearSnapHelper extends androidx.recyclerview.widget.SnapHelper {
        public static class: java.lang.Class<androidx.recyclerview.widget.LinearSnapHelper>;
        public calculateDistanceToFinalSnap(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager, param1: globalAndroid.view.View): androidNative.Array<number>;
        public findSnapView(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager): globalAndroid.view.View;
        public findTargetSnapPosition(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager, param1: number, param2: number): number;
        public constructor();
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export abstract class ListAdapter<T, VH> extends androidx.recyclerview.widget.RecyclerView.Adapter<any> {
        public static class: java.lang.Class<androidx.recyclerview.widget.ListAdapter<any, any>>;
        public onCurrentListChanged(param0: java.util.List<any>, param1: java.util.List<any>): void;
        public submitList(param0: java.util.List<any>, param1: java.lang.Runnable): void;
        public getItem(param0: number): any;
        public getCurrentList(): java.util.List<any>;
        public submitList(param0: java.util.List<any>): void;
        public constructor(param0: androidx.recyclerview.widget.AsyncDifferConfig<any>);
        public constructor();
        public constructor(param0: androidx.recyclerview.widget.DiffUtil.ItemCallback<any>);
        public getItemCount(): number;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ListUpdateCallback {
        public static class: java.lang.Class<androidx.recyclerview.widget.ListUpdateCallback>;
        /**
         * Constructs a new instance of the androidx.recyclerview.widget.ListUpdateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onInserted(param0: number, param1: number): void; onRemoved(param0: number, param1: number): void; onMoved(param0: number, param1: number): void; onChanged(param0: number, param1: number, param2: any): void });
        public constructor();
        public onInserted(param0: number, param1: number): void;
        public onChanged(param0: number, param1: number, param2: any): void;
        public onMoved(param0: number, param1: number): void;
        public onRemoved(param0: number, param1: number): void;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class MessageThreadUtil<T> extends androidx.recyclerview.widget.ThreadUtil<any> {
        public static class: java.lang.Class<androidx.recyclerview.widget.MessageThreadUtil<any>>;
        public getMainThreadProxy(param0: androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<any>): androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<any>;
        public getBackgroundProxy(param0: androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<any>): androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<any>;
      }
      export module MessageThreadUtil {
        export class MessageQueue {
          public static class: java.lang.Class<androidx.recyclerview.widget.MessageThreadUtil.MessageQueue>;
        }
        export class SyncQueueItem {
          public static class: java.lang.Class<androidx.recyclerview.widget.MessageThreadUtil.SyncQueueItem>;
          public what: number;
          public arg1: number;
          public arg2: number;
          public arg3: number;
          public arg4: number;
          public arg5: number;
          public data: any;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class NestedAdapterWrapper {
        public static class: java.lang.Class<androidx.recyclerview.widget.NestedAdapterWrapper>;
        public adapter: androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder>;
        public getItemId(param0: number): number;
      }
      export module NestedAdapterWrapper {
        export class Callback {
          public static class: java.lang.Class<androidx.recyclerview.widget.NestedAdapterWrapper.Callback>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.NestedAdapterWrapper$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
            onItemRangeChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
            onItemRangeChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number, param3: any): void;
            onItemRangeInserted(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
            onItemRangeRemoved(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
            onItemRangeMoved(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
            onStateRestorationPolicyChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
          });
          public constructor();
          public onItemRangeChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
          public onItemRangeRemoved(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
          public onItemRangeMoved(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
          public onStateRestorationPolicyChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
          public onItemRangeChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number, param3: any): void;
          public onChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
          public onItemRangeInserted(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class OpReorderer {
        public static class: java.lang.Class<androidx.recyclerview.widget.OpReorderer>;
      }
      export module OpReorderer {
        export class Callback {
          public static class: java.lang.Class<androidx.recyclerview.widget.OpReorderer.Callback>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.OpReorderer$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { obtainUpdateOp(param0: number, param1: number, param2: number, param3: any): androidx.recyclerview.widget.AdapterHelper.UpdateOp; recycleUpdateOp(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void });
          public constructor();
          public recycleUpdateOp(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
          public obtainUpdateOp(param0: number, param1: number, param2: number, param3: any): androidx.recyclerview.widget.AdapterHelper.UpdateOp;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export abstract class OrientationHelper {
        public static class: java.lang.Class<androidx.recyclerview.widget.OrientationHelper>;
        public mLayoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager;
        public static HORIZONTAL: number;
        public static VERTICAL: number;
        public getEnd(): number;
        public offsetChildren(param0: number): void;
        public getMode(): number;
        public onLayoutComplete(): void;
        public getTotalSpace(): number;
        public static createOrientationHelper(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager, param1: number): androidx.recyclerview.widget.OrientationHelper;
        public getDecoratedEnd(param0: globalAndroid.view.View): number;
        public getDecoratedMeasurementInOther(param0: globalAndroid.view.View): number;
        public getDecoratedMeasurement(param0: globalAndroid.view.View): number;
        public offsetChild(param0: globalAndroid.view.View, param1: number): void;
        public getTransformedEndWithDecoration(param0: globalAndroid.view.View): number;
        public static createVerticalHelper(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager): androidx.recyclerview.widget.OrientationHelper;
        public getStartAfterPadding(): number;
        public getDecoratedStart(param0: globalAndroid.view.View): number;
        public getLayoutManager(): androidx.recyclerview.widget.RecyclerView.LayoutManager;
        public getEndPadding(): number;
        public getModeInOther(): number;
        public getEndAfterPadding(): number;
        public getTotalSpaceChange(): number;
        public static createHorizontalHelper(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager): androidx.recyclerview.widget.OrientationHelper;
        public getTransformedStartWithDecoration(param0: globalAndroid.view.View): number;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class PagerSnapHelper extends androidx.recyclerview.widget.SnapHelper {
        public static class: java.lang.Class<androidx.recyclerview.widget.PagerSnapHelper>;
        public calculateDistanceToFinalSnap(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager, param1: globalAndroid.view.View): androidNative.Array<number>;
        public findSnapView(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager): globalAndroid.view.View;
        public findTargetSnapPosition(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager, param1: number, param2: number): number;
        public constructor();
        public createScroller(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager): androidx.recyclerview.widget.RecyclerView.SmoothScroller;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class RecyclerView {
        public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView>;
        public static HORIZONTAL: number;
        public static VERTICAL: number;
        public static NO_POSITION: number;
        public static NO_ID: number;
        public static INVALID_TYPE: number;
        public static TOUCH_SLOP_DEFAULT: number;
        public static TOUCH_SLOP_PAGING: number;
        public static UNDEFINED_DURATION: number;
        public static SCROLL_STATE_IDLE: number;
        public static SCROLL_STATE_DRAGGING: number;
        public static SCROLL_STATE_SETTLING: number;
        public hasFixedSize(): boolean;
        public setScrollingTouchSlop(param0: number): void;
        public onGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
        public stopScroll(): void;
        public setOnFlingListener(param0: androidx.recyclerview.widget.RecyclerView.OnFlingListener): void;
        public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
        public setPreserveFocusAfterLayout(param0: boolean): void;
        public swapAdapter(param0: androidx.recyclerview.widget.RecyclerView.Adapter<any>, param1: boolean): void;
        public setAccessibilityDelegateCompat(param0: androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate): void;
        /** @deprecated */
        public isLayoutFrozen(): boolean;
        public getPreserveFocusAfterLayout(): boolean;
        /** @deprecated */
        public findViewHolderForPosition(param0: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
        public static setVerboseLoggingEnabled(param0: boolean): void;
        public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
        public getCompatAccessibilityDelegate(): androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate;
        public isLayoutSuppressed(): boolean;
        public getChildAdapterPosition(param0: globalAndroid.view.View): number;
        public stopNestedScroll(param0: number): void;
        public smoothScrollBy(param0: number, param1: number): void;
        public getScrollState(): number;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
        public dispatchNestedPreScroll(param0: number, param1: number, param2: androidNative.Array<number>, param3: androidNative.Array<number>): boolean;
        public getAdapter(): androidx.recyclerview.widget.RecyclerView.Adapter<any>;
        /** @deprecated */
        public setOnScrollListener(param0: androidx.recyclerview.widget.RecyclerView.OnScrollListener): void;
        public getItemDecorationCount(): number;
        public setHasFixedSize(param0: boolean): void;
        public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
        public computeHorizontalScrollExtent(): number;
        /** @deprecated */
        public setRecyclerListener(param0: androidx.recyclerview.widget.RecyclerView.RecyclerListener): void;
        public static setDebugAssertionsEnabled(param0: boolean): void;
        public addFocusables(param0: java.util.ArrayList<globalAndroid.view.View>, param1: number, param2: number): void;
        public removeItemDecorationAt(param0: number): void;
        public computeVerticalScrollRange(): number;
        public smoothScrollBy(param0: number, param1: number, param2: globalAndroid.view.animation.Interpolator, param3: number): void;
        public addOnChildAttachStateChangeListener(param0: androidx.recyclerview.widget.RecyclerView.OnChildAttachStateChangeListener): void;
        public setItemViewCacheSize(param0: number): void;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
        public suppressLayout(param0: boolean): void;
        public findChildViewUnder(param0: number, param1: number): globalAndroid.view.View;
        public removeOnChildAttachStateChangeListener(param0: androidx.recyclerview.widget.RecyclerView.OnChildAttachStateChangeListener): void;
        public offsetChildrenHorizontal(param0: number): void;
        public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: androidNative.Array<number>, param5: number, param6: androidNative.Array<number>): void;
        public setAdapter(param0: androidx.recyclerview.widget.RecyclerView.Adapter<any>): void;
        public computeHorizontalScrollOffset(): number;
        public getLayoutManager(): androidx.recyclerview.widget.RecyclerView.LayoutManager;
        public clearOnChildAttachStateChangeListeners(): void;
        public dispatchNestedPreFling(param0: number, param1: number): boolean;
        public removeDetachedView(param0: globalAndroid.view.View, param1: boolean): void;
        public scrollBy(param0: number, param1: number): void;
        public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
        public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: androidNative.Array<number>, param5: number): boolean;
        public removeOnScrollListener(param0: androidx.recyclerview.widget.RecyclerView.OnScrollListener): void;
        /** @deprecated */
        public setLayoutTransition(param0: globalAndroid.animation.LayoutTransition): void;
        public offsetChildrenVertical(param0: number): void;
        public addItemDecoration(param0: androidx.recyclerview.widget.RecyclerView.ItemDecoration, param1: number): void;
        public getChildItemId(param0: globalAndroid.view.View): number;
        public findViewHolderForLayoutPosition(param0: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
        public removeOnItemTouchListener(param0: androidx.recyclerview.widget.RecyclerView.OnItemTouchListener): void;
        public stopNestedScroll(): void;
        public scrollToPosition(param0: number): void;
        public onScrollStateChanged(param0: number): void;
        public addItemDecoration(param0: androidx.recyclerview.widget.RecyclerView.ItemDecoration): void;
        public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
        public setRecycledViewPool(param0: androidx.recyclerview.widget.RecyclerView.RecycledViewPool): void;
        public drawChild(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.view.View, param2: number): boolean;
        public dispatchSaveInstanceState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
        public addOnScrollListener(param0: androidx.recyclerview.widget.RecyclerView.OnScrollListener): void;
        /** @deprecated */
        public setLayoutFrozen(param0: boolean): void;
        public onAttachedToWindow(): void;
        public onChildDetachedFromWindow(param0: globalAndroid.view.View): void;
        public isNestedScrollingEnabled(): boolean;
        public findViewHolderForAdapterPosition(param0: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
        public requestDisallowInterceptTouchEvent(param0: boolean): void;
        public computeVerticalScrollOffset(): number;
        public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
        public getItemAnimator(): androidx.recyclerview.widget.RecyclerView.ItemAnimator;
        public getMaxFlingVelocity(): number;
        public getChildLayoutPosition(param0: globalAndroid.view.View): number;
        public isAnimating(): boolean;
        public getOnFlingListener(): androidx.recyclerview.widget.RecyclerView.OnFlingListener;
        public computeHorizontalScrollRange(): number;
        public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
        public onChildAttachedToWindow(param0: globalAndroid.view.View): void;
        public hasPendingAdapterUpdates(): boolean;
        public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
        public setViewCacheExtension(param0: androidx.recyclerview.widget.RecyclerView.ViewCacheExtension): void;
        public setClipToPadding(param0: boolean): void;
        public onRequestFocusInDescendants(param0: number, param1: globalAndroid.graphics.Rect): boolean;
        public getRecycledViewPool(): androidx.recyclerview.widget.RecyclerView.RecycledViewPool;
        public setEdgeEffectFactory(param0: androidx.recyclerview.widget.RecyclerView.EdgeEffectFactory): void;
        public removeItemDecoration(param0: androidx.recyclerview.widget.RecyclerView.ItemDecoration): void;
        public dispatchNestedPreScroll(param0: number, param1: number, param2: androidNative.Array<number>, param3: androidNative.Array<number>, param4: number): boolean;
        public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
        public findContainingItemView(param0: globalAndroid.view.View): globalAndroid.view.View;
        public getClipToPadding(): boolean;
        public nestedScrollBy(param0: number, param1: number): void;
        public getChildDrawingOrder(param0: number, param1: number): number;
        public getItemDecorationAt(param0: number): androidx.recyclerview.widget.RecyclerView.ItemDecoration;
        public onScrolled(param0: number, param1: number): void;
        public startNestedScroll(param0: number): boolean;
        public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
        public setChildDrawingOrderCallback(param0: androidx.recyclerview.widget.RecyclerView.ChildDrawingOrderCallback): void;
        public computeVerticalScrollExtent(): number;
        public onDetachedFromWindow(): void;
        public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
        public getMinFlingVelocity(): number;
        public getBaseline(): number;
        public generateLayoutParams(param0: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
        /** @deprecated */
        public getChildPosition(param0: globalAndroid.view.View): number;
        public startNestedScroll(param0: number, param1: number): boolean;
        public smoothScrollToPosition(param0: number): void;
        public draw(param0: globalAndroid.graphics.Canvas): void;
        public findViewHolderForItemId(param0: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
        public setNestedScrollingEnabled(param0: boolean): void;
        public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: androidNative.Array<number>): boolean;
        public requestLayout(): void;
        public constructor(param0: globalAndroid.content.Context);
        public smoothScrollBy(param0: number, param1: number, param2: globalAndroid.view.animation.Interpolator): void;
        public isAttachedToWindow(): boolean;
        public getChildViewHolder(param0: globalAndroid.view.View): androidx.recyclerview.widget.RecyclerView.ViewHolder;
        public dispatchRestoreInstanceState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
        public getAccessibilityClassName(): string;
        public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
        public addOnItemTouchListener(param0: androidx.recyclerview.widget.RecyclerView.OnItemTouchListener): void;
        public removeRecyclerListener(param0: androidx.recyclerview.widget.RecyclerView.RecyclerListener): void;
        public onSaveInstanceState(): globalAndroid.os.Parcelable;
        public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
        public invalidateItemDecorations(): void;
        public setItemAnimator(param0: androidx.recyclerview.widget.RecyclerView.ItemAnimator): void;
        public scrollTo(param0: number, param1: number): void;
        public isComputingLayout(): boolean;
        public onDraw(param0: globalAndroid.graphics.Canvas): void;
        public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
        public hasNestedScrollingParent(param0: number): boolean;
        public setLayoutManager(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager): void;
        public hasNestedScrollingParent(): boolean;
        public addRecyclerListener(param0: androidx.recyclerview.widget.RecyclerView.RecyclerListener): void;
        public onMeasure(param0: number, param1: number): void;
        public fling(param0: number, param1: number): boolean;
        public clearOnScrollListeners(): void;
        public findContainingViewHolder(param0: globalAndroid.view.View): androidx.recyclerview.widget.RecyclerView.ViewHolder;
        public getEdgeEffectFactory(): androidx.recyclerview.widget.RecyclerView.EdgeEffectFactory;
        public getDecoratedBoundsWithMargins(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
      }
      export module RecyclerView {
        export abstract class Adapter<VH> extends java.lang.Object {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.Adapter<any>>;
          public onViewDetachedFromWindow(param0: VH): void;
          public setHasStableIds(param0: boolean): void;
          public notifyItemRangeChanged(param0: number, param1: number): void;
          public notifyItemRangeChanged(param0: number, param1: number, param2: any): void;
          public notifyDataSetChanged(): void;
          public notifyItemRangeInserted(param0: number, param1: number): void;
          public onFailedToRecycleView(param0: VH): boolean;
          public getStateRestorationPolicy(): androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy;
          public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): VH;
          public registerAdapterDataObserver(param0: androidx.recyclerview.widget.RecyclerView.AdapterDataObserver): void;
          public notifyItemInserted(param0: number): void;
          public constructor();
          public notifyItemRangeRemoved(param0: number, param1: number): void;
          public getItemViewType(param0: number): number;
          public hasObservers(): boolean;
          public notifyItemMoved(param0: number, param1: number): void;
          public notifyItemRemoved(param0: number): void;
          public onViewRecycled(param0: VH): void;
          public createViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): VH;
          public onBindViewHolder(param0: VH, param1: number): void;
          public unregisterAdapterDataObserver(param0: androidx.recyclerview.widget.RecyclerView.AdapterDataObserver): void;
          public notifyItemChanged(param0: number, param1: any): void;
          public bindViewHolder(param0: VH, param1: number): void;
          public onDetachedFromRecyclerView(param0: androidx.recyclerview.widget.RecyclerView): void;
          public findRelativeAdapterPositionIn(param0: androidx.recyclerview.widget.RecyclerView.Adapter<any>, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: number): number;
          public onViewAttachedToWindow(param0: VH): void;
          public hasStableIds(): boolean;
          public notifyItemChanged(param0: number): void;
          public setStateRestorationPolicy(param0: androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy): void;
          public getItemCount(): number;
          public onBindViewHolder(param0: VH, param1: number, param2: java.util.List<any>): void;
          public onAttachedToRecyclerView(param0: androidx.recyclerview.widget.RecyclerView): void;
          public getItemId(param0: number): number;
        }
        export module Adapter {
          export class StateRestorationPolicy {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy>;
            public static ALLOW: androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy;
            public static PREVENT_WHEN_EMPTY: androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy;
            public static PREVENT: androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy;
            public static valueOf(param0: string): androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy;
            public static values(): androidNative.Array<androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy>;
          }
        }
        export class AdapterDataObservable extends globalAndroid.database.Observable<androidx.recyclerview.widget.RecyclerView.AdapterDataObserver> {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.AdapterDataObservable>;
          public notifyStateRestorationPolicyChanged(): void;
          public notifyChanged(): void;
          public notifyItemRangeChanged(param0: number, param1: number): void;
          public notifyItemRangeChanged(param0: number, param1: number, param2: any): void;
          public notifyItemRangeRemoved(param0: number, param1: number): void;
          public hasObservers(): boolean;
          public notifyItemMoved(param0: number, param1: number): void;
          public notifyItemRangeInserted(param0: number, param1: number): void;
        }
        export abstract class AdapterDataObserver {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.AdapterDataObserver>;
          public onChanged(): void;
          public onItemRangeMoved(param0: number, param1: number, param2: number): void;
          public constructor();
          public onItemRangeChanged(param0: number, param1: number, param2: any): void;
          public onStateRestorationPolicyChanged(): void;
          public onItemRangeChanged(param0: number, param1: number): void;
          public onItemRangeRemoved(param0: number, param1: number): void;
          public onItemRangeInserted(param0: number, param1: number): void;
        }
        export class ChildDrawingOrderCallback {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ChildDrawingOrderCallback>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$ChildDrawingOrderCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onGetChildDrawingOrder(param0: number, param1: number): number });
          public constructor();
          public onGetChildDrawingOrder(param0: number, param1: number): number;
        }
        export class EdgeEffectFactory {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.EdgeEffectFactory>;
          public static DIRECTION_LEFT: number;
          public static DIRECTION_TOP: number;
          public static DIRECTION_RIGHT: number;
          public static DIRECTION_BOTTOM: number;
          public constructor();
          public createEdgeEffect(param0: androidx.recyclerview.widget.RecyclerView, param1: number): globalAndroid.widget.EdgeEffect;
        }
        export module EdgeEffectFactory {
          export class EdgeDirection {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.EdgeEffectFactory.EdgeDirection>;
            /**
             * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$EdgeEffectFactory$EdgeDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
        }
        export abstract class ItemAnimator {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimator>;
          public static FLAG_CHANGED: number;
          public static FLAG_REMOVED: number;
          public static FLAG_INVALIDATED: number;
          public static FLAG_MOVED: number;
          public static FLAG_APPEARED_IN_PRE_LAYOUT: number;
          public endAnimation(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
          public dispatchAnimationFinished(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
          public canReuseUpdatedViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
          public dispatchAnimationsFinished(): void;
          public animatePersistence(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
          public isRunning(param0: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemAnimatorFinishedListener): boolean;
          public onAnimationStarted(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
          public getRemoveDuration(): number;
          public constructor();
          public recordPostLayoutInformation(param0: androidx.recyclerview.widget.RecyclerView.State, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder): androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
          public canReuseUpdatedViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: java.util.List<any>): boolean;
          public onAnimationFinished(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
          public obtainHolderInfo(): androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
          public endAnimations(): void;
          public getAddDuration(): number;
          public setMoveDuration(param0: number): void;
          public runPendingAnimations(): void;
          public dispatchAnimationStarted(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
          public setRemoveDuration(param0: number): void;
          public setAddDuration(param0: number): void;
          public recordPreLayoutInformation(param0: androidx.recyclerview.widget.RecyclerView.State, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: number, param3: java.util.List<any>): androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
          public setChangeDuration(param0: number): void;
          public animateDisappearance(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
          public isRunning(): boolean;
          public getChangeDuration(): number;
          public animateAppearance(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
          public getMoveDuration(): number;
          public animateChange(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param3: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
        }
        export module ItemAnimator {
          export class AdapterChanges {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimator.AdapterChanges>;
            /**
             * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$ItemAnimator$AdapterChanges interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
          export class ItemAnimatorFinishedListener {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemAnimatorFinishedListener>;
            /**
             * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$ItemAnimator$ItemAnimatorFinishedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onAnimationsFinished(): void });
            public constructor();
            public onAnimationsFinished(): void;
          }
          export class ItemAnimatorListener {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemAnimatorListener>;
            /**
             * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$ItemAnimator$ItemAnimatorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onAnimationFinished(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void });
            public constructor();
            public onAnimationFinished(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
          }
          export class ItemHolderInfo {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo>;
            public left: number;
            public top: number;
            public right: number;
            public bottom: number;
            public changeFlags: number;
            public constructor();
            public setFrom(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
            public setFrom(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
          }
        }
        export class ItemAnimatorRestoreListener extends androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemAnimatorListener {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimatorRestoreListener>;
          public onAnimationFinished(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        }
        export abstract class ItemDecoration {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemDecoration>;
          /** @deprecated */
          public onDrawOver(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView): void;
          public constructor();
          public onDraw(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: androidx.recyclerview.widget.RecyclerView.State): void;
          /** @deprecated */
          public onDraw(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView): void;
          /** @deprecated */
          public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: number, param2: androidx.recyclerview.widget.RecyclerView): void;
          public onDrawOver(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: androidx.recyclerview.widget.RecyclerView.State): void;
          public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: globalAndroid.view.View, param2: androidx.recyclerview.widget.RecyclerView, param3: androidx.recyclerview.widget.RecyclerView.State): void;
        }
        export abstract class LayoutManager {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.LayoutManager>;
          public isAutoMeasureEnabled(): boolean;
          public setMeasuredDimension(param0: number, param1: number): void;
          public getMinimumWidth(): number;
          public onInterceptFocusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
          public getTransformedBoundingBox(param0: globalAndroid.view.View, param1: boolean, param2: globalAndroid.graphics.Rect): void;
          public onItemsAdded(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): void;
          public onInitializeAccessibilityNodeInfo(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State, param2: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
          public supportsPredictiveItemAnimations(): boolean;
          public detachAndScrapViewAt(param0: number, param1: androidx.recyclerview.widget.RecyclerView.Recycler): void;
          public scrollToPosition(param0: number): void;
          public getDecoratedBoundsWithMargins(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
          public getLeftDecorationWidth(param0: globalAndroid.view.View): number;
          public constructor();
          /** @deprecated */
          public static getChildMeasureSpec(param0: number, param1: number, param2: number, param3: boolean): number;
          public addView(param0: globalAndroid.view.View): void;
          public getWidthMode(): number;
          public getMinimumHeight(): number;
          /** @deprecated */
          public setAutoMeasureEnabled(param0: boolean): void;
          public onFocusSearchFailed(param0: globalAndroid.view.View, param1: number, param2: androidx.recyclerview.widget.RecyclerView.Recycler, param3: androidx.recyclerview.widget.RecyclerView.State): globalAndroid.view.View;
          /** @deprecated */
          public onRequestChildFocus(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
          public getPaddingTop(): number;
          public getHeightMode(): number;
          public canScrollVertically(): boolean;
          public offsetChildrenHorizontal(param0: number): void;
          public getHeight(): number;
          public attachView(param0: globalAndroid.view.View, param1: number): void;
          public getLayoutDirection(): number;
          public getPaddingBottom(): number;
          public onInitializeAccessibilityNodeInfoForItem(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State, param2: globalAndroid.view.View, param3: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
          public offsetChildrenVertical(param0: number): void;
          public requestChildRectangleOnScreen(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.View, param2: globalAndroid.graphics.Rect, param3: boolean, param4: boolean): boolean;
          public getChildAt(param0: number): globalAndroid.view.View;
          public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
          public scrollVerticallyBy(param0: number, param1: androidx.recyclerview.widget.RecyclerView.Recycler, param2: androidx.recyclerview.widget.RecyclerView.State): number;
          public requestChildRectangleOnScreen(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.View, param2: globalAndroid.graphics.Rect, param3: boolean): boolean;
          public onSaveInstanceState(): globalAndroid.os.Parcelable;
          public findContainingItemView(param0: globalAndroid.view.View): globalAndroid.view.View;
          public getDecoratedLeft(param0: globalAndroid.view.View): number;
          public onItemsUpdated(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number, param3: any): void;
          public computeHorizontalScrollOffset(param0: androidx.recyclerview.widget.RecyclerView.State): number;
          public assertNotInLayoutOrScroll(param0: string): void;
          public computeVerticalScrollExtent(param0: androidx.recyclerview.widget.RecyclerView.State): number;
          public layoutDecorated(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
          public computeVerticalScrollRange(param0: androidx.recyclerview.widget.RecyclerView.State): number;
          public findViewByPosition(param0: number): globalAndroid.view.View;
          public getDecoratedMeasuredHeight(param0: globalAndroid.view.View): number;
          public layoutDecoratedWithMargins(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
          public onInitializeAccessibilityEvent(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State, param2: globalAndroid.view.accessibility.AccessibilityEvent): void;
          public requestLayout(): void;
          public getClipToPadding(): boolean;
          public requestSimpleAnimationsInNextLayout(): void;
          public getWidth(): number;
          public removeAndRecycleView(param0: globalAndroid.view.View, param1: androidx.recyclerview.widget.RecyclerView.Recycler): void;
          public removeViewAt(param0: number): void;
          public computeHorizontalScrollRange(param0: androidx.recyclerview.widget.RecyclerView.State): number;
          public removeCallbacks(param0: java.lang.Runnable): boolean;
          public onInitializeAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
          public onDetachedFromWindow(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.Recycler): void;
          public getFocusedChild(): globalAndroid.view.View;
          public getBottomDecorationHeight(param0: globalAndroid.view.View): number;
          public getChildCount(): number;
          public removeAndRecycleAllViews(param0: androidx.recyclerview.widget.RecyclerView.Recycler): void;
          public getRowCountForAccessibility(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State): number;
          public getDecoratedRight(param0: globalAndroid.view.View): number;
          public onItemsRemoved(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): void;
          public getSelectionModeForAccessibility(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State): number;
          public moveView(param0: number, param1: number): void;
          public startSmoothScroll(param0: androidx.recyclerview.widget.RecyclerView.SmoothScroller): void;
          public getPaddingLeft(): number;
          public measureChild(param0: globalAndroid.view.View, param1: number, param2: number): void;
          public static getProperties(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number): androidx.recyclerview.widget.RecyclerView.LayoutManager.Properties;
          public setMeasuredDimension(param0: globalAndroid.graphics.Rect, param1: number, param2: number): void;
          public generateDefaultLayoutParams(): androidx.recyclerview.widget.RecyclerView.LayoutParams;
          public getRightDecorationWidth(param0: globalAndroid.view.View): number;
          public onAttachedToWindow(param0: androidx.recyclerview.widget.RecyclerView): void;
          public setItemPrefetchEnabled(param0: boolean): void;
          public onAddFocusables(param0: androidx.recyclerview.widget.RecyclerView, param1: java.util.ArrayList<globalAndroid.view.View>, param2: number, param3: number): boolean;
          public getPaddingRight(): number;
          public onScrollStateChanged(param0: number): void;
          public onAdapterChanged(param0: androidx.recyclerview.widget.RecyclerView.Adapter<any>, param1: androidx.recyclerview.widget.RecyclerView.Adapter<any>): void;
          public checkLayoutParams(param0: androidx.recyclerview.widget.RecyclerView.LayoutParams): boolean;
          public ignoreView(param0: globalAndroid.view.View): void;
          public collectAdjacentPrefetchPositions(param0: number, param1: number, param2: androidx.recyclerview.widget.RecyclerView.State, param3: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
          public removeDetachedView(param0: globalAndroid.view.View): void;
          public measureChildWithMargins(param0: globalAndroid.view.View, param1: number, param2: number): void;
          public getItemViewType(param0: globalAndroid.view.View): number;
          public isViewPartiallyVisible(param0: globalAndroid.view.View, param1: boolean, param2: boolean): boolean;
          public onItemsMoved(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number, param3: number): void;
          public onMeasure(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State, param2: number, param3: number): void;
          public performAccessibilityAction(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State, param2: number, param3: globalAndroid.os.Bundle): boolean;
          public canScrollHorizontally(): boolean;
          public removeAndRecycleViewAt(param0: number, param1: androidx.recyclerview.widget.RecyclerView.Recycler): void;
          public isMeasurementCacheEnabled(): boolean;
          public scrollHorizontallyBy(param0: number, param1: androidx.recyclerview.widget.RecyclerView.Recycler, param2: androidx.recyclerview.widget.RecyclerView.State): number;
          public getPaddingStart(): number;
          public getPaddingEnd(): number;
          public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): androidx.recyclerview.widget.RecyclerView.LayoutParams;
          public addDisappearingView(param0: globalAndroid.view.View, param1: number): void;
          public hasFocus(): boolean;
          public collectInitialPrefetchPositions(param0: number, param1: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
          public isAttachedToWindow(): boolean;
          public getDecoratedBottom(param0: globalAndroid.view.View): number;
          public isFocused(): boolean;
          public setMeasurementCacheEnabled(param0: boolean): void;
          public isLayoutHierarchical(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State): boolean;
          public isSmoothScrolling(): boolean;
          public getBaseline(): number;
          public stopIgnoringView(param0: globalAndroid.view.View): void;
          public performAccessibilityActionForItem(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State, param2: globalAndroid.view.View, param3: number, param4: globalAndroid.os.Bundle): boolean;
          public onLayoutCompleted(param0: androidx.recyclerview.widget.RecyclerView.State): void;
          public getDecoratedTop(param0: globalAndroid.view.View): number;
          public detachAndScrapView(param0: globalAndroid.view.View, param1: androidx.recyclerview.widget.RecyclerView.Recycler): void;
          public generateLayoutParams(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.recyclerview.widget.RecyclerView.LayoutParams;
          public addView(param0: globalAndroid.view.View, param1: number): void;
          public getTopDecorationHeight(param0: globalAndroid.view.View): number;
          public attachView(param0: globalAndroid.view.View): void;
          /** @deprecated */
          public onDetachedFromWindow(param0: androidx.recyclerview.widget.RecyclerView): void;
          public getDecoratedMeasuredWidth(param0: globalAndroid.view.View): number;
          public onItemsUpdated(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): void;
          public detachView(param0: globalAndroid.view.View): void;
          public attachView(param0: globalAndroid.view.View, param1: number, param2: androidx.recyclerview.widget.RecyclerView.LayoutParams): void;
          public removeView(param0: globalAndroid.view.View): void;
          public calculateItemDecorationsForChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
          public onLayoutChildren(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State): void;
          public removeAllViews(): void;
          public postOnAnimation(param0: java.lang.Runnable): void;
          public assertInLayoutOrScroll(param0: string): void;
          public getPosition(param0: globalAndroid.view.View): number;
          public getColumnCountForAccessibility(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State): number;
          public getItemCount(): number;
          public detachViewAt(param0: number): void;
          public isItemPrefetchEnabled(): boolean;
          public smoothScrollToPosition(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.State, param2: number): void;
          public onItemsChanged(param0: androidx.recyclerview.widget.RecyclerView): void;
          public computeHorizontalScrollExtent(param0: androidx.recyclerview.widget.RecyclerView.State): number;
          public static chooseSize(param0: number, param1: number, param2: number): number;
          public endAnimation(param0: globalAndroid.view.View): void;
          public addDisappearingView(param0: globalAndroid.view.View): void;
          public detachAndScrapAttachedViews(param0: androidx.recyclerview.widget.RecyclerView.Recycler): void;
          public onRequestChildFocus(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.State, param2: globalAndroid.view.View, param3: globalAndroid.view.View): boolean;
          public computeVerticalScrollOffset(param0: androidx.recyclerview.widget.RecyclerView.State): number;
          public static getChildMeasureSpec(param0: number, param1: number, param2: number, param3: number, param4: boolean): number;
        }
        export module LayoutManager {
          export class LayoutPrefetchRegistry {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry>;
            /**
             * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$LayoutManager$LayoutPrefetchRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { addPosition(param0: number, param1: number): void });
            public constructor();
            public addPosition(param0: number, param1: number): void;
          }
          export class Properties {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.LayoutManager.Properties>;
            public orientation: number;
            public spanCount: number;
            public reverseLayout: boolean;
            public stackFromEnd: boolean;
            public constructor();
          }
        }
        export class LayoutParams {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.LayoutParams>;
          public isItemChanged(): boolean;
          public constructor(param0: androidx.recyclerview.widget.RecyclerView.LayoutParams);
          public isItemRemoved(): boolean;
          public viewNeedsUpdate(): boolean;
          public getBindingAdapterPosition(): number;
          /** @deprecated */
          public getViewPosition(): number;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public getViewLayoutPosition(): number;
          public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
          public constructor(param0: globalAndroid.view.ViewGroup.MarginLayoutParams);
          public getAbsoluteAdapterPosition(): number;
          /** @deprecated */
          public getViewAdapterPosition(): number;
          public constructor(param0: number, param1: number);
          public isViewInvalid(): boolean;
        }
        export class OnChildAttachStateChangeListener {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.OnChildAttachStateChangeListener>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$OnChildAttachStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onChildViewAttachedToWindow(param0: globalAndroid.view.View): void; onChildViewDetachedFromWindow(param0: globalAndroid.view.View): void });
          public constructor();
          public onChildViewAttachedToWindow(param0: globalAndroid.view.View): void;
          public onChildViewDetachedFromWindow(param0: globalAndroid.view.View): void;
        }
        export abstract class OnFlingListener {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.OnFlingListener>;
          public constructor();
          public onFling(param0: number, param1: number): boolean;
        }
        export class OnItemTouchListener {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.OnItemTouchListener>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$OnItemTouchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onInterceptTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): boolean; onTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): void; onRequestDisallowInterceptTouchEvent(param0: boolean): void });
          public constructor();
          public onRequestDisallowInterceptTouchEvent(param0: boolean): void;
          public onInterceptTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): boolean;
          public onTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): void;
        }
        export abstract class OnScrollListener {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.OnScrollListener>;
          public onScrolled(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): void;
          public constructor();
          public onScrollStateChanged(param0: androidx.recyclerview.widget.RecyclerView, param1: number): void;
        }
        export class Orientation {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.Orientation>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$Orientation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
        export class RecycledViewPool {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.RecycledViewPool>;
          public getRecycledViewCount(param0: number): number;
          public putRecycledView(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
          public getRecycledView(param0: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
          public constructor();
          public clear(): void;
          public setMaxRecycledViews(param0: number, param1: number): void;
        }
        export module RecycledViewPool {
          export class ScrapData {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.RecycledViewPool.ScrapData>;
          }
        }
        export class Recycler {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.Recycler>;
          public getScrapList(): java.util.List<androidx.recyclerview.widget.RecyclerView.ViewHolder>;
          public setViewCacheSize(param0: number): void;
          public clear(): void;
          public constructor(param0: androidx.recyclerview.widget.RecyclerView);
          public recycleView(param0: globalAndroid.view.View): void;
          public bindViewToPosition(param0: globalAndroid.view.View, param1: number): void;
          public getViewForPosition(param0: number): globalAndroid.view.View;
          public convertPreLayoutPositionToPostLayout(param0: number): number;
        }
        export class RecyclerListener {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.RecyclerListener>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$RecyclerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onViewRecycled(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void });
          public constructor();
          public onViewRecycled(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        }
        export class RecyclerViewDataObserver extends androidx.recyclerview.widget.RecyclerView.AdapterDataObserver {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.RecyclerViewDataObserver>;
          public onChanged(): void;
          public onItemRangeMoved(param0: number, param1: number, param2: number): void;
          public onItemRangeChanged(param0: number, param1: number, param2: any): void;
          public onStateRestorationPolicyChanged(): void;
          public onItemRangeChanged(param0: number, param1: number): void;
          public onItemRangeRemoved(param0: number, param1: number): void;
          public onItemRangeInserted(param0: number, param1: number): void;
        }
        export class SavedState {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.SavedState>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.recyclerview.widget.RecyclerView.SavedState>;
          public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
        }
        export class SimpleOnItemTouchListener extends androidx.recyclerview.widget.RecyclerView.OnItemTouchListener {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.SimpleOnItemTouchListener>;
          public onRequestDisallowInterceptTouchEvent(param0: boolean): void;
          public constructor();
          public onInterceptTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): boolean;
          public onTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.view.MotionEvent): void;
        }
        export abstract class SmoothScroller {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.SmoothScroller>;
          public getTargetPosition(): number;
          public onSeekTargetStep(param0: number, param1: number, param2: androidx.recyclerview.widget.RecyclerView.State, param3: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
          public getChildCount(): number;
          public onChildAttachedToWindow(param0: globalAndroid.view.View): void;
          /** @deprecated */
          public instantScrollToPosition(param0: number): void;
          public onStart(): void;
          public computeScrollVectorForPosition(param0: number): globalAndroid.graphics.PointF;
          public getLayoutManager(): androidx.recyclerview.widget.RecyclerView.LayoutManager;
          public findViewByPosition(param0: number): globalAndroid.view.View;
          public onTargetFound(param0: globalAndroid.view.View, param1: androidx.recyclerview.widget.RecyclerView.State, param2: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
          public constructor();
          public setTargetPosition(param0: number): void;
          public isPendingInitialRun(): boolean;
          public normalize(param0: globalAndroid.graphics.PointF): void;
          public isRunning(): boolean;
          public getChildPosition(param0: globalAndroid.view.View): number;
          public stop(): void;
          public onStop(): void;
        }
        export module SmoothScroller {
          export class Action {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action>;
            public static UNDEFINED_DURATION: number;
            public setDy(param0: number): void;
            public getInterpolator(): globalAndroid.view.animation.Interpolator;
            public setDx(param0: number): void;
            public getDuration(): number;
            public setInterpolator(param0: globalAndroid.view.animation.Interpolator): void;
            public jumpTo(param0: number): void;
            public getDx(): number;
            public getDy(): number;
            public constructor(param0: number, param1: number, param2: number);
            public setDuration(param0: number): void;
            public constructor(param0: number, param1: number);
            public update(param0: number, param1: number, param2: number, param3: globalAndroid.view.animation.Interpolator): void;
            public constructor(param0: number, param1: number, param2: number, param3: globalAndroid.view.animation.Interpolator);
          }
          export class ScrollVectorProvider {
            public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.SmoothScroller.ScrollVectorProvider>;
            /**
             * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$SmoothScroller$ScrollVectorProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { computeScrollVectorForPosition(param0: number): globalAndroid.graphics.PointF });
            public constructor();
            public computeScrollVectorForPosition(param0: number): globalAndroid.graphics.PointF;
          }
        }
        export class State {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.State>;
          public getRemainingScrollHorizontal(): number;
          public isMeasuring(): boolean;
          public put(param0: number, param1: any): void;
          public willRunSimpleAnimations(): boolean;
          public didStructureChange(): boolean;
          public isPreLayout(): boolean;
          public willRunPredictiveAnimations(): boolean;
          public getRemainingScrollVertical(): number;
          public toString(): string;
          public constructor();
          public hasTargetScrollPosition(): boolean;
          public getTargetScrollPosition(): number;
          public getItemCount(): number;
          public get(param0: number): any;
          public remove(param0: number): void;
        }
        export class StretchEdgeEffectFactory extends androidx.recyclerview.widget.RecyclerView.EdgeEffectFactory {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.StretchEdgeEffectFactory>;
          public createEdgeEffect(param0: androidx.recyclerview.widget.RecyclerView, param1: number): globalAndroid.widget.EdgeEffect;
        }
        export abstract class ViewCacheExtension {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ViewCacheExtension>;
          public constructor();
          public getViewForPositionAndType(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: number, param2: number): globalAndroid.view.View;
        }
        export class ViewFlinger {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ViewFlinger>;
          public fling(param0: number, param1: number): void;
          public smoothScrollBy(param0: number, param1: number, param2: number, param3: globalAndroid.view.animation.Interpolator): void;
          public run(): void;
          public stop(): void;
        }
        export abstract class ViewHolder {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ViewHolder>;
          public itemView: globalAndroid.view.View;
          public getBindingAdapterPosition(): number;
          public getItemId(): number;
          /** @deprecated */
          public getAdapterPosition(): number;
          public getLayoutPosition(): number;
          public isRecyclable(): boolean;
          public getItemViewType(): number;
          public setIsRecyclable(param0: boolean): void;
          public toString(): string;
          public constructor(param0: globalAndroid.view.View);
          /** @deprecated */
          public getPosition(): number;
          public getAbsoluteAdapterPosition(): number;
          public getBindingAdapter(): androidx.recyclerview.widget.RecyclerView.Adapter<any>;
          public getOldPosition(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class RecyclerViewAccessibilityDelegate {
        public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate>;
        public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
        public onInitializeAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): void;
        public constructor(param0: androidx.recyclerview.widget.RecyclerView);
        public getItemDelegate(): androidx.core.view.AccessibilityDelegateCompat;
        public performAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
      }
      export module RecyclerViewAccessibilityDelegate {
        export class ItemDelegate {
          public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate.ItemDelegate>;
          public onPopulateAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): void;
          public constructor(param0: androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate);
          public onInitializeAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): void;
          public onRequestSendAccessibilityEvent(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
          public sendAccessibilityEventUnchecked(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): void;
          public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
          public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
          public sendAccessibilityEvent(param0: globalAndroid.view.View, param1: number): void;
          public performAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
          public getAccessibilityNodeProvider(param0: globalAndroid.view.View): androidx.core.view.accessibility.AccessibilityNodeProviderCompat;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ScrollbarHelper {
        public static class: java.lang.Class<androidx.recyclerview.widget.ScrollbarHelper>;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export abstract class SimpleItemAnimator extends androidx.recyclerview.widget.RecyclerView.ItemAnimator {
        public static class: java.lang.Class<androidx.recyclerview.widget.SimpleItemAnimator>;
        public onAddStarting(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public animateAdd(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
        public onChangeFinished(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: boolean): void;
        public dispatchRemoveStarting(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public constructor();
        public dispatchAddFinished(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public onMoveFinished(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public dispatchMoveStarting(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public animatePersistence(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
        public onRemoveFinished(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public animateChange(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: number, param3: number, param4: number, param5: number): boolean;
        public dispatchChangeFinished(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: boolean): void;
        public dispatchChangeStarting(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: boolean): void;
        public onAddFinished(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public dispatchMoveFinished(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public onRemoveStarting(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public onMoveStarting(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public dispatchAddStarting(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public onChangeStarting(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: boolean): void;
        public canReuseUpdatedViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
        public setSupportsChangeAnimations(param0: boolean): void;
        public dispatchRemoveFinished(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        public canReuseUpdatedViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: java.util.List<any>): boolean;
        public animateRemove(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
        public animateDisappearance(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
        public getSupportsChangeAnimations(): boolean;
        public animateChange(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param3: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
        public animateAppearance(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
        public animateMove(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number, param2: number, param3: number, param4: number): boolean;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export abstract class SnapHelper extends androidx.recyclerview.widget.RecyclerView.OnFlingListener {
        public static class: java.lang.Class<androidx.recyclerview.widget.SnapHelper>;
        public calculateDistanceToFinalSnap(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager, param1: globalAndroid.view.View): androidNative.Array<number>;
        public attachToRecyclerView(param0: androidx.recyclerview.widget.RecyclerView): void;
        public findSnapView(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager): globalAndroid.view.View;
        /** @deprecated */
        public createSnapScroller(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager): androidx.recyclerview.widget.LinearSmoothScroller;
        public calculateScrollDistance(param0: number, param1: number): androidNative.Array<number>;
        public onFling(param0: number, param1: number): boolean;
        public findTargetSnapPosition(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager, param1: number, param2: number): number;
        public constructor();
        public createScroller(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager): androidx.recyclerview.widget.RecyclerView.SmoothScroller;
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class SortedList<T> extends java.lang.Object {
        public static class: java.lang.Class<androidx.recyclerview.widget.SortedList<any>>;
        public static INVALID_POSITION: number;
        public replaceAll(param0: androidNative.Array<T>, param1: boolean): void;
        public constructor(param0: java.lang.Class<T>, param1: androidx.recyclerview.widget.SortedList.Callback<T>);
        public addAll(param0: androidNative.Array<T>, param1: boolean): void;
        public replaceAll(param0: androidNative.Array<T>): void;
        public remove(param0: T): boolean;
        public indexOf(param0: T): number;
        public updateItemAt(param0: number, param1: T): void;
        public get(param0: number): T;
        public size(): number;
        public addAll(param0: java.util.Collection<T>): void;
        public addAll(param0: androidNative.Array<T>): void;
        public recalculatePositionOfItemAt(param0: number): void;
        public endBatchedUpdates(): void;
        public removeItemAt(param0: number): T;
        public add(param0: T): number;
        public clear(): void;
        public replaceAll(param0: java.util.Collection<T>): void;
        public constructor(param0: java.lang.Class<T>, param1: androidx.recyclerview.widget.SortedList.Callback<T>, param2: number);
        public beginBatchedUpdates(): void;
      }
      export module SortedList {
        export class BatchedCallback<T2> extends androidx.recyclerview.widget.SortedList.Callback<any> {
          public static class: java.lang.Class<androidx.recyclerview.widget.SortedList.BatchedCallback<any>>;
          public compare(param0: any, param1: any): number;
          public getChangePayload(param0: any, param1: any): any;
          public constructor(param0: androidx.recyclerview.widget.SortedList.Callback<any>);
          public onChanged(param0: number, param1: number): void;
          public constructor();
          public onRemoved(param0: number, param1: number): void;
          public areItemsTheSame(param0: any, param1: any): boolean;
          public areContentsTheSame(param0: any, param1: any): boolean;
          public onInserted(param0: number, param1: number): void;
          public dispatchLastEvent(): void;
          public onChanged(param0: number, param1: number, param2: any): void;
          public onMoved(param0: number, param1: number): void;
        }
        export abstract class Callback<T2> extends java.lang.Object {
          public static class: java.lang.Class<androidx.recyclerview.widget.SortedList.Callback<any>>;
          public compare(param0: T2, param1: T2): number;
          public areItemsTheSame(param0: T2, param1: T2): boolean;
          public onChanged(param0: number, param1: number): void;
          public areContentsTheSame(param0: T2, param1: T2): boolean;
          public constructor();
          public getChangePayload(param0: T2, param1: T2): any;
          public onRemoved(param0: number, param1: number): void;
          public onInserted(param0: number, param1: number): void;
          public onChanged(param0: number, param1: number, param2: any): void;
          public onMoved(param0: number, param1: number): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export abstract class SortedListAdapterCallback<T2> extends androidx.recyclerview.widget.SortedList.Callback<any> {
        public static class: java.lang.Class<androidx.recyclerview.widget.SortedListAdapterCallback<any>>;
        public onInserted(param0: number, param1: number): void;
        public constructor(param0: androidx.recyclerview.widget.RecyclerView.Adapter<any>);
        public onChanged(param0: number, param1: number): void;
        public onChanged(param0: number, param1: number, param2: any): void;
        public onMoved(param0: number, param1: number): void;
        public onRemoved(param0: number, param1: number): void;
        public constructor();
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class StableIdStorage {
        public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage>;
        /**
         * Constructs a new instance of the androidx.recyclerview.widget.StableIdStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { createStableIdLookup(): androidx.recyclerview.widget.StableIdStorage.StableIdLookup });
        public constructor();
        public createStableIdLookup(): androidx.recyclerview.widget.StableIdStorage.StableIdLookup;
      }
      export module StableIdStorage {
        export class IsolatedStableIdStorage extends androidx.recyclerview.widget.StableIdStorage {
          public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage.IsolatedStableIdStorage>;
          public constructor();
          public createStableIdLookup(): androidx.recyclerview.widget.StableIdStorage.StableIdLookup;
        }
        export module IsolatedStableIdStorage {
          export class WrapperStableIdLookup extends androidx.recyclerview.widget.StableIdStorage.StableIdLookup {
            public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage.IsolatedStableIdStorage.WrapperStableIdLookup>;
            public localToGlobal(param0: number): number;
          }
        }
        export class NoStableIdStorage extends androidx.recyclerview.widget.StableIdStorage {
          public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage.NoStableIdStorage>;
          public constructor();
          public createStableIdLookup(): androidx.recyclerview.widget.StableIdStorage.StableIdLookup;
        }
        export class SharedPoolStableIdStorage extends androidx.recyclerview.widget.StableIdStorage {
          public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage.SharedPoolStableIdStorage>;
          public constructor();
          public createStableIdLookup(): androidx.recyclerview.widget.StableIdStorage.StableIdLookup;
        }
        export class StableIdLookup {
          public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage.StableIdLookup>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.StableIdStorage$StableIdLookup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { localToGlobal(param0: number): number });
          public constructor();
          public localToGlobal(param0: number): number;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class StaggeredGridLayoutManager extends androidx.recyclerview.widget.RecyclerView.LayoutManager implements androidx.recyclerview.widget.RecyclerView.SmoothScroller.ScrollVectorProvider {
        public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager>;
        public static HORIZONTAL: number;
        public static VERTICAL: number;
        public static GAP_HANDLING_NONE: number;
        public static GAP_HANDLING_LAZY: number;
        public static GAP_HANDLING_MOVE_ITEMS_BETWEEN_SPANS: number;
        public constructor(param0: number, param1: number);
        public getReverseLayout(): boolean;
        public computeHorizontalScrollOffset(param0: androidx.recyclerview.widget.RecyclerView.State): number;
        public computeVerticalScrollRange(param0: androidx.recyclerview.widget.RecyclerView.State): number;
        public computeVerticalScrollOffset(param0: androidx.recyclerview.widget.RecyclerView.State): number;
        public onItemsChanged(param0: androidx.recyclerview.widget.RecyclerView): void;
        public smoothScrollToPosition(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.State, param2: number): void;
        public constructor();
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
        public computeHorizontalScrollExtent(param0: androidx.recyclerview.widget.RecyclerView.State): number;
        public onItemsUpdated(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number, param3: any): void;
        /** @deprecated */
        public onDetachedFromWindow(param0: androidx.recyclerview.widget.RecyclerView): void;
        public canScrollHorizontally(): boolean;
        public isAutoMeasureEnabled(): boolean;
        public computeVerticalScrollExtent(param0: androidx.recyclerview.widget.RecyclerView.State): number;
        public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
        public generateDefaultLayoutParams(): androidx.recyclerview.widget.RecyclerView.LayoutParams;
        public onItemsRemoved(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): void;
        public canScrollVertically(): boolean;
        public invalidateSpanAssignments(): void;
        public checkLayoutParams(param0: androidx.recyclerview.widget.RecyclerView.LayoutParams): boolean;
        public setMeasuredDimension(param0: globalAndroid.graphics.Rect, param1: number, param2: number): void;
        public onItemsUpdated(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): void;
        public scrollToPositionWithOffset(param0: number, param1: number): void;
        public computeScrollVectorForPosition(param0: number): globalAndroid.graphics.PointF;
        public findFirstVisibleItemPositions(param0: androidNative.Array<number>): androidNative.Array<number>;
        public onAdapterChanged(param0: androidx.recyclerview.widget.RecyclerView.Adapter<any>, param1: androidx.recyclerview.widget.RecyclerView.Adapter<any>): void;
        public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): androidx.recyclerview.widget.RecyclerView.LayoutParams;
        public collectAdjacentPrefetchPositions(param0: number, param1: number, param2: androidx.recyclerview.widget.RecyclerView.State, param3: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
        public findLastCompletelyVisibleItemPositions(param0: androidNative.Array<number>): androidNative.Array<number>;
        public getGapStrategy(): number;
        public setMeasuredDimension(param0: number, param1: number): void;
        public getSpanCount(): number;
        public computeHorizontalScrollRange(param0: androidx.recyclerview.widget.RecyclerView.State): number;
        public onInitializeAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
        public offsetChildrenHorizontal(param0: number): void;
        public scrollVerticallyBy(param0: number, param1: androidx.recyclerview.widget.RecyclerView.Recycler, param2: androidx.recyclerview.widget.RecyclerView.State): number;
        public getOrientation(): number;
        public findFirstCompletelyVisibleItemPositions(param0: androidNative.Array<number>): androidNative.Array<number>;
        public setReverseLayout(param0: boolean): void;
        public onSaveInstanceState(): globalAndroid.os.Parcelable;
        public onItemsAdded(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): void;
        public setOrientation(param0: number): void;
        public offsetChildrenVertical(param0: number): void;
        public supportsPredictiveItemAnimations(): boolean;
        public onFocusSearchFailed(param0: globalAndroid.view.View, param1: number, param2: androidx.recyclerview.widget.RecyclerView.Recycler, param3: androidx.recyclerview.widget.RecyclerView.State): globalAndroid.view.View;
        public findLastVisibleItemPositions(param0: androidNative.Array<number>): androidNative.Array<number>;
        public onInitializeAccessibilityEvent(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State, param2: globalAndroid.view.accessibility.AccessibilityEvent): void;
        public scrollHorizontallyBy(param0: number, param1: androidx.recyclerview.widget.RecyclerView.Recycler, param2: androidx.recyclerview.widget.RecyclerView.State): number;
        public setSpanCount(param0: number): void;
        public scrollToPosition(param0: number): void;
        public onScrollStateChanged(param0: number): void;
        public setGapStrategy(param0: number): void;
        public assertNotInLayoutOrScroll(param0: string): void;
        public generateLayoutParams(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.recyclerview.widget.RecyclerView.LayoutParams;
        public onDetachedFromWindow(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.Recycler): void;
        public onLayoutCompleted(param0: androidx.recyclerview.widget.RecyclerView.State): void;
        public onLayoutChildren(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State): void;
        public onItemsMoved(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number, param3: number): void;
      }
      export module StaggeredGridLayoutManager {
        export class AnchorInfo {
          public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.AnchorInfo>;
        }
        export class LayoutParams extends androidx.recyclerview.widget.RecyclerView.LayoutParams {
          public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.LayoutParams>;
          public static INVALID_SPAN_ID: number;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public constructor(param0: androidx.recyclerview.widget.RecyclerView.LayoutParams);
          public setFullSpan(param0: boolean): void;
          public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
          public getSpanIndex(): number;
          public constructor(param0: globalAndroid.view.ViewGroup.MarginLayoutParams);
          public isFullSpan(): boolean;
          public constructor(param0: number, param1: number);
        }
        export class LazySpanLookup {
          public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup>;
          public getFirstFullSpanItemInRange(param0: number, param1: number, param2: number, param3: boolean): androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem;
          public addFullSpanItem(param0: androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem): void;
          public getFullSpanItem(param0: number): androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem;
        }
        export module LazySpanLookup {
          export class FullSpanItem {
            public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem>;
            public describeContents(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public toString(): string;
          }
        }
        export class SavedState {
          public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.SavedState>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.recyclerview.widget.StaggeredGridLayoutManager.SavedState>;
          public constructor();
          public constructor(param0: androidx.recyclerview.widget.StaggeredGridLayoutManager.SavedState);
          public describeContents(): number;
          public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
        }
        export class Span {
          public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.Span>;
          public findFirstVisibleItemPosition(): number;
          public findLastPartiallyVisibleItemPosition(): number;
          public findLastVisibleItemPosition(): number;
          public getFocusableViewAfter(param0: number, param1: number): globalAndroid.view.View;
          public findFirstPartiallyVisibleItemPosition(): number;
          public findFirstCompletelyVisibleItemPosition(): number;
          public findLastCompletelyVisibleItemPosition(): number;
          public getDeletedSize(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ThreadUtil<T> extends java.lang.Object {
        public static class: java.lang.Class<androidx.recyclerview.widget.ThreadUtil<any>>;
        /**
         * Constructs a new instance of the androidx.recyclerview.widget.ThreadUtil<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getMainThreadProxy(param0: androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<T>): androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<T>; getBackgroundProxy(param0: androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<T>): androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<T> });
        public constructor();
        public getBackgroundProxy(param0: androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<T>): androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<T>;
        public getMainThreadProxy(param0: androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<T>): androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<T>;
      }
      export module ThreadUtil {
        export class BackgroundCallback<T> extends java.lang.Object {
          public static class: java.lang.Class<androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<any>>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.ThreadUtil$BackgroundCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { refresh(param0: number): void; updateRange(param0: number, param1: number, param2: number, param3: number, param4: number): void; loadTile(param0: number, param1: number): void; recycleTile(param0: androidx.recyclerview.widget.TileList.Tile<T>): void });
          public constructor();
          public recycleTile(param0: androidx.recyclerview.widget.TileList.Tile<T>): void;
          public updateRange(param0: number, param1: number, param2: number, param3: number, param4: number): void;
          public refresh(param0: number): void;
          public loadTile(param0: number, param1: number): void;
        }
        export class MainThreadCallback<T> extends java.lang.Object {
          public static class: java.lang.Class<androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<any>>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.ThreadUtil$MainThreadCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { updateItemCount(param0: number, param1: number): void; addTile(param0: number, param1: androidx.recyclerview.widget.TileList.Tile<T>): void; removeTile(param0: number, param1: number): void });
          public constructor();
          public addTile(param0: number, param1: androidx.recyclerview.widget.TileList.Tile<T>): void;
          public removeTile(param0: number, param1: number): void;
          public updateItemCount(param0: number, param1: number): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class TileList<T> extends java.lang.Object {
        public static class: java.lang.Class<androidx.recyclerview.widget.TileList<any>>;
        public getItemAt(param0: number): T;
        public clear(): void;
        public getAtIndex(param0: number): androidx.recyclerview.widget.TileList.Tile<T>;
        public constructor(param0: number);
        public addOrReplace(param0: androidx.recyclerview.widget.TileList.Tile<T>): androidx.recyclerview.widget.TileList.Tile<T>;
        public removeAtPos(param0: number): androidx.recyclerview.widget.TileList.Tile<T>;
        public size(): number;
      }
      export module TileList {
        export class Tile<T> extends java.lang.Object {
          public static class: java.lang.Class<androidx.recyclerview.widget.TileList.Tile<any>>;
          public mItems: androidNative.Array<T>;
          public mStartPosition: number;
          public mItemCount: number;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ViewBoundsCheck {
        public static class: java.lang.Class<androidx.recyclerview.widget.ViewBoundsCheck>;
      }
      export module ViewBoundsCheck {
        export class BoundFlags {
          public static class: java.lang.Class<androidx.recyclerview.widget.ViewBoundsCheck.BoundFlags>;
        }
        export class Callback {
          public static class: java.lang.Class<androidx.recyclerview.widget.ViewBoundsCheck.Callback>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.ViewBoundsCheck$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getChildAt(param0: number): globalAndroid.view.View; getParentStart(): number; getParentEnd(): number; getChildStart(param0: globalAndroid.view.View): number; getChildEnd(param0: globalAndroid.view.View): number });
          public constructor();
          public getChildAt(param0: number): globalAndroid.view.View;
          public getChildStart(param0: globalAndroid.view.View): number;
          public getParentEnd(): number;
          public getChildEnd(param0: globalAndroid.view.View): number;
          public getParentStart(): number;
        }
        export class ViewBounds {
          public static class: java.lang.Class<androidx.recyclerview.widget.ViewBoundsCheck.ViewBounds>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.ViewBoundsCheck$ViewBounds interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ViewInfoStore {
        public static class: java.lang.Class<androidx.recyclerview.widget.ViewInfoStore>;
        public onViewDetached(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
      }
      export module ViewInfoStore {
        export class InfoRecord {
          public static class: java.lang.Class<androidx.recyclerview.widget.ViewInfoStore.InfoRecord>;
        }
        export class ProcessCallback {
          public static class: java.lang.Class<androidx.recyclerview.widget.ViewInfoStore.ProcessCallback>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.ViewInfoStore$ProcessCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            processDisappeared(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
            processAppeared(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
            processPersistent(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
            unused(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
          });
          public constructor();
          public processDisappeared(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
          public processAppeared(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
          public processPersistent(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
          public unused(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module widget {
      export class ViewTypeStorage {
        public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage>;
        /**
         * Constructs a new instance of the androidx.recyclerview.widget.ViewTypeStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getWrapperForGlobalType(param0: number): androidx.recyclerview.widget.NestedAdapterWrapper; createViewTypeWrapper(param0: androidx.recyclerview.widget.NestedAdapterWrapper): androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup });
        public constructor();
        public createViewTypeWrapper(param0: androidx.recyclerview.widget.NestedAdapterWrapper): androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup;
        public getWrapperForGlobalType(param0: number): androidx.recyclerview.widget.NestedAdapterWrapper;
      }
      export module ViewTypeStorage {
        export class IsolatedViewTypeStorage extends androidx.recyclerview.widget.ViewTypeStorage {
          public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage.IsolatedViewTypeStorage>;
          public getWrapperForGlobalType(param0: number): androidx.recyclerview.widget.NestedAdapterWrapper;
          public constructor();
          public createViewTypeWrapper(param0: androidx.recyclerview.widget.NestedAdapterWrapper): androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup;
        }
        export module IsolatedViewTypeStorage {
          export class WrapperViewTypeLookup extends androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup {
            public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage.IsolatedViewTypeStorage.WrapperViewTypeLookup>;
            public globalToLocal(param0: number): number;
            public localToGlobal(param0: number): number;
            public dispose(): void;
          }
        }
        export class SharedIdRangeViewTypeStorage extends androidx.recyclerview.widget.ViewTypeStorage {
          public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage.SharedIdRangeViewTypeStorage>;
          public getWrapperForGlobalType(param0: number): androidx.recyclerview.widget.NestedAdapterWrapper;
          public constructor();
          public createViewTypeWrapper(param0: androidx.recyclerview.widget.NestedAdapterWrapper): androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup;
        }
        export module SharedIdRangeViewTypeStorage {
          export class WrapperViewTypeLookup extends androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup {
            public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage.SharedIdRangeViewTypeStorage.WrapperViewTypeLookup>;
            public globalToLocal(param0: number): number;
            public localToGlobal(param0: number): number;
            public dispose(): void;
          }
        }
        export class ViewTypeLookup {
          public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup>;
          /**
           * Constructs a new instance of the androidx.recyclerview.widget.ViewTypeStorage$ViewTypeLookup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { localToGlobal(param0: number): number; globalToLocal(param0: number): number; dispose(): void });
          public constructor();
          public dispose(): void;
          public localToGlobal(param0: number): number;
          public globalToLocal(param0: number): number;
        }
      }
    }
  }
}

//Generics information:
//androidx.recyclerview.widget.AsyncDifferConfig:1
//androidx.recyclerview.widget.AsyncDifferConfig.Builder:1
//androidx.recyclerview.widget.AsyncListDiffer:1
//androidx.recyclerview.widget.AsyncListDiffer.ListListener:1
//androidx.recyclerview.widget.AsyncListUtil:1
//androidx.recyclerview.widget.AsyncListUtil.DataCallback:1
//androidx.recyclerview.widget.DiffUtil.ItemCallback:1
//androidx.recyclerview.widget.ListAdapter:2
//androidx.recyclerview.widget.MessageThreadUtil:1
//androidx.recyclerview.widget.RecyclerView.Adapter:1
//androidx.recyclerview.widget.SortedList:1
//androidx.recyclerview.widget.SortedList.BatchedCallback:1
//androidx.recyclerview.widget.SortedList.Callback:1
//androidx.recyclerview.widget.SortedListAdapterCallback:1
//androidx.recyclerview.widget.ThreadUtil:1
//androidx.recyclerview.widget.ThreadUtil.BackgroundCallback:1
//androidx.recyclerview.widget.ThreadUtil.MainThreadCallback:1
//androidx.recyclerview.widget.TileList:1
//androidx.recyclerview.widget.TileList.Tile:1
