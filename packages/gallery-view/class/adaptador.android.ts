import { Color } from '@nativescript/core';
import { IFiles } from '../interfaces/files.interface';
import { CLog } from '../common';

@NativeClass()
export class SpinnerDataAdapter extends android.widget.BaseAdapter {
  private drawableError: number = -1;
  private drawablePlaceholder: number = -1;

  constructor(private files: Array<IFiles>, private context: android.content.Context, private bgColor: string, private textColor: string) {
    super();

    this.drawableError = context.getResources().getIdentifier('error', 'drawable', context.getPackageName());
    this.drawablePlaceholder = context.getResources().getIdentifier('images', 'drawable', context.getPackageName());
  }

  public getItemId(param0: number): number {
    return 0;
  }

  public getItem(param0: number) {
    this.files[param0];
  }

  public getCount(): number {
    return this.files.length;
  }

  public getView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View {
    const linearL: android.widget.LinearLayout = new android.widget.LinearLayout(this.context);
    const image: android.widget.ImageView = new android.widget.ImageView(this.context);
    const txt: android.widget.TextView = new android.widget.TextView(this.context);
    linearL.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
    linearL.setOrientation(android.widget.LinearLayout.HORIZONTAL);
    linearL.setGravity(android.view.Gravity.CENTER_VERTICAL);
    linearL.setBackgroundColor(new Color(this.bgColor).android);
    linearL.addView(image);

    txt.setText(java.lang.String.valueOf(` ${this.files[position].albunName}`));
    txt.setTextSize(19);
    txt.setTextColor(new Color(this.textColor).android);

    linearL.addView(txt);
    return linearL;
  }

  public getDropDownView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View {
    const linearL: android.widget.LinearLayout = new android.widget.LinearLayout(this.context);
    const image: android.widget.ImageView = new android.widget.ImageView(this.context);
    const txt: android.widget.TextView = new android.widget.TextView(this.context);
    linearL.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, 120));
    linearL.setOrientation(android.widget.LinearLayout.HORIZONTAL);
    linearL.setGravity(android.view.Gravity.CENTER_VERTICAL);
    linearL.setBackgroundColor(new Color(this.bgColor).android);
    image.setLayoutParams(new android.view.ViewGroup.LayoutParams(100, 100));
    com.squareup.picasso.Picasso.get().load(this.files[position].icon).resize(100, 100).networkPolicy(com.squareup.picasso.NetworkPolicy.OFFLINE, [com.squareup.picasso.NetworkPolicy.OFFLINE]).priority(com.squareup.picasso.Picasso.Priority.NORMAL).config(android.graphics.Bitmap.Config.RGBA_F16).error(this.drawablePlaceholder).placeholder(this.drawablePlaceholder).centerCrop().into(image);

    txt.setText(java.lang.String.valueOf(` ${this.files[position].albunName}`));
    txt.setTextSize(19);
    txt.setTextColor(new Color(this.textColor).android);
    linearL.addView(image);
    linearL.addView(txt);
    return linearL;
  }
}
