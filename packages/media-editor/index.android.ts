import { Color, Frame, Screen, ScrollEventData, ScrollView, Utils } from '@nativescript/core';
import { GetSetProperty, MediaEditorCommon } from './common';
import { RecyclerViewAdapterPhotoEdit } from './class/recyclervyew.adapter';
import { CustomCanvasView } from './class/canvas.android';
import { HorizontalSpaceItemDecoration, ScrollEventWheel, WheelHorizontalAdapterPhotoEdit } from './class/wheelhorizontal.android';

declare var wuilmerj24:any;

export class MediaEditor extends MediaEditorCommon {
    @GetSetProperty()
    files: Array<string>;
    private canvas:CustomCanvasView;
    private isFirtLoad:boolean=true;

    createNativeView(): Object {
        this.width=Screen.mainScreen.widthDIPs;
        this.height=Screen.mainScreen.heightDIPs;
        const linearLayout: android.widget.LinearLayout = new android.widget.LinearLayout(this._context);
        linearLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
        linearLayout.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
            android.view.ViewGroup.LayoutParams.MATCH_PARENT,
            android.view.ViewGroup.LayoutParams.MATCH_PARENT
        )); 
        linearLayout.setBackgroundColor(android.graphics.Color.BLACK);
        return linearLayout;
    }

    onLoaded(): void {
        super.onLoaded();
        const header: android.widget.LinearLayout = new android.widget.LinearLayout(this._context);
        header.setLayoutParams(
            new android.widget.LinearLayout.LayoutParams(
                android.view.ViewGroup.LayoutParams.MATCH_PARENT,
                0, 
                0.1
            )
        );
        const lista:androidx.recyclerview.widget.RecyclerView=this.createHeader();
        
        header.addView(lista);
        (this.nativeView as android.widget.LinearLayout).addView(header);

        const body: android.widget.LinearLayout = new android.widget.LinearLayout(this._context);
        body.setOrientation(android.widget.LinearLayout.VERTICAL);
        body.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
            android.view.ViewGroup.LayoutParams.MATCH_PARENT,
            0, 0.6
        )); 
        const canvas: CustomCanvasView = this.createBody();
        body.addView(canvas);
        (this.nativeView as android.widget.LinearLayout).addView(body);
        canvas.loadImage(this.files[0]);

        const footer: android.widget.LinearLayout = new android.widget.LinearLayout(this._context);
        footer.setOrientation(android.widget.LinearLayout.VERTICAL);
        footer.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
            android.view.ViewGroup.LayoutParams.MATCH_PARENT,
            0, 0.3
        )); 
        footer.addView(this.createFooter());
        (this.nativeView as android.widget.LinearLayout).addView(footer);
    }
    
    createHeader():androidx.recyclerview.widget.RecyclerView{
        const lista: androidx.recyclerview.widget.RecyclerView = new androidx.recyclerview.widget.RecyclerView(this._context);
        lista.setLayoutParams(new androidx.recyclerview.widget.RecyclerView.LayoutParams(androidx.recyclerview.widget.RecyclerView.LayoutParams.MATCH_PARENT, androidx.recyclerview.widget.RecyclerView.LayoutParams.MATCH_PARENT));
        const layout: androidx.recyclerview.widget.LinearLayoutManager = new androidx.recyclerview.widget.LinearLayoutManager(this._context);
        layout.setOrientation(androidx.recyclerview.widget.LinearLayoutManager.HORIZONTAL);
        lista.setLayoutManager(layout);
        const adaptador: RecyclerViewAdapterPhotoEdit = new RecyclerViewAdapterPhotoEdit(this.files);
        lista.setAdapter(adaptador);
        
        return lista;
    }

    createBody(): CustomCanvasView{
        this.canvas=new CustomCanvasView(this._context);
        this.canvas.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
            android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
            android.widget.LinearLayout.LayoutParams.MATCH_PARENT
        ));

        return this.canvas;
    }

    createFooter():android.widget.RelativeLayout{
        const relativeLayout: android.widget.RelativeLayout = new android.widget.RelativeLayout(this._context);
        const layoutParams: android.widget.RelativeLayout.LayoutParams = new android.widget.RelativeLayout.LayoutParams(
            android.widget.RelativeLayout.LayoutParams.MATCH_PARENT,
            android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT,
        );
        const items_wheel:Array<string>=new Array();
        for (let i:number = 0; i < 360; i++) {
            items_wheel.push("|");
        }

        const wheel: androidx.recyclerview.widget.RecyclerView = new androidx.recyclerview.widget.RecyclerView(this._context);
        wheel.setLayoutParams(new androidx.recyclerview.widget.RecyclerView.LayoutParams(
            androidx.recyclerview.widget.RecyclerView.LayoutParams.MATCH_PARENT,
            androidx.recyclerview.widget.RecyclerView.LayoutParams.WRAP_CONTENT,
        ));
        const layoutManager: androidx.recyclerview.widget.LinearLayoutManager = new androidx.recyclerview.widget.LinearLayoutManager(this._context, androidx.recyclerview.widget.LinearLayoutManager.HORIZONTAL,false);
        wheel.setLayoutManager(layoutManager);

        const adaptador: WheelHorizontalAdapterPhotoEdit = new WheelHorizontalAdapterPhotoEdit(items_wheel);
        
        wheel.setAdapter(adaptador);
        let startPosition:number=java.lang.Integer.MAX_VALUE / 2;
        startPosition-=startPosition % 360;
        wheel.scrollToPosition(startPosition);
        // adaptador.setSelectedPosition(startPosition);
        const self=this;
        wheel.addItemDecoration(new HorizontalSpaceItemDecoration(10));
        wheel.addOnScrollListener(new ScrollEventWheel(this._context,wheel,{
            onScrolled(recyclerView, dx, dy) {
                const currentDegree:number=self.getCurrentDegree(recyclerView,layoutManager);
                adaptador.setSelectedPosition(currentDegree);
                if (!self.isFirtLoad){
                    self.canvas.setRotation(currentDegree);
                }
                self.isFirtLoad=false;
            },
            onScrollStateChanged(recyclerView, state) {
                
            },
        }))
        relativeLayout.addView(wheel);        

        const txt: android.widget.TextView = new android.widget.TextView(this._context);
        txt.setText("|");
        txt.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));
        txt.setTextSize(40);
        txt.setTypeface(null,android.graphics.Typeface.BOLD);
        txt.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
        txt.setTextColor(android.graphics.Color.RED);
        const snapHelper: androidx.recyclerview.widget.SnapHelper = new androidx.recyclerview.widget.LinearSnapHelper();
        snapHelper.attachToRecyclerView(wheel);
        relativeLayout.addView(txt);     
        return relativeLayout;        
    }

    private getCurrentDegree(recyclerView:androidx.recyclerview.widget.RecyclerView,layoutManager:androidx.recyclerview.widget.LinearLayoutManager):number{
        let centerX:number = recyclerView.getWidth() / 2;  // Centro del RecyclerView
        let minDistance: number = java.lang.Integer.MAX_VALUE;
        let currentDegree: number = 0;

        // Iterar sobre los ítems visibles
        for (let i = 0; i < layoutManager.getChildCount(); i++) {
            const child:android.view.View = layoutManager.getChildAt(i);
            if (child != null) {
                let childCenterX = (child.getLeft() + child.getRight()) / 2;
                let distance = Math.abs(centerX - childCenterX);

                if (distance < minDistance) {
                    minDistance = distance;
                    currentDegree = layoutManager.getPosition(child) % 360;  // Mantener en el rango de 0 a 359
                }
            }
        }

        return currentDegree;
    }

}