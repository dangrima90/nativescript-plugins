//
//  NSCSwiftGalleryView.swift
//  GalleryViewNs
//
//  Created by Maria Castillo on 14/7/24.
//

import Foundation
import SwiftUI

@objcMembers
@objc(NSCSwiftGalleryView)
public class NSCSwiftGalleryView: NSObject{
    public var onErrorCallBack: ((NSArray) -> Void)? = nil
    public var onLoadCallback: ((NSArray) -> Void)? = nil
    public var onTapCallback: ((NSArray) -> Void)? = nil
    public var onScrollCallback: ((NSArray) -> Void)? = nil
    public var onPreviewCallBack: ((NSArray) -> Void)? = nil
    public var onEditCallBack: ((NSArray) -> Void)? = nil
    public var onItemMaxCallback: ((NSArray) -> Void)? = nil
    
    private func convertUIColorToColor(color:UIColor) -> Color{
        return Color(color)
    }
    
    private func convertNSBoolTOBool(value:NSNumber) -> Bool{
        var swiftBool: Bool = value.boolValue
        return swiftBool
    }
    
    private func convertNSNumberToNumber(number: NSNumber) -> Int {
        let intValue: Int = number.intValue
        return intValue
    }
    
    private func convertNSStringToString(nsString: NSString) -> String{
        let swiftString: String = String(nsString)
        return swiftString
    }
    
    private func convertArrayToNSArray(data:[IFiles]) -> NSArray {
        let array = data.map { file -> NSDictionary in
                let fileDataArray = file.data.map { fileData -> NSDictionary in
                    return NSDictionary(dictionary: [
                        "id": fileData.id,
                        "uri": fileData.uri,
                        "isSelected": fileData.isSelected,
                        "info": fileData.info as Any?,
                    ])
                }
                
                return NSDictionary(dictionary: [
                    "id": file.id,
                    "albumName": file.albumName,
                    "data": NSArray(array: fileDataArray),
                    "isSelected": file.isSelected,
                    "icon": file.icon
                ])
            }
            
            return NSArray(array: array)
    }
    
    public func makeView(
        showHeader:NSNumber,
        bgColorHeader:UIColor,
        textcolorHeader:UIColor,
        maxItemSelect:NSNumber,
        showFooter:NSNumber,
        bgColorFooter:UIColor,
        textColorFooter:UIColor,
        preview:NSNumber,
        edit:NSNumber,
        tituloBtnPreview:NSString,
        tituloBtnEdit:NSString,
        colorRadio:UIColor
    ) -> UIView {
        
        let galleryView = GalleryViewNs(
            showHeader: convertNSBoolTOBool(value: showHeader),
            bgColorHeader: convertUIColorToColor(color: bgColorHeader),
            textcolorHeader: convertUIColorToColor(color: textcolorHeader),
            maxItemSelect: convertNSNumberToNumber(number: maxItemSelect),
            showFooter: convertNSBoolTOBool(value: showFooter),
            bgColorFooter: convertUIColorToColor(color: bgColorFooter),
            textColorFooter: convertUIColorToColor(color: textColorFooter),
            preview: convertNSBoolTOBool(value: preview),
            edit: convertNSBoolTOBool(value: edit),
            tituloBtnPreview: convertNSStringToString(nsString: tituloBtnPreview),
            tituloBtnEdit:convertNSStringToString(nsString: tituloBtnEdit),
            colorRadio: convertUIColorToColor(color: colorRadio),
            onErrorCallBack: { albums in
                self.onErrorCallBack?(self.convertArrayToNSArray(data: albums))
            },
            onLoadCallback: { albums in
                self.onLoadCallback?(self.convertArrayToNSArray(data: albums))
            },
            onTapCallback: { albums in
                self.onTapCallback?(self.convertArrayToNSArray(data: albums))
            },
            onScrollCallback: { albums in
                self.onScrollCallback?(self.convertArrayToNSArray(data: albums))
            },
            onPreviewCallBack: { albums in
                let selectedItemsCount = albums.filter { $0.isSelected == true }.count
                debugPrint("Number of selected items: \(selectedItemsCount)")

                self.onPreviewCallBack?(self.convertArrayToNSArray(data: albums))
            },
            onEditCallBack: { albums in
                self.onEditCallBack?(self.convertArrayToNSArray(data: albums))
            },
            onItemMaxCallback: { albums in
                self.onItemMaxCallback?(self.convertArrayToNSArray(data: albums))
            }
        );
        let hostingController = UIHostingController(rootView: galleryView)
        guard let view = hostingController.view else { return UIView() }
        view.frame.size = CGSize(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
        hostingController.loadView()
        return view
    }
    
}
