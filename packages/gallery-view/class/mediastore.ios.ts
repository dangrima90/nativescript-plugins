import { Utils } from '@nativescript/core';
import { CLog } from '../common';
import { IFileData, IFiles } from '../interfaces/files.interface';

@NativeClass()
export class MediaStoreForiOS {
  fetchOptions = PHFetchOptions.alloc().init();
  constructor() {}

  public async getImagenes(): Promise<Array<IFiles>> {
    return new Promise(async (rs, rj) => {
      try {
        const sortDescriptors = NSArray.arrayWithObject(NSSortDescriptor.sortDescriptorWithKeyAscending('creationDate', true));
        this.fetchOptions.sortDescriptors = sortDescriptors;
        const assetCollections = PHAssetCollection.fetchAssetCollectionsWithTypeSubtypeOptions(PHAssetCollectionType.Album, PHAssetCollectionSubtype.AlbumRegular, null);
        const file: Array<IFiles> = new Array();

        for (let i: number = 0; i < assetCollections.count; i++) {
          const collection: PHAssetCollection = assetCollections.objectAtIndex(i);
          const assets = PHAsset.fetchAssetsInAssetCollectionOptions(collection, this.fetchOptions);
          const filesPromises: Promise<IFileData>[] = [];

          for (let j: number = 0; j < assets.count; j++) {
            const asset = assets.objectAtIndex(j);
            filesPromises.push(this.getAssetData(asset, j));
          }

          const files = await Promise.all(filesPromises);
          file.push({
            id: `${i + 1}`,
            albunName: collection.localizedTitle,
            data: files,
            icon: files[0].uri ? files[0].uri : '',
            isSelected: false,
          });
        }

        rs(file);
      } catch (error) {
        rj(new Array<IFiles>());
      }
    });
  }

  private async getAssetData(asset: PHAsset, index: number): Promise<IFileData> {
    return new Promise(async (resolve) => {
      const options = PHImageRequestOptions.new();
      options.synchronous = true;
      options.deliveryMode = PHImageRequestOptionsDeliveryMode.FastFormat;
      const requestOptions = new PHContentEditingInputRequestOptions();

      await asset.requestContentEditingInputWithOptionsCompletionHandler(requestOptions, async (p1) => {
        if (p1.fullSizeImageURL !== null) {
          //   resolve(new GaleriaViewAlbumnsData(index, p1.fullSizeImageURL.toString().replace('file://', ''), false, TipoFile.IMAGES));
          resolve({
            id: `${index + 1}`,
            uri: p1.fullSizeImageURL.toString().replace('file://', ''),
            isSelected: false,
          });
        } else {
          resolve({
            id: `${index + 1}`,
            uri: '',
            isSelected: false,
          });
        }
      });
    });
  }

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => Utils.setTimeout(resolve, ms));
  }
}
