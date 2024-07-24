//
//  PhotoLibraryManager.swift
//  GalleryViewNs
//
//  Created by Maria Castillo on 13/7/24.
//

import SwiftUI
import Photos

struct IFileData: Identifiable, Hashable {
    let id: String
    let uri: String
    var isSelected: Bool
    var info: Any?
    
    static func ==(lhs: IFileData, rhs: IFileData) -> Bool {
        return lhs.id == rhs.id
    }

    func hash(into hasher: inout Hasher) {
        hasher.combine(id)
    }
}

struct IFiles: Identifiable, Hashable {
    let id: String
    let albumName: String
    var data: [IFileData]
    var isSelected: Bool
    let icon: String
    
    static func ==(lhs: IFiles, rhs: IFiles) -> Bool {
        return lhs.id == rhs.id
    }

    func hash(into hasher: inout Hasher) {
        hasher.combine(id)
    }
}

class PhotoLibraryManager: ObservableObject {
    @Published var albums: [IFiles] = []
    @Published var selectedAlbum: IFiles?
    
    init() {
        fetchAlbums()
    }
    
    func getImageURL(from localIdentifier: String, completion: @escaping (URL?) -> Void) {
        let fetchResult = PHAsset.fetchAssets(withLocalIdentifiers: [localIdentifier], options: nil)
        
        guard let asset = fetchResult.firstObject else {
            completion(nil) // No se encontró el asset
            return
        }
        
        let options = PHContentEditingInputRequestOptions()
        options.isNetworkAccessAllowed = true // Permite la descarga desde iCloud si es necesario
        
        asset.requestContentEditingInput(with: options) { (input, _) in
            guard let input = input else {
                completion(nil) // No se pudo obtener el input
                return
            }
            let url = input.fullSizeImageURL
            completion(url)
        }
    }
    
    private func fetchAlbums() {
        var albums: [IFiles] = []
        let fetchOptions = PHFetchOptions()
        let allAlbums = PHAssetCollection.fetchAssetCollections(with: .album, subtype: .any, options: fetchOptions)
        var isFirst: Bool = true
        allAlbums.enumerateObjects { collection, _, _ in
            let assets = PHAsset.fetchAssets(in: collection, options: nil)
            
            if let firstAsset = assets.firstObject {
                self.getThumbnail(for: firstAsset) { thumbnail in
                    var images: [IFileData] = []
                    let group = DispatchGroup()
                    
                    assets.enumerateObjects { asset, _, _ in
                        group.enter()
                        self.getImageURL(from: asset.localIdentifier) { url in
                            if let url = url {
                                let uri = url.absoluteString
                                self.getImage(for: asset) { image in
                                    images.append(IFileData(id: UUID().uuidString, uri: uri, isSelected: false, info: image))
                                    group.leave()
                                }
                            } else {
                                group.leave()
                            }
                        }
                    }
                    
                    group.notify(queue: .main) {
                        var album = IFiles(id: UUID().uuidString, albumName: collection.localizedTitle ?? "Unknown", data: images, isSelected: isFirst, icon: "photo")
                        isFirst = false
                        albums.append(album)
                        
                        // Select default album
                        if self.selectedAlbum == nil {
                            album.isSelected = true
                            if !album.data.isEmpty {
//                                album.data[0].isSelected = true
                            }
                            self.selectedAlbum = album
                        }
                        
                        DispatchQueue.main.async {
                            self.albums = albums
                        }
                    }
                }
            }
        }
    }
    
    private func getThumbnail(for asset: PHAsset, completion: @escaping (UIImage) -> Void) {
        let imageManager = PHImageManager.default()
        let options = PHImageRequestOptions()
        options.isSynchronous = true
        
        imageManager.requestImage(for: asset, targetSize: CGSize(width: 100, height: 100), contentMode: .aspectFill, options: options) { image, _ in
            if let image = image {
                completion(image)
            }
        }
    }
    
    private func getImage(for asset: PHAsset, completion: @escaping (UIImage) -> Void) {
        let imageManager = PHImageManager.default()
        let options = PHImageRequestOptions()
        options.isSynchronous = true
        
        imageManager.requestImage(for: asset, targetSize: PHImageManagerMaximumSize, contentMode: .aspectFill, options: options) { image, _ in
            if let image = image {
                completion(image)
            }
        }
    }
    
    func updateSelectedAlbum(with index:Int) {
        for i in 0..<albums.count {
            albums[i].isSelected = false
        }
        albums[index].isSelected = true
    }
    
    func updateSelectedData(with index:Int) {
        for i in 0..<albums.count {
            if albums[i].isSelected {
                albums[i].data[index].isSelected.toggle()
                break
            }
        }
    }

}


//class PhotoLibraryManager: ObservableObject {
//    @Published var albums: [IFiles] = []
//    @Published var selectedAlbum: IFiles?
//    @Published var selectedIndex: Int? // Agregamos una propiedad para el índice seleccionado
//    
//    init() {
//        fetchAlbums()
//    }
//    
//    private func fetchAlbums() {
//        var albums: [IFiles] = []
//        let fetchOptions = PHFetchOptions()
//        let allAlbums = PHAssetCollection.fetchAssetCollections(with: .album, subtype: .any, options: fetchOptions)
//        
//        allAlbums.enumerateObjects { collection, _, _ in
//            let assets = PHAsset.fetchAssets(in: collection, options: nil)
//            
//            if let firstAsset = assets.firstObject {
//                self.getThumbnail(for: firstAsset) { thumbnail in
//                    var images: [IFileData] = []
//                    assets.enumerateObjects { asset, _, _ in
//                        self.getImage(for: asset) { image  in
//                            images.append(IFileData(id: UUID().uuidString, uri: asset.localIdentifier, isSelected: false, info: image))
//                        }
//                    }
//                    var album = IFiles(id: UUID().uuidString, albumName: collection.localizedTitle ?? "Unknown", data: images, isSelected: false, icon: "photo")
//                    
//                    albums.append(album)
//                    
//                    // Select default album
//                    if self.selectedAlbum == nil {
//                        album.isSelected = true
//                        if !album.data.isEmpty {
////                            album.data[0].isSelected = true
//                        }
//                        self.selectedAlbum = album
//                        self.selectedIndex = 0 // Inicializamos el índice seleccionado
//                    }
//                    
//                    DispatchQueue.main.async {
//                        self.albums = albums
//                    }
//                }
//            }
//        }
//    }
//    
//    private func getThumbnail(for asset: PHAsset, completion: @escaping (UIImage) -> Void) {
//        let imageManager = PHImageManager.default()
//        let options = PHImageRequestOptions()
//        options.isSynchronous = true
//        
//        imageManager.requestImage(for: asset, targetSize: CGSize(width: 100, height: 100), contentMode: .aspectFill, options: options) { image, _ in
//            if let image = image {
//                completion(image)
//            }
//        }
//    }
//    
//    private func getImage(for asset: PHAsset, completion: @escaping (UIImage) -> Void) {
//        let imageManager = PHImageManager.default()
//        let options = PHImageRequestOptions()
//        options.isSynchronous = true
//        
//        imageManager.requestImage(for: asset, targetSize: PHImageManagerMaximumSize, contentMode: .aspectFill, options: options) { image, _ in
//            if let image = image {
//                completion(image)
//            }
//        }
//    }
//    
//    // Nueva función para actualizar el álbum seleccionado
//    func updateSelectedAlbum(with index:Int) {
//        for i in 0..<albums.count {
////            albums[i].isSelected = (albums[i].albumName == albumName)
//            albums[i].isSelected = false
//        }
//        albums[index].isSelected = true
//    }
//}
