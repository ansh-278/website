import { researchEntries } from "@/content/research";
import { projectEntries } from "@/content/projects";
import { computeReferenceCodes } from "@/lib/referenceCode";

export const researchCodes = computeReferenceCodes(researchEntries);
export const projectCodes = computeReferenceCodes(projectEntries);
