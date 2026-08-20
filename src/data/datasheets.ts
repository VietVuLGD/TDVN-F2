import {
  downloadDocuments,
  documentTypesList,
  type DownloadDocument,
  type DocumentType as StandardDocumentType,
} from "./downloads";
import type { LocalizedString, ProductCategoryKey } from "./products";

export type DocumentType =
  | "Datasheet"
  | "Catalogue"
  | "Installation Guide"
  | "User Manual"
  | "Certificate"
  | "Technical Document"
  | StandardDocumentType;

export type TechnicalDocument = {
  id: string;
  slug?: string;
  title: LocalizedString;
  type: string;
  productId?: string;
  category: ProductCategoryKey | "company-profile" | "general";
  fileUrl?: string;
  fileName?: string;
  fileSize?: string;
  language: "vi" | "en" | "both" | "bilingual";
  version?: string;
  date?: string;
  description: LocalizedString;
  status?: "available" | "updating";
  relatedProduct?: string;
  relatedProject?: string;
  relatedKnowledge?: string;
};

export const documentTypes: string[] = [
  "Datasheet",
  "Catalogue",
  "Installation Guide",
  "User Manual",
  "Certificate",
  "Technical Document",
];

export const technicalDocuments: TechnicalDocument[] = downloadDocuments.map((doc) => {
  const item: TechnicalDocument = {
    id: doc.id,
    slug: doc.slug,
    title: doc.title,
    type:
      doc.type === "datasheet"
        ? "Datasheet"
        : doc.type === "catalogue"
          ? "Catalogue"
          : doc.type === "installation-manual"
            ? "Installation Guide"
            : doc.type === "operation-manual"
              ? "User Manual"
              : doc.type === "certificate"
                ? "Certificate"
                : doc.type === "technical-document"
                  ? "Technical Document"
                  : doc.type,
    category: doc.category,
    language: doc.language === "bilingual" ? "both" : doc.language,
    description: doc.description,
    status: doc.status,
  };
  if (doc.updatedAt) item.date = doc.updatedAt;
  if (doc.fileUrl) item.fileUrl = doc.fileUrl;
  if (doc.fileName) item.fileName = doc.fileName;
  if (doc.fileSize) item.fileSize = doc.fileSize;
  if (doc.version) item.version = doc.version;
  if (doc.relatedProduct) {
    item.productId = doc.relatedProduct;
    item.relatedProduct = doc.relatedProduct;
  }
  if (doc.relatedProject) item.relatedProject = doc.relatedProject;
  if (doc.relatedKnowledge) item.relatedKnowledge = doc.relatedKnowledge;
  return item;
});

export { downloadDocuments, documentTypesList };
