import {
  CATEGORIES,
  FEATURES,
  CAPABILITIES,
  MATERIALS,
  FUELS,
  PURPOSES,
  PROJECT_TYPES,
  MASTER_ROLES,
} from '@/lib/config/portfolio.config';

// ----------------------------------------------------
// Універсальна функція
// ----------------------------------------------------

function getNames(
  source: readonly { id: string; name: string }[],
  ids?: string[]
): string[] {
  if (!ids?.length) return [];

  return ids
    .map(id => source.find(item => item.id === id)?.name)
    .filter((name): name is string => Boolean(name));
}

// ----------------------------------------------------
// Категорії
// ----------------------------------------------------

export const getCategoryNames = (ids?: string[]) =>
  getNames(CATEGORIES, ids);

// ----------------------------------------------------
// Особливості
// ----------------------------------------------------

export const getFeatureNames = (ids?: string[]) =>
  getNames(FEATURES, ids);

// ----------------------------------------------------
// Можливості
// ----------------------------------------------------

export const getCapabilityNames = (ids?: string[]) =>
  getNames(CAPABILITIES, ids);

// ----------------------------------------------------
// Матеріали
// ----------------------------------------------------

export const getMaterialNames = (ids?: string[]) =>
  getNames(MATERIALS, ids);

// ----------------------------------------------------
// Паливо
// ----------------------------------------------------

export const getFuelNames = (ids?: string[]) =>
  getNames(FUELS, ids);

// ----------------------------------------------------
// Призначення
// ----------------------------------------------------

export const getPurposeNames = (ids?: string[]) =>
  getNames(PURPOSES, ids);

// ----------------------------------------------------
// Тип проєкту
// ----------------------------------------------------

export const getProjectTypeName = (id?: string) =>
  PROJECT_TYPES.find(item => item.id === id)?.name;

// ----------------------------------------------------
// Ролі майстра
// ----------------------------------------------------

export const getMasterRoleNames = (ids?: string[]) =>
  getNames(MASTER_ROLES, ids);

//----------------------------------------------------
// Площа обігріву
//----------------------------------------------------

export function getHeatedAreaText(area?: {
  min: number;
  max: number;
}) {
  if (!area) return null;

  if (area.min === area.max) {
    return `${area.min} м²`;
  }

  return `${area.min}–${area.max} м²`;
}