@NativeClass()
export class CustomCanvasView extends android.view.View{
    private bitmap: android.graphics.Bitmap;
    private paint: android.graphics.Paint;
    private gestureDetector:android.view.GestureDetector;
    private scaleGestureDetector: android.view.ScaleGestureDetector;
    constructor(
        private context:android.content.Context,
    ){
        super(context);
    }

    init(){
        this.paint = new android.graphics.Paint();
        this.gestureDetector = new android.view.GestureDetector(this.context, new android.view.GestureDetector.SimpleOnGestureListener())
        this.setBackgroundColor(android.graphics.Color.BLACK);
    }

    public loadImage(imageUrl:string): void{
        const self=this;
        com.squareup.picasso.Picasso
            .get()
            .load(imageUrl)
            .into(new com.squareup.picasso.Target({
                onBitmapFailed(param0, param1) {
                    
                },
                onBitmapLoaded(bitmap, from) {
                    self.bitmap=bitmap;
                    self.invalidate();
                },
                onPrepareLoad(param0) {
                    
                },
            }));
    }

    public onDraw(canvas: android.graphics.Canvas): void {
        if (this.bitmap != null) {
            // Dibuja la imagen escalada para que se ajuste al tamaño del canvas
            canvas.drawBitmap(this.bitmap, null,
                new android.graphics.Rect(0, 0, this.getWidth(), this.getHeight()), this.paint);
        }
    }    
}
