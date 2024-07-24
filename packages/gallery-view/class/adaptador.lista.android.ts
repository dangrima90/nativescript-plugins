import { Application, Color, Utils } from '@nativescript/core';
import { CLog } from '../common';
import { IFileData } from '../interfaces/files.interface';

@NativeClass()
export class ViewHolderForListaAndrooid extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
  public img: android.widget.ImageView;
  public radio: android.widget.RadioButton;
  constructor(private view: android.view.View, private imgId: number, private radioId: number) {
    super(view);
    this.img = this.itemView.findViewById(imgId) as android.widget.ImageView;
    this.radio = this.itemView.findViewById(radioId) as android.widget.RadioButton;
  }
}

@NativeClass()
export class ListaAdaptadorForAndroid extends androidx.recyclerview.widget.RecyclerView.Adapter<ViewHolderForListaAndrooid> {
  private drawablePlaceholder: number = -1;
  constructor(private files: Array<IFileData>, private colorRadio: string) {
    super();
  }

  public getItemCount(): number {
    if (this.files != null || this.files != undefined || this.files.length == 0) {
      return this.files.length;
    }
    return 0;
  }

  public onCreateViewHolder(parent: android.view.ViewGroup, viewType: number): ViewHolderForListaAndrooid {
    const fl: android.widget.FrameLayout = new android.widget.FrameLayout(parent.getContext());
    fl.setLayoutParams(new android.widget.FrameLayout.LayoutParams(300, 250));
    const img: android.widget.ImageView = new android.widget.ImageView(parent.getContext());
    img.setId(android.view.View.generateViewId());
    img.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
    img.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
    const radiobtn: android.widget.RadioButton = new android.widget.RadioButton(parent.getContext());
    radiobtn.setLayoutParams(new android.view.ViewGroup.LayoutParams(100, 100));
    radiobtn.setId(android.view.View.generateViewId());
    radiobtn.setButtonTintList(android.content.res.ColorStateList.valueOf(new Color(this.colorRadio).android));

    fl.addView(img);
    fl.addView(radiobtn);
    fl.setPadding(1, 1, 1, 1);
    fl.setBackgroundColor(android.graphics.Color.BLACK);
    return new ViewHolderForListaAndrooid(fl, img.getId(), radiobtn.getId());
  }

  public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
  public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number, param2: java.util.List<any>): void;
  public onBindViewHolder(holder: ViewHolderForListaAndrooid, position: number): void {
    try {
      if (this.files[position].isSelected) {
        holder.radio.setChecked(true);
      }
      this.drawablePlaceholder = Utils.android.getApplicationContext().getResources().getIdentifier('error', 'drawable', Utils.android.getApplicationContext().getPackageName());
      com.squareup.picasso.Picasso.get().load(this.files[position].uri).resize(100, 100).networkPolicy(com.squareup.picasso.NetworkPolicy.OFFLINE, [com.squareup.picasso.NetworkPolicy.OFFLINE]).priority(com.squareup.picasso.Picasso.Priority.HIGH).config(android.graphics.Bitmap.Config.RGBA_F16).error(this.drawablePlaceholder).placeholder(this.drawablePlaceholder).centerInside().into(holder.img);
    } catch (error) {
      CLog('se genero un error Glide ', error);
    }
  }

  public onDetachedFromRecyclerView(param0: androidx.recyclerview.widget.RecyclerView): void {
    super.onDetachedFromRecyclerView(param0);
  }
}
