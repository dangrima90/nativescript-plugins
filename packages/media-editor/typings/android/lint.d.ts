declare module androidx {
  export module recyclerview {
    export module lint {
      export class InvalidSetHasFixedSizeDetector {
        public static class: java.lang.Class<androidx.recyclerview.lint.InvalidSetHasFixedSizeDetector>;
        public getRecyclerViewIds(): java.util.List<string>;
        public visitMethodCall(param0: com.android.tools.lint.detector.api.JavaContext, param1: any, param2: com.intellij.psi.PsiMethod): void;
        public getApplicableMethodNames(): java.util.List<string>;
        public appliesTo(param0: com.android.resources.ResourceFolderType): boolean;
        public visitElement(param0: com.android.tools.lint.detector.api.XmlContext, param1: org.w3c.dom.Element): void;
        public getApplicableElements(): java.util.List<string>;
        public constructor();
      }
      export module InvalidSetHasFixedSizeDetector {
        export class Companion {
          public static class: java.lang.Class<androidx.recyclerview.lint.InvalidSetHasFixedSizeDetector.Companion>;
          public getDESCRIPTION(): string;
          public getISSUE(): com.android.tools.lint.detector.api.Issue;
        }
      }
    }
  }
}

declare module androidx {
  export module recyclerview {
    export module lint {
      export class RecyclerViewIssueRegistry {
        public static class: java.lang.Class<androidx.recyclerview.lint.RecyclerViewIssueRegistry>;
        public getIssues(): java.util.List<com.android.tools.lint.detector.api.Issue>;
        public getVendor(): com.android.tools.lint.client.api.Vendor;
        public getApi(): number;
        public getMinApi(): number;
        public constructor();
      }
    }
  }
}

//Generics information:
