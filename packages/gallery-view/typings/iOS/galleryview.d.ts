declare class NSCSwiftGalleryView extends NSObject {
  static alloc(): NSCSwiftGalleryView; // inherited from NSObject

  static new(): NSCSwiftGalleryView; // inherited from NSObject

  onEditCallBack: (p1: NSArray<any>) => void;

  onErrorCallBack: (p1: NSArray<any>) => void;

  onItemMaxCallback: (p1: NSArray<any>) => void;

  onLoadCallback: (p1: NSArray<any>) => void;

  onPreviewCallBack: (p1: NSArray<any>) => void;

  onScrollCallback: (p1: NSArray<any>) => void;

  onTapCallback: (p1: NSArray<any>) => void;

  makeViewWithShowHeaderBgColorHeaderTextcolorHeaderMaxItemSelectShowFooterBgColorFooterTextColorFooterPreviewEditTituloBtnPreviewTituloBtnEditColorRadio(showHeader: number, bgColorHeader: UIColor, textcolorHeader: UIColor, maxItemSelect: number, showFooter: number, bgColorFooter: UIColor, textColorFooter: UIColor, preview: number, edit: number, tituloBtnPreview: string, tituloBtnEdit: string, colorRadio: UIColor): UIView;
}
