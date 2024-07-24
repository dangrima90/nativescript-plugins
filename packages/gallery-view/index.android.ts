import { AndroidActivityRequestPermissionsEventData, AndroidApplication, Application, Color, EventData, getCurrentPage, GridLayout, GridUnitType, Image, ItemSpec, Label, Screen, ShowModalOptions, Utils, View } from '@nativescript/core';
import { CLog, GalleryViewCommon, GetSetProperty } from './common';
import { EFileType } from './enums/file_type.enum';
import { ELanguage } from './enums/language.enum';
import { LanguageController } from './class/language.class';
import { MediaStoreForAndroid } from './class/mediastore.android';
import { IFileData, IFiles } from './interfaces/files.interface';
import { SpinnerDataAdapter } from './class/adaptador.android';
import { ListaAdaptadorForAndroid } from './class/adaptador.lista.android';

declare var developerwym;

export class GalleryView extends GalleryViewCommon {
  @GetSetProperty()
  public language: ELanguage;
  @GetSetProperty()
  public file_type: EFileType;
  @GetSetProperty()
  public showHeader: boolean;
  @GetSetProperty()
  public bgColorHeader: string;
  @GetSetProperty()
  public textcolorHeader: string;
  @GetSetProperty()
  public maxItemSelect: number;
  @GetSetProperty()
  public showFooter: boolean;
  @GetSetProperty()
  public bgColorFooter: string;
  @GetSetProperty()
  public textColorFooter: string;
  @GetSetProperty()
  public edit: boolean;
  @GetSetProperty()
  public preview: boolean;
  @GetSetProperty()
  colorRadio: string;
  @GetSetProperty()
  albunInit: string;

  // VARIABLES locals
  private idioma: LanguageController;
  private files: Array<IFiles> = new Array();
  private header: android.widget.LinearLayout;
  private body: androidx.recyclerview.widget.RecyclerView;
  private footer: android.widget.LinearLayout;

  createNativeView(): Object {
    androidx.multidex.MultiDex.install(this._context);
    this.nativeView = new android.widget.LinearLayout(this._context);
    (this.nativeView as android.widget.LinearLayout).setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.MATCH_PARENT));
    (this.nativeView as android.widget.LinearLayout).setOrientation(android.widget.LinearLayout.VERTICAL);
    this.idioma = new LanguageController(this.language);
    return this.nativeView as android.widget.LinearLayout;
  }

  onLoaded(): void {
    super.onLoaded();
    if (this.checkPermisos()) {
      const mediasStore: MediaStoreForAndroid = new MediaStoreForAndroid(this._context);
      this.files = mediasStore.getImagenes();
      this.renderUI();
    } else {
      this.solicitarPermiso()
        .then((res) => {
          const mediasStore: MediaStoreForAndroid = new MediaStoreForAndroid(this._context);
          this.files = mediasStore.getImagenes();
          this.renderUI();
        })
        .catch((err) => {
          const textView: android.widget.TextView = new android.widget.TextView(this._context);
          textView.setText(this.idioma.getTranslation('no_permisos'));
          textView.setTextSize(24); // Tamaño del texto
          textView.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
          (this.nativeView as android.widget.LinearLayout).setGravity(android.view.Gravity.CENTER_VERTICAL);
          textView.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
          (this.nativeView as android.widget.LinearLayout).addView(textView);
          (this.nativeView as android.widget.LinearLayout).removeView(textView);
        });
    }
  }

  private checkPermisos(): any {
    let permisos: Array<any> = new Array();
    if (android.os.Build.VERSION.SDK_INT >= 33) {
      permisos = ['android.permission.READ_MEDIA_AUDIO', 'android.permission.READ_MEDIA_IMAGES', 'android.permission.READ_MEDIA_VIDEO'];
    } else {
      permisos = ['android.permission.READ_EXTERNAL_STORAGE', 'android.permission.WRITE_EXTERNAL_STORAGE'];
    }
    const granted = android.content.pm.PackageManager.PERMISSION_GRANTED;
    const permisos_respuesta: Array<any> = new Array();
    for (let i: number = 0; i < permisos.length; i++) {
      if (android.os.Build.VERSION.SDK_INT < 23) {
        permisos_respuesta.push((this._context as android.content.Context).checkPermission(permisos[i], android.os.Process.myPid(), android.os.Process.myUid()) === android.content.pm.PackageManager.PERMISSION_GRANTED ? 'authorized' : 'denied');
      } else {
        permisos_respuesta.push((this._context as android.content.Context).checkSelfPermission(permisos[i]));
      }
    }
    if (permisos_respuesta.some((elemento) => elemento === -1)) {
      return false;
    } else if (permisos_respuesta.some((elemento) => elemento === 0)) {
      return true;
    } else {
      return false;
    }
  }

  private solicitarPermiso(): Promise<any> {
    let permisos: Array<any> = new Array();
    if (android.os.Build.VERSION.SDK_INT >= 33) {
      permisos = ['android.permission.READ_MEDIA_AUDI', 'android.permission.READ_MEDIA_IMAGES', 'android.permission.READ_MEDIA_VIDEO'];
    } else {
      permisos = [android.Manifest.permission.READ_EXTERNAL_STORAGE];
    }

    const activity: android.app.Activity = Application.android.foregroundActivity || Application.android.startActivity;
    return new Promise<any>((rs, rj) => {
      try {
        activity.requestPermissions(permisos, 1001);
        const onActivityResult = (args: AndroidActivityRequestPermissionsEventData) => {
          let grantedPermissions: Array<any> = new Array();
          if (args.requestCode === 1001) {
            Application.off(AndroidApplication.activityRequestPermissionsEvent, onActivityResult);
            const results = args.grantResults;
            for (let j = 0; j < permisos.length; j++) {
              const permission = permisos[j];
              if (results.length > j && results[j] === android.content.pm.PackageManager.PERMISSION_GRANTED) {
                grantedPermissions.push('authorized');
              } else {
                if (activity.shouldShowRequestPermissionRationale(permission)) {
                  grantedPermissions.push('denied');
                } else {
                  grantedPermissions.push('never_ask_again');
                }
              }
            }

            if (grantedPermissions.some((elemento) => elemento === 'denied')) {
              CLog('se mete en denied');
              rj(false);
            } else if (grantedPermissions.some((elemento) => elemento === 'authorized')) {
              CLog('se mete en authorized');
              rs(true);
            }
          }
        };
        AndroidApplication.on(AndroidApplication.activityRequestPermissionsEvent, onActivityResult);
      } catch (error) {
        rj(error);
      }
    });
  }

  private async renderUI() {
    const self = this;
    if (this.files.length <= 0) {
      const textView: android.widget.TextView = new android.widget.TextView(this._context);
      textView.setText(this.idioma.getTranslation('no_items'));
      textView.setTextSize(24); // Tamaño del texto
      textView.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
      (this.nativeView as android.widget.LinearLayout).setGravity(android.view.Gravity.CENTER_VERTICAL);
      textView.setGravity(android.view.Gravity.CENTER_HORIZONTAL);

      (this.nativeView as android.widget.LinearLayout).addView(textView);
      return;
    }
    let index = 0;
    if (this.albunInit) {
      this.files.findIndex((item) => item.albunName.toLowerCase() === this.albunInit.toLowerCase());
      this.files[index].isSelected = true;
    } else {
      this.files[0].isSelected = true;
    }

    const ref = new WeakRef(this);
    ref?.get()?.sendEvent(GalleryView.loadedEvent, GalleryView);

    if (this.showHeader) {
      this.header = this.createHeader(index);
      (this.nativeView as android.widget.LinearLayout).addView(this.header);
    }

    this.body = this.createBody();
    (this.nativeView as android.widget.LinearLayout).addView(this.body);

    if (this.showFooter) {
      this.footer = this.createFooter();
      (this.nativeView as android.widget.LinearLayout).addView(this.footer);
    }

    this.body.setNestedScrollingEnabled(true);
    this.body.addOnScrollListener(
      new ScrollEvent(this._context, this.body, {
        onScrolled(recyclerView, dx, dy) {
          try {
            ref?.get()?.sendEvent(GalleryView.scrollEvent, self.files);
          } catch (error) {
            CLog(error);
          }
        },
        onScrollStateChanged(recyclerView, state) {
          // CLog("onScrollStateChanged")
        },
      })
    );

    this.body.addOnItemTouchListener(
      new developerwym.plugins.ns.RecyclerTouchListener(
        this._context,
        this.body,
        new developerwym.plugins.ns.RecyclerTouchListener.ClickListener({
          onClick: (view: android.view.View, position: number) => {
            try {
              self.files.filter((item) => item.isSelected === true)[0].data[position].isSelected = !self.files.filter((item) => item.isSelected === true)[0].data[position].isSelected;
              const current_select: number = self.files.filter((item) => item.isSelected == true)[0].data.filter((item) => item.isSelected == true).length;
              const radio: android.widget.RadioButton = (view as android.widget.LinearLayout).getChildAt(1) as android.widget.RadioButton;

              if (current_select <= self.maxItemSelect) {
                const textView: android.widget.TextView = this.header.getChildAt(1) as android.widget.TextView;
                textView.setText(`${this.files.filter((item) => item.isSelected === true)[0].data.filter((item) => item.isSelected === true).length}/${this.maxItemSelect}`);
                radio.setChecked(self.files.filter((item) => item.isSelected === true)[0].data[position].isSelected);
              } else {
                self.files.filter((item) => item.isSelected === true)[0].data[position].isSelected = false;
              }

              ref?.get()?.sendEvent(GalleryView.clickEvent, self.files);
            } catch (error) {
              CLog(error);
            }
          },
          onLongClick: (view: android.view.View, position: number) => {
            // CLog('onLongClick ', position);
          },
        })
      )
    );
  }

  private createHeader(index: number): android.widget.LinearLayout {
    const headerLayout: android.widget.LinearLayout = new android.widget.LinearLayout(this._context);
    headerLayout.setLayoutParams(
      new android.widget.LinearLayout.LayoutParams(
        android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
        0, // Altura basada en un porcentaje
        0.07 // 10% de la altura total
      )
    );
    headerLayout.setBackgroundColor(new Color(this.bgColorHeader).android);
    headerLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);

    const spinnerParams: android.widget.LinearLayout.LayoutParams = new android.widget.LinearLayout.LayoutParams(0, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 0.08);
    spinnerParams.gravity = android.view.Gravity.CENTER_VERTICAL;

    const textViewParams = new android.widget.LinearLayout.LayoutParams(0, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 0.02);
    textViewParams.gravity = android.view.Gravity.CENTER_VERTICAL;

    const adaptador: SpinnerDataAdapter = new SpinnerDataAdapter(this.files, this._context, this.bgColorHeader, this.textcolorHeader);
    const spinner: android.widget.Spinner = new android.widget.Spinner(this._context);
    spinner.setLayoutParams(spinnerParams);
    spinner.setAdapter(adaptador);
    spinner.setSelection(index);
    spinner.setDropDownWidth(Screen.mainScreen.widthPixels);
    headerLayout.addView(spinner);
    headerLayout.setPadding(20, 0, 0, 0);
    const self = this;
    spinner.setOnItemSelectedListener(
      new android.widget.AdapterView.OnItemSelectedListener({
        onItemSelected(param0: android.widget.AdapterView<any>, param1: android.view.View, position: number, param3: number) {
          if (self.body != null || self.body != undefined) {
            Utils.setTimeout(() => {
              self.files.filter((item) => item.isSelected === true)[0].isSelected = false;
              self.files[position].isSelected = true;
              const adaptador: ListaAdaptadorForAndroid = new ListaAdaptadorForAndroid(self.files[position].data, self.colorRadio);
              self.body.setAdapter(adaptador);
              adaptador.notifyDataSetChanged();
            }, 90);
          }
        },
        onNothingSelected(param0) {},
      })
    );

    const txtContador: android.widget.TextView = new android.widget.TextView(this._context);
    txtContador.setText(`${this.files.filter((item) => item.isSelected === true)[0].data.filter((item) => item.isSelected === true).length}/${this.maxItemSelect}`);
    txtContador.setTextSize(19);
    txtContador.setLayoutParams(textViewParams);
    txtContador.setTextColor(new Color(this.textcolorHeader).android);
    headerLayout.addView(txtContador);

    return headerLayout;
  }

  private createBody(): androidx.recyclerview.widget.RecyclerView {
    const lista: androidx.recyclerview.widget.RecyclerView = new androidx.recyclerview.widget.RecyclerView(this._context);
    lista.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, 0, 0.9));
    lista.setBackgroundColor(android.graphics.Color.BLACK);
    lista.setHasFixedSize(true);
    lista.setId(android.view.View.generateViewId());
    lista.setAddStatesFromChildren(true);
    lista.setEnabled(true);
    const layout: androidx.recyclerview.widget.GridLayoutManager = new androidx.recyclerview.widget.GridLayoutManager(this._context, 4);
    layout.setOrientation(androidx.recyclerview.widget.LinearLayoutManager.VERTICAL);
    lista.setLayoutManager(layout);
    const adaptador: ListaAdaptadorForAndroid = new ListaAdaptadorForAndroid(this.files.filter((item) => item.isSelected)[0].data, this.colorRadio);
    lista.setAdapter(adaptador);
    return lista;
  }

  private createFooter(): android.widget.LinearLayout {
    const self = this;
    const footerLayout: android.widget.LinearLayout = new android.widget.LinearLayout(this._context);
    // footerLayout.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, 0, 0.10));
    footerLayout.setLayoutParams(
      new android.widget.LinearLayout.LayoutParams(
        android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
        0, // Altura basada en un porcentaje
        0.07 // 10% de la altura total
      )
    );
    footerLayout.setBackgroundColor(new Color(this.bgColorFooter).android);
    const btnPreview: android.widget.Button = new android.widget.Button(this._context);
    btnPreview.setLayoutParams(new android.widget.LinearLayout.LayoutParams(0, android.view.ViewGroup.LayoutParams.WRAP_CONTENT, 1));
    btnPreview.setText(this.idioma.getTranslation('titulo_btn_preview'));
    btnPreview.setBackgroundColor(android.graphics.Color.TRANSPARENT);
    btnPreview.setTextColor(new Color(this.textColorFooter).android);
    btnPreview.setTextSize(16);
    btnPreview.setOnClickListener(
      new android.view.View.OnClickListener({
        onClick(param0: android.view.View) {
          if (self.files.filter((item) => item.isSelected === true)[0].data.filter((item) => item.isSelected === true).length <= 0) {
            alert(self.idioma.getTranslation('msj_select_item_preview'));
            return;
          }
          getCurrentPage().showModal(new ModalPreviewImagesForAndroid(self.files.filter((item) => item.isSelected === true)[0].data.filter((item) => item.isSelected === true)), {
            closeCallback(...args) {},
            fullscreen: true,
            animated: true,
            stretched: true,
            cancelable: true,
          } as ShowModalOptions);
        },
      })
    );

    const btnEdit: android.widget.Button = new android.widget.Button(this._context);
    btnEdit.setLayoutParams(new android.widget.LinearLayout.LayoutParams(0, android.view.ViewGroup.LayoutParams.WRAP_CONTENT, 1));
    btnEdit.setText(this.idioma.getTranslation('titulo_btn_edit'));
    btnEdit.setBackgroundColor(android.graphics.Color.TRANSPARENT);
    btnEdit.setTextColor(new Color(this.textColorFooter).android);
    btnEdit.setTextSize(16);
    btnEdit.setOnClickListener(
      new android.view.View.OnClickListener({
        onClick(param0: android.view.View) {
          alert(self.idioma.getTranslation('msj_construction'));
        },
      })
    );
    footerLayout.addView(btnPreview);
    footerLayout.addView(btnEdit);

    return footerLayout;
  }
}

//Class e Interface para el evento scroll recyclerview

@NativeClass()
class ScrollEvent extends androidx.recyclerview.widget.RecyclerView.OnScrollListener {
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

interface ScrollEvento {
  onScrolled(recyclerView: androidx.recyclerview.widget.RecyclerView, dx: number, dy: number): void;
  onScrollStateChanged(recyclerView: androidx.recyclerview.widget.RecyclerView, state: number): void;
}

// Modal preview solo para android
export class ModalPreviewImagesForAndroid extends GridLayout {
  private posicion: number = 1;
  private titulo: Label;
  constructor(private files: Array<IFileData>) {
    super();
    this.backgroundColor = new Color('black');
    this.configureActionBar();
    this.configureData();
  }

  configureActionBar() {
    this.addRow(new ItemSpec(1, GridUnitType.AUTO));
    this.addRow(new ItemSpec(1, GridUnitType.STAR));
    this.addRow(new ItemSpec(1, GridUnitType.AUTO));
    const actionBar: GridLayout = new GridLayout();
    actionBar.marginTop = 5;
    actionBar.addColumn(new ItemSpec(1, GridUnitType.AUTO));
    actionBar.addColumn(new ItemSpec(1, GridUnitType.STAR));
    actionBar.row = 0;
    actionBar.backgroundColor = new Color('black');
    const btnBack: Image = new Image();
    btnBack.col = 0;
    btnBack.src = 'res://baseline_close_24';
    btnBack.androidElevation = -1;
    btnBack.width = 32;
    btnBack.height = 32;
    btnBack.tintColor = new Color('#FFFFFF');
    btnBack.on('tap', (args: EventData) => {
      this.closeModal();
    });
    actionBar.addChild(btnBack);

    this.titulo = new Label();
    this.titulo.text = `${this.posicion}/${this.files.length}`;
    this.titulo.fontSize = 20;
    this.titulo.style.fontWeight = 'bold';
    this.titulo.verticalAlignment = 'middle';
    this.titulo.horizontalAlignment = 'center';
    this.titulo.col = 1;
    this.titulo.color = new Color('white');
    actionBar.addChild(this.titulo);

    this.addChild(actionBar);
  }

  configureData() {
    const viewpager2: ViewPager2DeveloperwymPlugin = new ViewPager2DeveloperwymPlugin(this.files);
    viewpager2.row = 1;
    viewpager2.width = Screen.mainScreen.widthDIPs;
    viewpager2.height = Screen.mainScreen.heightDIPs;
    this.addChild(viewpager2);
    const self = this;
    Utils.setTimeout(() => {
      viewpager2.nativeView.registerOnPageChangeCallback(
        new PageChangeCallbackEvent({
          onPageScrolled(position, positionOffset, positionOffsetPixels) {},
          onPageScrollStateChanged(position) {},
          onPageSelected(position) {
            self.posicion = 1 + position;
            self.titulo.text = `${self.posicion}/${self.files.length}`;
          },
        })
      );
    }, 200);
  }
}

class ViewPager2DeveloperwymPlugin extends View {
  private viewpager2: androidx.viewpager2.widget.ViewPager2;
  constructor(private files: Array<IFileData>) {
    super();
  }

  createNativeView(): Object {
    this.viewpager2 = new androidx.viewpager2.widget.ViewPager2(this._context);
    this.viewpager2.setLayoutParams(new androidx.viewpager2.widget.ViewPager2.LayoutParams(androidx.viewpager2.widget.ViewPager2.LayoutParams.MATCH_PARENT, androidx.viewpager2.widget.ViewPager2.LayoutParams.MATCH_PARENT));
    const adaptador: ViewPager2AdapterPluginsDeveloperwym = new ViewPager2AdapterPluginsDeveloperwym(this.files);
    this.viewpager2.setAdapter(adaptador);
    this.viewpager2.setOrientation(androidx.viewpager2.widget.ViewPager2.ORIENTATION_HORIZONTAL);
    this.nativeView = this.viewpager2;
    return this.viewpager2;
  }
  get nativeView(): androidx.viewpager2.widget.ViewPager2 {
    return this.viewpager2;
  }
  set nativeView(value: androidx.viewpager2.widget.ViewPager2) {
    this.setNativeView(value);
  }
}

@NativeClass()
export class ViewPager2AdapterPluginsDeveloperwym extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
  constructor(private files: Array<IFileData>) {
    super();
  }

  public getItemCount(): number {
    if (this.files != null || this.files != undefined || this.files.length == 0) {
      return this.files.length;
    }
    return 0;
  }

  public onCreateViewHolder(parent: android.view.ViewGroup, viewType: number): androidx.recyclerview.widget.RecyclerView.ViewHolder {
    const ly: android.widget.LinearLayout = new android.widget.LinearLayout(parent.getContext());
    ly.setId(android.view.View.generateViewId());
    ly.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
    const img: android.widget.ImageView = new android.widget.ImageView(parent.getContext());
    img.setId(android.view.View.generateViewId());
    ly.addView(img);
    return new ViewHolderImagesAdapter(ly, img.getId());
  }

  public onBindViewHolder(param0: unknown, param1: unknown, param2?: unknown): void;
  public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number, param2: java.util.List<any>): void;
  public onBindViewHolder(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, position: number): void {
    try {
      com.squareup.picasso.Picasso.get()
        .load(this.files[position].uri)
        .networkPolicy(com.squareup.picasso.NetworkPolicy.OFFLINE, [com.squareup.picasso.NetworkPolicy.OFFLINE])
        .priority(com.squareup.picasso.Picasso.Priority.HIGH)
        .into((holder as any).imageView);
    } catch (error) {
      CLog('error ', error);
    }
  }
}

@NativeClass()
class ViewHolderImagesAdapter extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
  public imageView: android.widget.ImageView;
  constructor(private view: android.view.View, private vid: number) {
    super(view);
    this.imageView = view.findViewById(this.vid) as android.widget.ImageView;
    this.imageView.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.MATCH_PARENT));
    this.imageView.setAdjustViewBounds(true);
  }
}

interface ViewPager2EventListener {
  onPageScrollStateChanged(position: number);
  onPageScrolled(position: number, positionOffset: number, positionOffsetPixels: number);
  onPageSelected(position: number);
}

@NativeClass
class PageChangeCallbackEvent extends androidx.viewpager2.widget.ViewPager2.OnPageChangeCallback {
  private listener: ViewPager2EventListener;
  constructor(_listener: ViewPager2EventListener) {
    super();
    this.listener = _listener;
  }

  public onPageScrollStateChanged(position: number): void {
    super.onPageScrollStateChanged(position);
    this.listener.onPageScrollStateChanged(position);
  }

  public onPageScrolled(position: number, positionOffset: number, positionOffsetPixels: number): void {
    super.onPageScrolled(position, positionOffset, positionOffsetPixels);
    this.listener.onPageScrolled(position, positionOffset, positionOffsetPixels);
  }

  public onPageSelected(position: number): void {
    super.onPageSelected(position);
    this.listener.onPageSelected(position);
  }
}
