import { Color, EventData, GestureTypes, GridLayout, Label, Observable, Screen, ScrollEventData, ScrollView, StackLayout, Utils, View, ViewBase } from "@nativescript/core";

@NativeClass()
export class WheelHorizontalPhotoEditViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
    public txt: android.widget.TextView;
    constructor(
        private view: android.view.View,
        private txtId: number,
    ) {
        super(view);
        this.txt = this.itemView.findViewById(txtId) as android.widget.TextView;
    }
}

@NativeClass()
export class WheelHorizontalAdapterPhotoEdit extends androidx.recyclerview.widget.RecyclerView.Adapter<WheelHorizontalPhotoEditViewHolder> {
    private TOTAL_DEGREES:number=360;
    private selectedPosition:number = androidx.recyclerview.widget.RecyclerView.NO_POSITION;

    constructor(
        private files: Array<string>,
    ) {
        super();
    }

    public getItemCount(): number {
        // if (this.files != null || this.files != undefined || this.files.length == 0) {
        //     return this.files.length;
        // }
        // return 0;

        return java.lang.Integer.MAX_VALUE;
    }

    public onCreateViewHolder(parent: android.view.ViewGroup, viewType: number): WheelHorizontalPhotoEditViewHolder {
        const textView = new android.widget.TextView(parent.getContext());
        textView.setLayoutParams(new android.view.ViewGroup.LayoutParams(
            android.view.ViewGroup.LayoutParams.WRAP_CONTENT,
            android.view.ViewGroup.LayoutParams.WRAP_CONTENT));
        textView.setGravity(android.view.Gravity.CENTER);
        textView.setId(android.view.View.generateViewId());
        textView.setTextSize(40);
        textView.setTextAlignment(android.widget.TextView.TEXT_ALIGNMENT_CENTER);
        textView.setTextColor(android.graphics.Color.WHITE);
        return new WheelHorizontalPhotoEditViewHolder(textView,textView.getId());
    }

    public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
    public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number, param2: java.util.List<any>): void;
    public onBindViewHolder(holder: WheelHorizontalPhotoEditViewHolder, position: number): void {
        try {
            const degree:number = position % this.TOTAL_DEGREES;
            holder.txt.setText("|");
        } catch (error) {
            console.log('se genero un error Glide ', error);
        }
    }

    public onDetachedFromRecyclerView(param0: androidx.recyclerview.widget.RecyclerView): void {
        super.onDetachedFromRecyclerView(param0);
    }

    public setSelectedPosition(selectedPosition: number): void {
        const previousSelectedPosition = this.selectedPosition;
        this.selectedPosition = selectedPosition % 360;  // Asegurar que esté en el rango 0-359

        // Notificar el cambio del ítem anterior y el nuevo ítem seleccionado
        this.notifyItemChanged(previousSelectedPosition + (java.lang.Integer.MAX_VALUE / 2) % 360);  // Normalizar la posición anterior
        this.notifyItemChanged(selectedPosition + (java.lang.Integer.MAX_VALUE / 2) % 360);  // Normalizar la nueva posición
        
    }
}


@NativeClass()
export class HorizontalSpaceItemDecoration extends androidx.recyclerview.widget.RecyclerView.ItemDecoration{
    constructor(
        private space:number,
    ){
        super();
    }

    public getItemOffsets(outRect: any, param1: unknown, param2: unknown, param3?: unknown): void {
        outRect.left = this.space;
        outRect.right = this.space;
    }
}

@NativeClass()
export class ScrollEventWheel extends androidx.recyclerview.widget.RecyclerView.OnScrollListener {
    constructor(private context: android.content.Context, private recyclerview: androidx.recyclerview.widget.RecyclerView, private scrollEvento: ScrollEvento) {
        super();
    }

    public onScrolled(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): void {
        super.onScrolled(param0, param1, param2);
        this.scrollEvento.onScrolled(param0, param1, param2);
    }

    public onScrollStateChanged(param0: androidx.recyclerview.widget.RecyclerView, param1: number): void {
        super.onScrollStateChanged(param0, param1);
        this.scrollEvento.onScrollStateChanged(param0, param1);
    }
}

export interface ScrollEvento {
    onScrolled(recyclerView: androidx.recyclerview.widget.RecyclerView, dx: number, dy: number): void;
    onScrollStateChanged(recyclerView: androidx.recyclerview.widget.RecyclerView, state: number): void;
}