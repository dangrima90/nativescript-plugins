@NativeClass()
export class RecyclerViewHolderPhotoEdit extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
    public img: android.widget.ImageView;
    constructor(
        private view: android.view.View, 
        private imgId: number,
    ) {
        super(view);
        this.img = this.itemView.findViewById(imgId) as android.widget.ImageView;
    }
}

@NativeClass()
export class RecyclerViewAdapterPhotoEdit extends androidx.recyclerview.widget.RecyclerView.Adapter<RecyclerViewHolderPhotoEdit> {
    constructor(
        private files: Array<string>, 
    ) {
        super();
    }

    public getItemCount(): number {
        if (this.files != null || this.files != undefined || this.files.length == 0) {
            return this.files.length;
        }
        return 0;
    }

    public onCreateViewHolder(parent: android.view.ViewGroup, viewType: number): RecyclerViewHolderPhotoEdit {
        const img: android.widget.ImageView = new android.widget.ImageView(parent.getContext());
        img.setId(android.view.View.generateViewId());
        img.setLayoutParams(new android.view.ViewGroup.LayoutParams(300,225));
        img.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
        return new RecyclerViewHolderPhotoEdit(img, img.getId());
    }

    public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
    public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number, param2: java.util.List<any>): void;
    public onBindViewHolder(holder: RecyclerViewHolderPhotoEdit, position: number): void {
        try {
            com.squareup.picasso.Picasso
            .get()
            .load(this.files[position])
            // .resize(100, 100)
            // .networkPolicy(
            //     com.squareup.picasso.NetworkPolicy.OFFLINE, 
            //     [
            //         com.squareup.picasso.NetworkPolicy.OFFLINE
            //     ]
            // )
            .priority(com.squareup.picasso.Picasso.Priority.HIGH)
            .config(android.graphics.Bitmap.Config.ARGB_8888)
            // .centerInside()
            .into(holder.img);
        } catch (error) {
            console.log('se genero un error Glide ', error);
        }
    }

    public onDetachedFromRecyclerView(param0: androidx.recyclerview.widget.RecyclerView): void {
        super.onDetachedFromRecyclerView(param0);
    }
}
