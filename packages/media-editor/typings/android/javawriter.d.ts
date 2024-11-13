declare module com {
  export module squareup {
    export module javawriter {
      export class JavaWriter {
        public static class: java.lang.Class<com.squareup.javawriter.JavaWriter>;
        /** @deprecated */
        public emitField(param0: string, param1: string, param2: number): com.squareup.javawriter.JavaWriter;
        /** @deprecated */
        public emitField(param0: string, param1: string, param2: number, param3: string): com.squareup.javawriter.JavaWriter;
        public emitAnnotation(param0: string): com.squareup.javawriter.JavaWriter;
        public emitStaticImports(param0: androidNative.Array<string>): com.squareup.javawriter.JavaWriter;
        public emitEmptyLine(): com.squareup.javawriter.JavaWriter;
        public emitAnnotation(param0: java.lang.Class<any>, param1: any): com.squareup.javawriter.JavaWriter;
        public static stringLiteral(param0: string): string;
        public beginType(param0: string, param1: string): com.squareup.javawriter.JavaWriter;
        /** @deprecated */
        public beginType(param0: string, param1: string, param2: number): com.squareup.javawriter.JavaWriter;
        /** @deprecated */
        public beginType(param0: string, param1: string, param2: number, param3: string, param4: androidNative.Array<string>): com.squareup.javawriter.JavaWriter;
        public endMethod(): com.squareup.javawriter.JavaWriter;
        public endInitializer(): com.squareup.javawriter.JavaWriter;
        public emitAnnotation(param0: string, param1: any): com.squareup.javawriter.JavaWriter;
        public endControlFlow(param0: string): com.squareup.javawriter.JavaWriter;
        public beginMethod(param0: string, param1: string, param2: java.util.Set<javax.lang.model.element.Modifier>, param3: java.util.List<string>, param4: java.util.List<string>): com.squareup.javawriter.JavaWriter;
        /** @deprecated */
        public beginMethod(param0: string, param1: string, param2: number, param3: java.util.List<string>, param4: java.util.List<string>): com.squareup.javawriter.JavaWriter;
        public endControlFlow(): com.squareup.javawriter.JavaWriter;
        public emitStatement(param0: string, param1: androidNative.Array<any>): com.squareup.javawriter.JavaWriter;
        public emitStaticImports(param0: java.util.Collection<string>): com.squareup.javawriter.JavaWriter;
        public compressType(param0: string): string;
        public beginMethod(param0: string, param1: string, param2: java.util.Set<javax.lang.model.element.Modifier>, param3: androidNative.Array<string>): com.squareup.javawriter.JavaWriter;
        public emitEnumValue(param0: string): com.squareup.javawriter.JavaWriter;
        public emitField(param0: string, param1: string, param2: java.util.Set<javax.lang.model.element.Modifier>, param3: string): com.squareup.javawriter.JavaWriter;
        public emitSingleLineComment(param0: string, param1: androidNative.Array<any>): com.squareup.javawriter.JavaWriter;
        public close(): void;
        public emitAnnotation(param0: string, param1: java.util.Map<string, any>): com.squareup.javawriter.JavaWriter;
        /** @deprecated */
        public beginMethod(param0: string, param1: string, param2: number, param3: androidNative.Array<string>): com.squareup.javawriter.JavaWriter;
        public nextControlFlow(param0: string): com.squareup.javawriter.JavaWriter;
        public emitImports(param0: java.util.Collection<string>): com.squareup.javawriter.JavaWriter;
        public emitPackage(param0: string): com.squareup.javawriter.JavaWriter;
        public beginInitializer(param0: boolean): com.squareup.javawriter.JavaWriter;
        public endType(): com.squareup.javawriter.JavaWriter;
        public beginType(param0: string, param1: string, param2: java.util.Set<javax.lang.model.element.Modifier>, param3: string, param4: androidNative.Array<string>): com.squareup.javawriter.JavaWriter;
        public static type(param0: java.lang.Class<any>, param1: androidNative.Array<string>): string;
        public emitField(param0: string, param1: string): com.squareup.javawriter.JavaWriter;
        public emitAnnotation(param0: java.lang.Class<any>): com.squareup.javawriter.JavaWriter;
        public emitAnnotation(param0: java.lang.Class<any>, param1: java.util.Map<string, any>): com.squareup.javawriter.JavaWriter;
        public beginType(param0: string, param1: string, param2: java.util.Set<javax.lang.model.element.Modifier>): com.squareup.javawriter.JavaWriter;
        public beginControlFlow(param0: string): com.squareup.javawriter.JavaWriter;
        public emitField(param0: string, param1: string, param2: java.util.Set<javax.lang.model.element.Modifier>): com.squareup.javawriter.JavaWriter;
        public emitJavadoc(param0: string, param1: androidNative.Array<any>): com.squareup.javawriter.JavaWriter;
        public constructor(param0: java.io.Writer);
        public emitImports(param0: androidNative.Array<string>): com.squareup.javawriter.JavaWriter;
      }
      export module JavaWriter {
        export class Scope {
          public static class: java.lang.Class<com.squareup.javawriter.JavaWriter.Scope>;
          public static TYPE_DECLARATION: com.squareup.javawriter.JavaWriter.Scope;
          public static ABSTRACT_METHOD: com.squareup.javawriter.JavaWriter.Scope;
          public static NON_ABSTRACT_METHOD: com.squareup.javawriter.JavaWriter.Scope;
          public static CONTROL_FLOW: com.squareup.javawriter.JavaWriter.Scope;
          public static ANNOTATION_ATTRIBUTE: com.squareup.javawriter.JavaWriter.Scope;
          public static ANNOTATION_ARRAY_VALUE: com.squareup.javawriter.JavaWriter.Scope;
          public static INITIALIZER: com.squareup.javawriter.JavaWriter.Scope;
          public static values(): androidNative.Array<com.squareup.javawriter.JavaWriter.Scope>;
          public static valueOf(param0: string): com.squareup.javawriter.JavaWriter.Scope;
        }
      }
    }
  }
}

//Generics information:
