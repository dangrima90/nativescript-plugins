//
//  GalleryViewNs.swift
//  GalleryViewNs
//
//  Created by Maria Castillo on 14/7/24.
//

import SwiftUI
import Kingfisher

struct ScrollOffsetPreferenceKey: PreferenceKey {
    
    typealias Value = CGFloat
    static var defaultValue: CGFloat = 0

    static func reduce(value: inout CGFloat, nextValue: () -> CGFloat) {
        value = nextValue()
    }
}

struct GalleryViewNs: View {
    @State private var scrollOffset: CGFloat = 0
    @StateObject private var photoLibraryManager = PhotoLibraryManager()
    @State private var isShowingModal1 = false
    @State private var isShowingModal2 = false
    @State private var showAlert = false // Estado para controlar la alerta
    public var showHeader:Bool?
    public var bgColorHeader:Color?
    public var textcolorHeader:Color?
    public var maxItemSelect:Int?
    public var showFooter:Bool?
    public var bgColorFooter:Color?
    public var textColorFooter:Color?
    public var preview:Bool?
    public var edit:Bool?
    public var tituloBtnPreview:String?
    public var tituloBtnEdit:String?
    public var colorRadio:Color?
    public var onErrorCallBack: (([IFiles]) -> Void)? = nil
    public var onLoadCallback: (([IFiles]) -> Void)? = nil
    public var onTapCallback: (([IFiles]) -> Void)? = nil
    public var onScrollCallback: (([IFiles]) -> Void)? = nil
    public var onPreviewCallBack: (([IFiles]) -> Void)? = nil
    public var onEditCallBack: (([IFiles]) -> Void)? = nil
    public var onItemMaxCallback: (([IFiles]) -> Void)? = nil

    
    var body: some View {
        GeometryReader { geometry in
            VStack(spacing: 2) {
                // Header
                if showHeader ?? true{
                    HStack {
                        Picker("Select Album", selection: $photoLibraryManager.selectedAlbum) {
                            ForEach(photoLibraryManager.albums) { album in
                                Text(album.albumName).tag(Optional(album)).foregroundColor(textcolorHeader)
                            }
                        }
                        .pickerStyle(MenuPickerStyle())
                        .frame(maxWidth: .infinity)
                        .foregroundColor(.white)
                        .frame(width: geometry.size.width * 0.7)
                        .onChange(of: photoLibraryManager.selectedAlbum) { newValue in
                            if let selectedAlbum = newValue, let index = photoLibraryManager.albums.firstIndex(where: { $0.id == selectedAlbum.id }) {
                                // Actualiza el índice seleccionado
                                photoLibraryManager.updateSelectedAlbum(with: index)
                            }
                        }

                        Text("\(photoLibraryManager.selectedAlbum?.data.filter { $0.isSelected }.count ?? 0)/\(maxItemSelect ?? 0)")
                            .padding(.trailing, 16)
                            .foregroundColor(textcolorHeader)
                    }
                    .frame(width: UIScreen.main.bounds.width,height: geometry.size.height * 0.1 - 20)
                    .background(bgColorHeader)
                }
                

                // Body
                if let selectedAlbum = photoLibraryManager.selectedAlbum {
                    ScrollView {
                        LazyVGrid(columns: Array(repeating: GridItem(.flexible(), spacing: 1), count: 4), spacing: 1) {
                            ForEach(selectedAlbum.data) { fileData in
                                ZStack(alignment: .topLeading) {
                                    if let image = fileData.info as? UIImage {
                                        
//                                        Image(uiImage: image)
//                                            .resizable()
//                                            .scaledToFill()
//                                            .frame(width: (geometry.size.width - 15) / 4, height: (geometry.size.width - 15) / 4)
//                                            .clipped()
//                                            .cornerRadius(8)
//                                            .onTapGesture {
//                                                onTapCallback?(photoLibraryManager.albums)
//                                                if let index = selectedAlbum.data.firstIndex(where: { $0.id == fileData.id }) {
//                                                    if selectedAlbum.data[index].isSelected {
//                                                        // Permitir deseleccionar el ítem
//                                                        photoLibraryManager.selectedAlbum?.data[index].isSelected.toggle()
//                                                        photoLibraryManager.updateSelectedData(with: index)
//                                                    } else if selectedAlbum.data.filter({ $0.isSelected }).count < maxItemSelect ?? 1 {
//                                                        // Permitir seleccionar el ítem sólo si no se ha alcanzado el límite
//                                                        photoLibraryManager.selectedAlbum?.data[index].isSelected.toggle()
//                                                        photoLibraryManager.updateSelectedData(with: index)
//                                                    } else {
//                                                        // Mostrar alerta
//                                                        onItemMaxCallback?(photoLibraryManager.albums)
//                                                    }
//                                                }
//                                            }
                                        if let imageURL = URL(string: fileData.uri) {
                                            KFImage(imageURL)
                                                .placeholder {
                                                    Image(systemName: "photo") // Placeholder image
                                                        .resizable()
                                                        .scaledToFit()
                                                        .frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
                                                        .background(Color.gray.opacity(0.3))
                                                }
                                                .onFailureImage(UIImage(systemName: "exclamationmark.triangle")) // Error image
                                                .resizable()
                                                .scaledToFill()
                                                .frame(width: (geometry.size.width - 15) / 4, height: (geometry.size.width - 15) / 4)
                                                .clipped()
                                                .cornerRadius(8)
                                                .onTapGesture {
                                                    onTapCallback?(photoLibraryManager.albums)
                                                    if let index = selectedAlbum.data.firstIndex(where: { $0.id == fileData.id }) {
                                                        if selectedAlbum.data[index].isSelected {
                                                            // Permitir deseleccionar el ítem
                                                            photoLibraryManager.selectedAlbum?.data[index].isSelected.toggle()
                                                            photoLibraryManager.updateSelectedData(with: index)
                                                        } else if selectedAlbum.data.filter({ $0.isSelected }).count < maxItemSelect ?? 1 {
                                                            // Permitir seleccionar el ítem sólo si no se ha alcanzado el límite
                                                            photoLibraryManager.selectedAlbum?.data[index].isSelected.toggle()
                                                            photoLibraryManager.updateSelectedData(with: index)
                                                        } else {
                                                            // Mostrar alerta
                                                            onItemMaxCallback?(photoLibraryManager.albums)
                                                        }
                                                    }
                                                }
                                        }

                                        if fileData.isSelected {
                                            Image(systemName: "checkmark.circle.fill")
                                                .resizable()
                                                .aspectRatio(contentMode: .fit)
                                                .frame(width: 22, height: 22)
                                                .foregroundColor(colorRadio)
                                                .padding(5)
                                        }
                                    }
                                }
                                .frame(width: (geometry.size.width - 15) / 4, height: (geometry.size.width - 15) / 4)
                            }
                        }
                    }
                    .frame(maxWidth: .infinity, maxHeight: .infinity)
                    .background(Color.black)
                    .simultaneousGesture(
                        DragGesture().onChanged({
                            let isScrollDown = 0 < $0.translation.height
                            onScrollCallback?(photoLibraryManager.albums)
                        })
                    )

                } else {
                    
                }
                
                // Footer
                if showFooter ?? true {
                    HStack {
                        if preview ?? true {
                            Button(tituloBtnPreview ?? "Ver") {
                                if !photoLibraryManager.albums.isEmpty {
                                    isShowingModal1 = true
                                }
                                self.onPreviewCallBack?(photoLibraryManager.albums)
                            }
    //                        .frame(maxWidth: .infinity, maxHeight: .infinity)
                            .frame(width: UIScreen.main.bounds.width * 0.5,height: UIScreen.main.bounds.height * 0.1)
                            .foregroundColor(textColorFooter)
                            .sheet(isPresented: $isShowingModal1) {
                                ModalView().environmentObject(photoLibraryManager) // Aquí se pasa el EnvironmentObject
                            }
                        }
                        if edit ?? false {
                            Button(tituloBtnEdit ?? "Editar") {
                                // isShowingModal2 = true
                                self.onEditCallBack?(photoLibraryManager.albums)
                            }
//                            .frame(maxWidth:UIScreen.main.bounds.width * 0.5, maxHeight: .infinity)
                            .frame(width: UIScreen.main.bounds.width * 0.5,height: UIScreen.main.bounds.height * 0.1)
                            .foregroundColor(textColorFooter)
                            .sheet(isPresented: $isShowingModal2) {
                                // ModalView().environmentObject(photoLibraryManager) // Aquí también
                            }
                        }
                    }
                    .frame(width: UIScreen.main.bounds.width,height: geometry.size.height * 0.1 - 20)
                    .background(bgColorFooter)
                }
            }
            .frame(width: geometry.size.width, height: geometry.size.height)
            .background(.black)
        }
        .onAppear {
            DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) { // 2.0 segundos de espera
                // Código que deseas ejecutar después del retraso
                print("Este mensaje se muestra después de 2 segundos.")
                if photoLibraryManager.albums.isEmpty {
                    onErrorCallBack?(photoLibraryManager.albums);
                }
                onLoadCallback?(photoLibraryManager.albums)
            }
        }
    }
}

struct ModalView: View {
    @EnvironmentObject var photoLibraryManager: PhotoLibraryManager
    @State private var currentIndex: Int = 0 // Para rastrear el índice actual
    @Environment(\.presentationMode) var presentationMode
    var body: some View {
        VStack {
            HStack {
                Button(action: {
                    presentationMode.wrappedValue.dismiss() // Cerrar el modal
                }) {
                    Image(systemName: "xmark") // Ícono de cerrar
                        .foregroundColor(.white)
                        .padding()
                }
                .frame(width: 30) // Ancho fijo de 30

                // Mostrar el título con el índice actual y el total
                Text("\(currentIndex + 1)/\(photoLibraryManager.selectedAlbum?.data.filter { $0.isSelected }.count ?? 0)")
                    .font(.largeTitle)
                    .padding()
                    .foregroundColor(.white)
                    .frame(maxWidth: .infinity) // Para ocupar el espacio restante
            }

            if let selectedAlbum = photoLibraryManager.selectedAlbum {
                TabView(selection: $currentIndex) { // Vinculamos el índice actual
                    ForEach(Array(selectedAlbum.data.filter { $0.isSelected }.enumerated()), id: \.element.id) { index, fileData in
                        if let image = fileData.info as? UIImage {
                            Image(uiImage: image)
                                .resizable()
                                .scaledToFill()
                                .clipped()
                                .aspectRatio(contentMode: .fill)
                                .frame(width: UIScreen.main.bounds.width,height: UIScreen.main.bounds.height)
                                .cornerRadius(8)
                                .padding()
                                .tag(index) // Asignamos un tag para el índice
                        }
                    }
                }
                .tabViewStyle(PageTabViewStyle())
                .frame(height: 300)
            }

            Spacer()
        }.background(.black)
    }
}
