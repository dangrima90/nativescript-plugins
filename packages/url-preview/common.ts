import { ActivityIndicator, Color, CoreTypes, CSSType, GestureTypes, GridLayout, GridUnitType, Image, ItemSpec, Label, Screen, TapGestureEventData, Utils, View } from '@nativescript/core';

export enum TypeView {
    RECTANGLE = "r",
    RECTANGLE_VERTICAL = "rv",
}

@CSSType('UrlPreview')
export class UrlPreviewCommon extends View {
    @GetSetProperty()
    public url:string = "";
    @GetSetProperty()
    bgColor: string="red";
    @GetSetProperty()
    titleTextColor: string="blue";
    @GetSetProperty()
    descriptionTextColor: string="blue";
    @GetSetProperty()
    view: TypeView=TypeView.RECTANGLE;
    @GetSetProperty()
    borderRadiusImage: number=10;
    @GetSetProperty()
    loadingColor: string="red";
    @GetSetProperty()
    borderRadius: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit=0;
    
}

export function GetSetProperty() {
    return (target, propertyKey: string) => {
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this['_' + propertyKey];
            },
            set: function (value) {
                if (this['_' + propertyKey] === value) {
                    return;
                }
                if (value === 'true') {
                    value = true;
                } else if (value === 'false') {
                    value = false;
                }
                this['_' + propertyKey] = value;
            },
            enumerable: true,
            configurable: true,
        });
    };
}

export class Contenedor extends GridLayout{
    constructor(
        private url:string,
        private bgColor: string, 
        private titleTextColor: string,
        private descriptionTextColor: string,
        private view: TypeView,
        private borderRadiusImage: number,
        private loadingColor: string,
    ){
        super();
        this.backgroundColor=new Color(bgColor);
        this.androidElevation = 30;
        const loading: ActivityIndicator = new ActivityIndicator();
        loading.width = 50;
        loading.height = 50;
        loading.color = new Color(loadingColor);
        loading.verticalAlignment = "middle";
        loading.horizontalAlignment = "center";
        loading.busy = true;
        this.addChild(loading);
        if(this.isYoutube()){
            this.width = Screen.mainScreen.widthDIPs - 10;
            this.height = (Screen.mainScreen.heightDIPs * 40) / 100;
            this.getInfoFromYoutube(url).then((res)=>{
                console.log(res)
                this.removeChild(loading);
                this.on(GestureTypes.tap, (args: TapGestureEventData) => {
                    Utils.openUrl(url);
                });
                const grid: GridLayout = new GridLayout();
                grid.addRow(new ItemSpec(1, GridUnitType.AUTO));
                grid.addRow(new ItemSpec(1, GridUnitType.STAR));
                grid.addRow(new ItemSpec(1, GridUnitType.AUTO));

                const titulo: Label = new Label();
                titulo.text = res.title;
                titulo.textWrap=true;
                titulo.fontSize = 18;
                titulo.style.fontWeight = "bold";
                titulo.textAlignment = "justify";
                titulo.verticalAlignment = "top";
                titulo.horizontalAlignment = "left";
                titulo.row = 0;
                titulo.margin = 5;
                titulo.color = new Color(titleTextColor);
                grid.addChild(titulo);

                const description: Label = new Label();
                description.text = res.author;
                description.fontSize = 15;
                description.style.fontWeight = "500";
                description.verticalAlignment = "middle";
                description.horizontalAlignment = "left";
                description.row = 1;
                description.textWrap = true;
                description.marginLeft = 5;
                description.color = new Color(descriptionTextColor);
                grid.addChild(description);
                
                const icono: Image = new Image();
                icono.src = res.thumbnail;
                icono.stretch = "fill";
                icono.row = 2;
                icono.width=this.width;
                icono.height="auto";
                icono.borderRadius=this.borderRadius;
                grid.addChild(icono);

                this.addChild(grid);
            }).catch((err)=>{
                this.removeChild(loading);
                
            })
        }else{
            if (view == TypeView.RECTANGLE){
                this.width = Screen.mainScreen.widthDIPs-10;
                this.height = (Screen.mainScreen.heightDIPs * 15) / 100;
            }else{
                this.width = Screen.mainScreen.widthDIPs-10;
                this.height = (Screen.mainScreen.heightDIPs * 30) / 100;
            }
            this.fetchMetadata(url).then((res) => {
                this.removeChild(loading);
                this.on(GestureTypes.tap, (args: TapGestureEventData) => {
                    Utils.openUrl(url);
                });
                if(view==TypeView.RECTANGLE){                    
                    const grid: GridLayout = new GridLayout();
                    grid.addColumn(new ItemSpec(1, GridUnitType.AUTO));
                    grid.addColumn(new ItemSpec(1, GridUnitType.STAR));
                    grid.addRow(new ItemSpec(1, GridUnitType.AUTO));
                    grid.addRow(new ItemSpec(1, GridUnitType.STAR));
                    grid.addRow(new ItemSpec(1, GridUnitType.STAR));
                    //add icono
                    const icono: Image = new Image();
                    icono.src = res.icon;
                    icono.width = (Screen.mainScreen.widthDIPs * 25) / 100;
                    icono.height = Screen.mainScreen.heightDIPs;
                    icono.stretch = "fill";
                    icono.col = 0;
                    icono.borderTopLeftRadius = borderRadiusImage;
                    icono.borderBottomLeftRadius = borderRadiusImage;
                    icono.verticalAlignment = "middle";
                    icono.rowSpan = 3;
                    grid.addChild(icono);

                    const titulo: Label = new Label();
                    titulo.text = res.title;
                    titulo.fontSize = 18;
                    titulo.style.fontWeight = "bold";
                    titulo.textAlignment = "center";
                    titulo.verticalAlignment = "top";
                    titulo.horizontalAlignment = "left";
                    titulo.col = 1;
                    titulo.row = 0;
                    titulo.margin = 5;
                    titulo.color = new Color(titleTextColor);
                    grid.addChild(titulo);

                    const description: Label = new Label();
                    description.text = res.description;
                    description.fontSize = 15;
                    description.style.fontWeight = "500";
                    description.verticalAlignment = "middle";
                    description.horizontalAlignment = "left";
                    description.col = 1;
                    description.rowSpan = 3;
                    description.textWrap = true;
                    description.marginLeft = 5;
                    description.marginTop = 5;
                    description.color = new Color(descriptionTextColor);
                    grid.addChild(description);
                    this.addChild(grid);
                }else {
                    const grid:GridLayout=new GridLayout();
                    grid.addRow(new ItemSpec(1, GridUnitType.STAR));
                    grid.addRow(new ItemSpec(1, GridUnitType.STAR));
                    const icono: Image = new Image();
                    icono.src = res.additionalImage;
                    icono.stretch = "aspectFill";
                    icono.row = 0;
                    icono.borderTopLeftRadius = borderRadiusImage;
                    icono.borderTopRightRadius = borderRadiusImage;
                    icono.verticalAlignment = "middle";
                    grid.addChild(icono);

                    const titulo: Label = new Label();
                    titulo.text = res.title;
                    titulo.fontSize = 18;
                    titulo.style.fontWeight = "bold";
                    titulo.textAlignment = "center";
                    titulo.verticalAlignment = "top";
                    titulo.horizontalAlignment = "left";
                    titulo.row = 1;
                    titulo.margin = 5;
                    titulo.color = new Color(titleTextColor);
                    grid.addChild(titulo);

                    const description: Label = new Label();
                    description.text = res.description;
                    description.fontSize = 15;
                    description.style.fontWeight = "500";
                    description.verticalAlignment = "middle";
                    description.horizontalAlignment = "left";
                    description.row = 1;
                    description.textWrap = true;
                    description.marginLeft = 5;
                    description.color = new Color(descriptionTextColor);
                    grid.addChild(description);

                    this.addChild(grid);
                }
                
            }).catch((err) => {
                console.log(err);
                this.removeChild(loading);
            });
        }
        
    }

    isYoutube():boolean{
        const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
        return youtubeRegex.test(this.url);
    }

    async getInfoFromYoutube(url:string){
        const oEmbedUrl = `https://www.youtube.com/oembed?url=${url}&format=json`;

        try {
            const response = await fetch(oEmbedUrl);
            const data = await response.json();
            return {
                title: data.title,
                author: data.author_name,
                thumbnail: data.thumbnail_url,
                html: data.html // Este es el iframe embebido para el video
            };
        } catch (error) {
            console.error("Error fetching oEmbed data:", error);
            return null;
        }
    }

    async extractMetaTagContent(htmlString: string, property: string): Promise<string | null> {
        const regex = new RegExp(`<meta[^>]*property=["']${property}["'][^>]*content=["']([^"']+)["']`, 'i');
        const match = regex.exec(htmlString);
        return match ? match[1] : null;
    }

    async fetchMetadata(url: string): Promise<any> {
        try {
            const html = await fetch(url);
            const parser = new HtmlParser(await html.text());
            const title = parser.getTitle();
            const description = parser.getDescription();
            const icon = parser.getIcon();
            const images = parser.getImages();

            // Obtener la primera imagen que no sea el ícono
            const additionalImage = images.find(img => img !== icon) || null;

            return {
                title,
                description,
                icon,
                additionalImage
            };
        } catch (error) {
            console.error('Error fetching page metadata:', error);
            return {
                title: 'Error',
                description: 'Error',
                icon: 'Error'
            };
        }
    }
}

// html-parser.ts
export class HtmlParser {
    private html: string;

    constructor(html: string) {
        this.html = html;
    }

    // Obtener el título y truncarlo
    getTitle(maxLength: number = 50): string | null {
        const titleMatch = this.html.match(/<title>([^<]*)<\/title>/);
        if (titleMatch) {
            let title = titleMatch[1];
            if (title.length > maxLength) {
                title = title.substring(0, maxLength) + '...'; // Añadir "..." al final si se trunca
            }
            return title;
        }
        return null;
    }

    // Obtener la descripción y truncarla
    getDescription(maxLength: number = 100): string | null {
        const descriptionMatch = this.html.match(/<meta\s+name="description"\s+content="([^"]*)"/) ||
            this.html.match(/<meta\s+property="og:description"\s+content="([^"]*)"/);
        if (descriptionMatch) {
            let description = descriptionMatch[1];
            if (description.length > maxLength) {
                description = description.substring(0, maxLength) + '...'; // Añadir "..." al final si se trunca
            }
            return description;
        }
        return null;
    }

    // Obtener el ícono
    getIcon(): string | null {
        const iconMatch = this.html.match(/<link\s+rel="icon"\s+href="([^"]*)"/) ||
            this.html.match(/<link\s+rel="shortcut icon"\s+href="([^"]*)"/);
        return iconMatch ? iconMatch[1] : null;
    }

    // Obtener la primera imagen disponible
    getImages(): string[] {
        const ogImages = this.html.match(/<meta\s+property="og:image"\s+content="([^"]*)"/g) || [];
        const imgTags = this.html.match(/<img\s+src="([^"]*)"/g) || [];

        const images = [
            ...ogImages.map(img => img.match(/content="([^"]*)"/)?.[1] || ''),
            ...imgTags.map(img => img.match(/src="([^"]*)"/)?.[1] || '')
        ];

        return images;
    }
}
