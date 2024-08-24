<a href="https://www.npmjs.com/package/@wuilmerj24/url-preview">
    <img src="https://img.shields.io/npm/dt/@wuilmerj24/gallery-view.svg?label=npm%20downloads" alt="npm">
</a>

# @wuilmerj24/url-preview

```javascript
npm install @wuilmerj24/url-preview
```

# Component Documentation

This component allows you to configure various aspects of the UI, including colors, border radius, and the type of view. Below is a table listing the available attributes and their respective types.

| Attribute              | Type                                                                 |
|------------------------|----------------------------------------------------------------------|
| `url`                  | `string`                                                             |
| `bgColor`              | `string`                                                             |
| `titleTextColor`       | `string`                                                             |
| `descriptionTextColor` | `string`                                                             |
| `view`                 | `TypeView`                                                           |
| `borderRadiusImage`    | `number`                                                             |
| `loadingColor`         | `string`                                                             |
| `borderRadius`         | `string \| number \| CoreTypes.LengthDipUnit \| CoreTypes.LengthPxUnit` |

## Attribute Descriptions

- **`url`**: URL of the web page from which information will be fetched.
- **`bgColor`**: Background color of the container.
- **`titleTextColor`**: Text color used for the title.
- **`descriptionTextColor`**: Text color used for the description.
- **`view`**: Type of view to be used for displaying the information.
- **`borderRadiusImage`**: Border radius applied to the image within the container.
- **`loadingColor`**: Color of the loading indicator shown while fetching information.
- **`borderRadius`**: Border radius applied to the container, can be a string, number, or specific length units.

## Example

### NativeScript Core

To use the component in a NativeScript Core project, add the following XML namespace to your page and use the `UrlPreview` view as shown below:

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:up="@wuilmerj24/url-preview">
    <ActionBar title="URL Preview Example" />

    <StackLayout>
        <!-- URL Preview Component -->
        <up:UrlPreview url="" />
    </StackLayout>
</Page>
```

### NativeScript Angular

```typescript
import {NativeScriptUrlPreviewModule} from "@wuilmerj24/url-preview/angular"

@NgModule({
  imports: [
    NativeScriptUrlPreviewModule // this line
  ],
  declarations: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
```

```html
<UrlPreview url="" > </UrlPreview>
```

## License

Apache License Version 2.0
